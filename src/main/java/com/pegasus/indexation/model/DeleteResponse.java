package com.pegasus.indexation.model;

import java.io.Serializable;
import java.util.List;

/**
 * 
 * @author hongyu.ma
 *
 */
public class DeleteResponse implements Serializable {

    private static final long serialVersionUID = -7081805896943833645L;
    private List<String> urlsDeleted;

    /**
     * @return the urlsDeleted.
     */
    public List<String> getUrlsDeleted() {
        return urlsDeleted;
    }

    /**
     * @param urlsDeleted the urlsDeleted to set.
     */
    public void setUrlsDeleted(List<String> urlsDeleted) {
        this.urlsDeleted = urlsDeleted;
    }

}
