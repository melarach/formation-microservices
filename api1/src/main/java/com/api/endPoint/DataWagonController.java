package com.api.endPoint;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	// @Secured({ "ROLE_CHARGE_A", "ROLE_CHEF_DE_GROUPE" })
	// @PreAuthorize("hasAuthority('UER')")
	public List<Wagon> getAllDatas() {
		return dataWagonService.getAllWagons();
	}
}
