package com.pegasus.indexation.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pegasus.indexation.dao.IDAOUrl;
import com.pegasus.indexation.entity.Url;


@Service
public class ServiceUrlImpl implements IServiceUrl {

    @Autowired
    private IDAOUrl daoUrl;

    @Override
    public Url save(Url url) {
        url.setId(UUID.randomUUID().toString());
        return daoUrl.save(url);
    }

    @Override
    public List<Url> getUrlsByWord(String word) {
        Iterable<Url> iterable = daoUrl.findAll();
        List<Url> list = new ArrayList<Url>();
        Iterator<Url> iterator = iterable.iterator();
        while (iterator.hasNext()) {
            Url next = iterator.next();
            if (word.equals(next.getWord())) {
                list.add(next);
            }
        }
        return list;
    }
    
    @Override
    public List<Url> getUrlsByUrl(String url) {
        Iterable<Url> iterable = daoUrl.findAll();
        List<Url> list = new ArrayList<Url>();
        Iterator<Url> iterator = iterable.iterator();
        while (iterator.hasNext()) {
            Url next = iterator.next();
            if (url.equals(next.getUrl())) {
                list.add(next);
            }
        }
        return list;
    }

    @Override
    public List<Url> getAllUrls() {

        Iterable<Url> iterable = daoUrl.findAll();
        List<Url> list = new ArrayList<Url>();
        Iterator<Url> iterator = iterable.iterator();
        while (iterator.hasNext()) {
            Url next = iterator.next();
            list.add(next);
        }
        return list;
    }

    @Override
    public void deleteAll(List<Url> urls) {
        daoUrl.deleteAll(urls);
    }
}
