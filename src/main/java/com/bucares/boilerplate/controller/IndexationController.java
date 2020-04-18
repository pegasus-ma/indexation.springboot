package com.bucares.boilerplate.controller;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.apache.commons.collections4.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bucares.boilerplate.entity.Url;
import com.bucares.boilerplate.model.DeleteRequest;
import com.bucares.boilerplate.model.DeleteResponse;
import com.bucares.boilerplate.model.GetResponse;
import com.bucares.boilerplate.model.PostRequest;
import com.bucares.boilerplate.model.PostResponse;
import com.bucares.boilerplate.service.IServiceUrl;
import com.bucares.boilerplate.util.SslUtil;

/**
 * 
 * @author hongyu.ma
 *
 */
@RestController
public class IndexationController {
    
    @Autowired
    private IServiceUrl serviceUrl;

    @PostMapping("/api/content/check")
    public ResponseEntity<PostResponse> postCheck(@RequestBody PostRequest request) {
        
        PostResponse response = new PostResponse();
        
        try {

            Properties prop = new Properties();
            prop.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("indexation.properties"));
            
            final String myProxy = prop.getProperty("indexation.proxy.host");
            final Integer myPort = Integer.parseInt(prop.getProperty("indexation.proxy.port"));
            
            if (myProxy == null || "".equals(myProxy) || myPort == null) {
                response.setState("Proxy confuguration problem : define a proxy in the file indexation.properties.");
                return new ResponseEntity<PostResponse>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }
            
            System.setProperty("https.protocols", "TLSv1,TLSv1.1,TLSv1.2");
            
            Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(myProxy, myPort));
            URL url = new URL(request.getUrl());
            SslUtil.ignoreSsl();
            URLConnection urlConnection = url.openConnection();

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

            String line;
            
            while ((line = bufferedReader.readLine()) != null) {
                if (line.contains(request.getWord())) {
                    bufferedReader.close();
                    response.setState("rejected");
                    return new ResponseEntity<PostResponse>(response, HttpStatus.OK);
                }
            }
            
            Url entity = new Url();
            entity.setUrl(request.getUrl());
            entity.setWord(request.getWord());
            serviceUrl.save(entity);

            bufferedReader.close();
            response.setState("accepted");
        } catch (Exception e) {
            response.setState(e.toString());
            return new ResponseEntity<PostResponse>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<PostResponse>(response, HttpStatus.OK);
    }

    @GetMapping("/api/content")
    public ResponseEntity<GetResponse> getContent() {

        GetResponse response = new GetResponse();
        List<String> urlStrings = new ArrayList<String>();
        
        List<Url> urls = serviceUrl.getAllUrls();
        
        if (CollectionUtils.isEmpty(urls)) {
            return new ResponseEntity<GetResponse>(response, HttpStatus.NO_CONTENT);
        }
        
        for (Url url : urls) {
            urlStrings.add(url.getUrl());   
        }
        
        response.setUrlsFound(urlStrings);
        
        return new ResponseEntity<GetResponse>(response, HttpStatus.OK);
    }

    @DeleteMapping("/api/content")
    public ResponseEntity<DeleteResponse> deleteContent(@RequestBody DeleteRequest request) {

        DeleteResponse response = new DeleteResponse();
        List<String> urlStrings = new ArrayList<String>();
        
        List<Url> urls = serviceUrl.getUrlsByUrl(request.getUrl());
        
        if (CollectionUtils.isEmpty(urls)) {
            return new ResponseEntity<DeleteResponse>(response, HttpStatus.NO_CONTENT);
        }
        
        for (Url url : urls) {
            urlStrings.add(url.getUrl());   
        }
        
        serviceUrl.deleteAll(urls);
        
        response.setUrlsDeleted(urlStrings);
        
        return new ResponseEntity<DeleteResponse>(response, HttpStatus.OK);
    }
}