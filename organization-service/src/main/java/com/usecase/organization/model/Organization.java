package com.usecase.organization.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Organization {

	@Id
	private Long organizationId;
	private String organizationName;
	private String organizationAddress;

	public Organization() {

	}
	
	public Organization(String organizationName, String organizationAddress) {
		this.organizationName = organizationName;
		this.organizationAddress = organizationAddress;
	}

	public Long getOrganizationId() {
		return organizationId;
	}

	public void setOrganizationId(Long organizationId) {
		this.organizationId = organizationId;
	}

	public String getOrganizationName() {
		return organizationName;
	}

	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}

	public String getOrganizationAddress() {
		return organizationAddress;
	}

	public void setOrganizationAddress(String organizationAddress) {
		this.organizationAddress = organizationAddress;
	}

//	public List<Department> getDepartments() {
//		return departments;
//	}
//
//	public void setDepartments(List<Department> departments) {
//		this.departments = departments;
//	}
//
//	public List<Employee> getEmployees() {
//		return employees;
//	}
//
//	public void setEmployees(List<Employee> employees) {
//		this.employees = employees;
//	}

	@Override
	public String toString() {
		return "Organization [id=" + organizationId + ", name=" + organizationName + ", address=" + organizationAddress + "]";
	}

}