package com.bucares.boilerplate.dao;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.bucares.boilerplate.entity.Url;


@Repository
public interface IDAOUrl extends PagingAndSortingRepository<Url, String> {

}
