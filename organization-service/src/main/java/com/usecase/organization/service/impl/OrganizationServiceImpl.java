package com.usecase.organization.service.impl;

import java.util.List;
import java.util.Optional;

import com.usecase.organization.exception.OrganizationNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usecase.organization.model.Organization;
import com.usecase.organization.repository.OrganizationRepository;
import com.usecase.organization.service.OrganizationService;

@Service
public class OrganizationServiceImpl implements OrganizationService {

	@Autowired
	private OrganizationRepository organizationRepository;

	@Override
	public Organization addOrganization(Organization organization) {
		return this.organizationRepository.save(organization);
	}

	@Override
	public List<Organization> findAllOrganization() {
		return this.organizationRepository.findAll();
	}

	@Override
	public Organization findByOrganizationId(Long organizationId) {
		Optional<Organization> organization=this.organizationRepository.findById(organizationId);
		Organization org= organization.orElseThrow(
				()-> new OrganizationNotFoundException("Organization does not found")
		);
		return org;
	}

	@Override
	public String deleteOrganization(Long organizationId) {

		String str="";
		this.findByOrganizationId(organizationId);
		this.organizationRepository.deleteById(organizationId);
		str="Organization has been deleted";
		return str;
	}

	@Override
	public Organization updateOrganization(Long organizationId, Organization organization) {
		Organization org= this.findByOrganizationId(organizationId);
		org.setOrganizationAddress(organization.getOrganizationAddress());
		org.setOrganizationName(organization.getOrganizationName());
		this.organizationRepository.save(org);
		return org;
	}
}
