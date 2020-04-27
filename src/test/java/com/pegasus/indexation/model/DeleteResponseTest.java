package com.pegasus.indexation.model;

import static org.junit.Assert.assertSame;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class DeleteResponseTest {

	private DeleteResponse deleteResponse;

	@Before
	public void init() {
		deleteResponse = new DeleteResponse();
	}

	@Test
	public final void testGetUrlsDeleted() {
		String urlString = "http://www.rfi.fr/fr/";
		List<String> urlsDeleted = new ArrayList<String>();
		urlsDeleted.add(urlString);
		deleteResponse.setUrlsDeleted(urlsDeleted);
		assertSame("Failure", urlString, deleteResponse.getUrlsDeleted());
	}

	@Test
	public final void testSetUrlsDeleted() {
		String urlString = "http://www.rfi.fr/fr/";
		List<String> urlsDeleted = new ArrayList<String>();
		urlsDeleted.add(urlString);
		deleteResponse.setUrlsDeleted(urlsDeleted);
		assertSame("Failure", urlString, deleteResponse.getUrlsDeleted());
	}

}
