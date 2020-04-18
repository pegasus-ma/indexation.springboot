package com.bucares.boilerplate.model;

import java.io.Serializable;


/**
 * 
 * @author hongyu.ma
 *
 */
public class PostResponse implements Serializable {

    private static final long serialVersionUID = -7081805896943833645L;
    private String state;

    /**
     * @return the state.
     */
    public String getState() {
        return state;
    }

    /**
     * @param state the state to set.
     */
    public void setState(String state) {
        this.state = state;
    }

}
