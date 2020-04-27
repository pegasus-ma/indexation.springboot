package com.pegasus.indexation.model;

import static org.junit.Assert.assertSame;

import org.junit.Before;
import org.junit.Test;

public class PostRequestTest {

	private PostRequest postRequest;
	
	@Before
	public void init() {
		postRequest = new PostRequest();
	}
	
	@Test
	public final void testGetUrl() {
		String urlString = "http://www.rfi.fr/fr/";
		postRequest.setUrl(urlString);
		assertSame("Failure", urlString, postRequest.getUrl());
	}

	@Test
	public final void testSetUrl() {
		String urlString = "http://www.rfi.fr/fr/";
		postRequest.setUrl(urlString);
		assertSame("Failure", urlString, postRequest.getUrl());
	}
	
	@Test
    public final void testGetWord() {
        String word = "Coronavirus";
        postRequest.setWord(word);
        assertSame("Failure", word, postRequest.getWord());
    }

    @Test
    public final void testSetWord() {
        String word = "Coronavirus";
        postRequest.setWord(word);
        assertSame("Failure", word, postRequest.getWord());
    }
}
