package com.usecase.department.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;



@Entity
public class Department {

    @Id
    private Long departmentId;
    
    private Long organizationId;
    
    private String departmentName;

    public Department() {

    }

    public Department(Long organizationId, String departmentName) {
        super();
        this.organizationId = organizationId;
        this.departmentName = departmentName;
    }

    public Long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Long id) {
        this.departmentId = id;
    }

    public Long getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Long organizationId) {
        this.organizationId = organizationId;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    @Override
    public String toString() {
        return "Department [id=" + departmentId + ", organizationId=" + organizationId + ", name=" + departmentName + "]";
    }

}
