package com.usecase.organization.service;

import com.usecase.organization.model.Organization;

import java.util.List;

public interface OrganizationService {
    public Organization addOrganization(Organization organization);
    public List<Organization> findAllOrganization();
    public Organization findByOrganizationId(Long organizationId);
    public String deleteOrganization(Long organizationId);
	Organization updateOrganization(Long organizationId, Organization organization);
}
