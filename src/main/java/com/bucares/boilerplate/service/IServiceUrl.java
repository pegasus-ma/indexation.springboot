package com.bucares.boilerplate.service;

import java.util.List;

import com.bucares.boilerplate.entity.Url;

public interface IServiceUrl {
    Url save(Url url);
    List<Url> getUrlsByWord(String word);
    List<Url> getUrlsByUrl(String url);
    List<Url> getAllUrls();
    void deleteAll(List<Url> urls);
}