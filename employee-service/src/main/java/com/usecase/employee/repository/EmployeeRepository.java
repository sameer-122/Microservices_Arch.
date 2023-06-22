package com.usecase.employee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.employee.model.Employee;


public interface EmployeeRepository extends JpaRepository <Employee, String> {
    public Employee findByid(String id);
    public List<Employee> findAllBydepartmentId(Long departmentid);
    public List<Employee> findAllByorganizationId(Long organizationid);
}


