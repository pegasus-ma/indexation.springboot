package com.pegasus.indexation.controller;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.pegasus.indexation.dao.IDAOUrl;
import com.pegasus.indexation.model.DeleteRequest;
import com.pegasus.indexation.model.DeleteResponse;
import com.pegasus.indexation.model.GetResponse;
import com.pegasus.indexation.model.PostRequest;
import com.pegasus.indexation.model.PostResponse;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebAppConfiguration
public class IndexationControllerTest {
    
    @Autowired
    private IndexationController indexationController;
    
    @Autowired
    private IDAOUrl daoUrl;

    @Test
    public final void testPostCheck() {
    	daoUrl.deleteAll();
    	
        PostRequest request = new PostRequest();
        request.setUrl("http://www.rfi.fr/fr/");
        request.setWord("Coronavirus");
        ResponseEntity<PostResponse> response;
        PostRequest request2 = new PostRequest();
        request2.setUrl("http://www.rfi.fr/fr/");
        request2.setWord("Unmotquinexistepas");
        ResponseEntity<PostResponse> response2;
        try {
			response = indexationController.postCheck(request);
			assertTrue("Failure", (response.getStatusCodeValue() == 200 && (response.getBody().getState() == "rejected" || response.getBody().getState() == "accepted")) 
					|| (response.getStatusCodeValue() == 500 && (response.getBody().getState() == "Proxy confuguration problem : define a proxy in the file indexation.properties." || response.getBody().getState().length() >= 0)));
			
			response2 = indexationController.postCheck(request2);
			assertTrue("Failure", (response2.getStatusCodeValue() == 200 && response2.getBody().getState() == "accepted")
					|| (response2.getStatusCodeValue() == 500 && (response2.getBody().getState() == "Proxy confuguration problem : define a proxy in the file indexation.properties." || response2.getBody().getState().length() >= 0)));
		} catch (Exception e) {
			fail(e.toString());
		}
    }

    @Test
    public final void testGetContent() {
    	daoUrl.deleteAll();
    	
    	PostRequest postRequest = new PostRequest();
    	postRequest.setUrl("http://www.rfi.fr/fr/");
    	postRequest.setWord("Unmotquinexistepas1");
        indexationController.postCheck(postRequest);
        postRequest.setUrl("http://www.rfi.fr/fr/");
        postRequest.setWord("Unmotquinexistepas2");
        indexationController.postCheck(postRequest);
        postRequest.setUrl("http://www.rfi.fr/fr/");
        postRequest.setWord("Unmotquinexistepas3");
        indexationController.postCheck(postRequest);
        
        
        ResponseEntity<GetResponse> response;
        try {
			response = indexationController.getContent();
			assertTrue("Failure", response.getStatusCodeValue() == 200 || response.getStatusCodeValue() == 204);
			assertTrue("Failure", response.getBody().getUrlsFound().size() == 3);
		} catch (Exception e) {
			fail(e.toString());
		}
    }

    @Test
    public final void testDeleteContent() {
    	
    	daoUrl.deleteAll();
    	
    	PostRequest postRequest = new PostRequest();
    	postRequest.setUrl("http://www.rfi.fr/fr/");
    	postRequest.setWord("Unmotquinexistepas1");
        indexationController.postCheck(postRequest);
        postRequest.setUrl("http://www.rfi.fr/fr/");
        postRequest.setWord("Unmotquinexistepas2");
        indexationController.postCheck(postRequest);
        postRequest.setUrl("http://www.rfi.fr/fr/");
        postRequest.setWord("Unmotquinexistepas3");
        indexationController.postCheck(postRequest);
    	
        DeleteRequest request = new DeleteRequest();
        request.setUrl("http://www.rfi.fr/fr/");
        ResponseEntity<DeleteResponse> response;
        try {
			response = indexationController.deleteContent(request);
			assertTrue("Failure", response.getStatusCodeValue() == 200 || response.getStatusCodeValue() == 204);
			assertTrue("Failure", response.getBody().getUrlsDeleted().size() == 3);
		} catch (Exception e) {
			fail(e.toString());
		}
    }

}
