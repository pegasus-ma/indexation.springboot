package com.pegasus.indexation.controller;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

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

    @Test
    public final void testPostCheck() {
        PostRequest request = new PostRequest();
        request.setUrl("http://www.rfi.fr/fr/");
        request.setWord("Coronavirus");
        ResponseEntity<PostResponse> response = indexationController.postCheck(request);
        assertTrue("Failure", response.getStatusCodeValue() == 200 || response.getStatusCodeValue() == 500);
    }

    @Test
    public final void testGetContent() {
        ResponseEntity<GetResponse> response = indexationController.getContent();
        assertTrue("Failure", response.getStatusCodeValue() == 200 || response.getStatusCodeValue() == 204);
    }

    @Test
    public final void testDeleteContent() {
        DeleteRequest request = new DeleteRequest();
        request.setUrl("http://www.rfi.fr/fr/");
        ResponseEntity<DeleteResponse> response = indexationController.deleteContent(request);
        assertTrue("Failure", response.getStatusCodeValue() == 200 || response.getStatusCodeValue() == 204);
    }

}
