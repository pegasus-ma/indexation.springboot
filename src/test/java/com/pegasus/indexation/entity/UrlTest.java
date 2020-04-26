package com.pegasus.indexation.entity;

import static org.junit.Assert.assertSame;

import java.util.UUID;

import org.junit.Before;
import org.junit.Test;

public class UrlTest {
    
    private Url url;
    
    @Before
    public void init() {
        url = new Url();
    }

    @Test
    public final void testGetId() {
        String id = UUID.randomUUID().toString();
        url.setId(id);
        assertSame("Failure", id, url.getId());
    }

    @Test
    public final void testSetId() {
        String id = UUID.randomUUID().toString();
        url.setId(id);
        assertSame("Failure", id, url.getId());
    }

    @Test
    public final void testGetWord() {
        String word = "Coronavirus";
        url.setWord(word);
        assertSame("Failure", word, url.getWord());
    }

    @Test
    public final void testSetWord() {
        String word = "Coronavirus";
        url.setWord(word);
        assertSame("Failure", word, url.getWord());
    }

    @Test
    public final void testGetUrl() {
        String urlString = "http://www.rfi.fr/fr/";
        url.setUrl(urlString);
        assertSame("Failure", urlString, url.getUrl());
    }

    @Test
    public final void testSetUrl() {
        String urlString = "http://www.rfi.fr/fr/";
        url.setUrl(urlString);
        assertSame("Failure", urlString, url.getUrl());
    }

}
