package com.pegasus.indexation.service;

import java.util.List;

import com.pegasus.indexation.entity.Url;

public interface IServiceUrl {
    Url save(Url url);
    List<Url> getUrlsByWord(String word);
    List<Url> getUrlsByUrl(String url);
    List<Url> getAllUrls();
    void deleteAll(List<Url> urls);
}