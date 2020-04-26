package com.pegasus.indexation.model;

import java.io.Serializable;

/**
 *
 * @author hongyu.ma
 *
 */
public class DeleteRequest implements Serializable {

    private static final long serialVersionUID = -647043652448144054L;
    private String url;

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
