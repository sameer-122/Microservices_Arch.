package com.usecase.organization.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.organization.model.Organization;

public interface OrganizationRepository extends JpaRepository<Organization, Long>{

	public Organization findByorganizationId(Long organizationId);

}
