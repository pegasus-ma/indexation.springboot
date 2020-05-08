package com.pegasus.indexation.model;

import static org.junit.Assert.assertSame;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

public class GetResponseTest {

	private GetResponse getResponse;

	@Before
	public void init() {
		getResponse = new GetResponse();
	}

	@Test
	public final void testGetUrlsFound() {
		String urlString = "http://www.rfi.fr/fr/";
		List<String> urlsFound = new ArrayList<String>();
		urlsFound.add(urlString);
		getResponse.setUrlsFound(urlsFound);
		assertSame("Failure", urlsFound, getResponse.getUrlsFound());
	}

	@Test
	public final void testSetUrlsFound() {
		String urlString = "http://www.rfi.fr/fr/";
		List<String> urlsFound = new ArrayList<String>();
		urlsFound.add(urlString);
		getResponse.setUrlsFound(urlsFound);
		assertSame("Failure", urlsFound, getResponse.getUrlsFound());
	}

}
