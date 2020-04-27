package com.pegasus.indexation.model;

import static org.junit.Assert.assertSame;

import org.junit.Before;
import org.junit.Test;

public class DeleteRequestTest {

	private DeleteRequest deleteRequest;

	@Before
    public void init() {
		deleteRequest = new DeleteRequest();
    }


	@Test
    public final void testGetUrl() {
        String urlString = "http://www.rfi.fr/fr/";
        deleteRequest.setUrl(urlString);
        assertSame("Failure", urlString, deleteRequest.getUrl());
    }

    @Test
    public final void testSetUrl() {
        String urlString = "http://www.rfi.fr/fr/";
        deleteRequest.setUrl(urlString);
        assertSame("Failure", urlString, deleteRequest.getUrl());
    }

}
