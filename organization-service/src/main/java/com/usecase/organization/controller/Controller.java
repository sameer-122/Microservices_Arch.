package com.usecase.organization.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.usecase.organization.model.Organization;
import com.usecase.organization.service.impl.OrganizationServiceImpl;


@RestController
@RequestMapping("/organization")
public class Controller {

	
	@Autowired
	private OrganizationServiceImpl organizationService;
	
	@PostMapping("/addOrganization")
	public Organization add(@RequestBody Organization organization) {
		return this.organizationService.addOrganization(organization);
	}
	
	@GetMapping("/allOrganization")
	public List<Organization> findAll() {
		return this.organizationService.findAllOrganization();
	}
	
	@GetMapping("/organizationId/{id}")
	public ResponseEntity<Organization> findByOrganizationId(@PathVariable("id") Long organizationId) {
		return new ResponseEntity<Organization>(this.organizationService.findByOrganizationId(organizationId), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{organizationId}")
	public String deleteOrganization(@PathVariable("organizationId") Long organizationId){
		return this.organizationService.deleteOrganization(organizationId);
	}

	@PutMapping("/update/{organizationId}")
	public Organization updateOrganization(@PathVariable("organizationId") Long organizationId,@RequestBody Organization organization){
		 return this.organizationService.updateOrganization(organizationId,organization);
	}

}
