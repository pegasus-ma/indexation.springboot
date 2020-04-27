package com.pegasus.indexation.controller;

import static org.junit.Assert.assertTrue;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringRunner.class)
@SpringBootTest
@WebAppConfiguration
class AppControllerTest {
	
	@Autowired
    private AppController appController;

	@Test
	void testGetVersion() {
		ResponseEntity<Map<String, String>> response = appController.getVersion();
        assertTrue("Failure", response.getStatusCodeValue() == 200);
	}

}
