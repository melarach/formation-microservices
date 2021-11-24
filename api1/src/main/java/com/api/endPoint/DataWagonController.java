package com.api.endPoint;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.domaine.Wagon;
import com.api.service.IDataWagonService;

@RestController
@RequestMapping(path = "/wagons")
public class DataWagonController {
	@Autowired
	private IDataWagonService dataWagonService;

	@GetMapping(path = "/")
	//@RolesAllowed("user")
	@PreAuthorize("hasAuthority('app-user')")
	//@PreAuthorize("hasRole('user')")
	public List<Wagon> getAllDatas() {
		return dataWagonService.getAllWagons();
	}

	@PostMapping(path = "/")
	public List<Wagon> getAllDaas() {
		return dataWagonService.getAllWagons();
	}
	 
}
