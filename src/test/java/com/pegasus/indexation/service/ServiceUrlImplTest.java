package com.pegasus.indexation.service;

import static org.junit.Assert.assertEquals;

import java.util.UUID;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.pegasus.indexation.dao.IDAOUrl;
import com.pegasus.indexation.entity.Url;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebAppConfiguration
public class ServiceUrlImplTest {
    
    @Autowired
    private IDAOUrl daoUrl;
    
    @Autowired
    private IServiceUrl serviceUrl;

    @Test
    public final void testSave() {
        Url url = new Url();
        url.setId(UUID.randomUUID().toString());
        daoUrl.save(url);
    }

    @Test
    public final void testGetUrlsByWord() {
        Url url = new Url();
        url.setId(UUID.randomUUID().toString());
        url.setWord("Coronavirus");
        daoUrl.save(url);
        assertEquals("Failure", "Coronavirus", serviceUrl.getUrlsByWord("Coronavirus").get(0).getWord());
    }

    @Test
    public final void testGetUrlsByUrl() {
        Url url = new Url();
        url.setId(UUID.randomUUID().toString());
        url.setUrl("http://www.rfi.fr/fr/");
        daoUrl.save(url);
        assertEquals("Failure", "http://www.rfi.fr/fr/", serviceUrl.getUrlsByUrl("http://www.rfi.fr/fr/").get(0).getUrl());
    }

    @Test
    public final void testGetAllUrls() {
        daoUrl.deleteAll();
        Url url = new Url();
        url.setId(UUID.randomUUID().toString());
        daoUrl.save(url);
        assertEquals("Failure", 1, serviceUrl.getAllUrls().size());
    }

    @Test
    public final void testDeleteAll() {
        serviceUrl.deleteAll(serviceUrl.getUrlsByUrl("http://www.rfi.fr/fr/"));
        serviceUrl.deleteAll(serviceUrl.getUrlsByWord("Coronavirus"));
        assertEquals("Failure", 0, serviceUrl.getUrlsByUrl("http://www.rfi.fr/fr/").size() + serviceUrl.getUrlsByWord("Coronavirus").size());
    }

}
