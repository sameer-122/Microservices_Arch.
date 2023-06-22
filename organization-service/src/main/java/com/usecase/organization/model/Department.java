package com.usecase.organization.model;


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

    public Long getdepartmentId() {
        return departmentId;
    }

    public void setdepartmentId(Long id) {
        this.departmentId = id;
    }

    public Long getOrganizationId() {
        return organizationId;
    }

    public void setOrganizationId(Long organizationId) {
        this.organizationId = organizationId;
    }

    public String getdepartmentName() {
        return departmentName;
    }

    public void setdepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    @Override
    public String toString() {
        return "Department [id=" + departmentId + ", organizationId=" + organizationId + ", name=" + departmentName + "]";
    }

}
