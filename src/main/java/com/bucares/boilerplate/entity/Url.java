package com.bucares.boilerplate.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "url")
public class Url implements Serializable {

    private static final long serialVersionUID = -4341305418928689375L;
    @Id
    @Column(name = "id")
    private String id;
    @Column(name = "word")
    private String word;
    @Column(name = "url")
    private String url;

    /**
     * @return the id.
     */
    public String getId() {
        return id;
    }

    /**
     * @param id the id to set.
     */
    public void setId(String id) {
        this.id = id;
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

}
