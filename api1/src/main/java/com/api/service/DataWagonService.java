package com.api.service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.domaine.Wagon;
import com.api.repository.WagonRepository;

 

@Service
public class DataWagonService implements IDataWagonService {
	@Autowired
	private  WagonRepository wagonRepository;

	public List<Wagon> getAllWagons() {
		List<Wagon> list = StreamSupport.stream(wagonRepository.findAll().spliterator(), false)
				.collect(Collectors.toList()); 
		return list;
	}

}
