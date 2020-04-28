package com.pegasus.indexation.controller;

import static org.junit.Assert.assertTrue;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

public class AppControllerTest {
	
	@Autowired
    private AppController appController;

	@Test
	void testGetVersion() {
		ResponseEntity<Map<String, String>> response = appController.getVersion();
        assertTrue("Failure", response.getStatusCodeValue() == 200);
	}

}
