package com.pegasus.indexation.model;

import java.io.Serializable;
import java.util.List;

/**
 * 
 * @author hongyu.ma
 *
 */
public class GetResponse implements Serializable {

    private static final long serialVersionUID = -7081805896943833645L;
    private List<String> urlsFound;

    /**
     * @return the urlsFound.
     */
    public List<String> getUrlsFound() {
        return urlsFound;
    }

    /**
     * @param urlsFound the urlsFound to set.
     */
    public void setUrlsFound(List<String> urlsFound) {
        this.urlsFound = urlsFound;
    }

}
