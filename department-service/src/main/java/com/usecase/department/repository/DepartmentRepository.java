package com.usecase.department.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.department.model.Department;

public interface DepartmentRepository extends JpaRepository<Department, Long>{
	
//	public Department findBydepartmentid(Long id);
	public List<Department> findAllByorganizationId(Long organizationId);

	public Department findBydepartmentId(Long departmentId);
	
}
