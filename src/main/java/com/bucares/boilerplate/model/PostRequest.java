package com.bucares.boilerplate.model;

import java.io.Serializable;

/**
 *
 * @author hongyu.ma
 *
 */
public class PostRequest implements Serializable {

    private static final long serialVersionUID = -647043652448144054L;
    private String url;
    private String word;

    /**
     * @return the url.
     */
    public String getUrl() {
        return url;
    }

    /**
     * @param url the url to set.
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * @return the word.
     */
    public String getWord() {
        return word;
    }

    /**
     * @param word the word to set.
     */
    public void setWord(String word) {
        this.word = word;
    }

}
