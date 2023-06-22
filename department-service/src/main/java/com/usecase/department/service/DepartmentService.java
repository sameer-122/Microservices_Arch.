package com.usecase.department.service;

import java.util.List;

import com.usecase.department.model.Department;
import com.usecase.department.model.Employee;

public interface DepartmentService {
	public Department addDepartment(Department department);
	public Department findByDepartmentId(Long departmentId);
	public List<Department> findAllDepartment();
	public List<Department> findByOrganizationId(Long organizationId);
	public List<Employee> findByDepartmentWithEmployee(Long departmentId);
	public String deleteDepartment(Long departmentId);
	public Department updateDepartment(Long departmentId,Department department);
}
