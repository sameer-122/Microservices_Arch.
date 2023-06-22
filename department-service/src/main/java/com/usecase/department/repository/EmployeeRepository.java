package com.usecase.department.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.department.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	public List<Employee> findAllBydepartmentId(Long departmentId);

}
