package com.usecase.department.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usecase.department.exception.DepartmentNotFoundException;
import com.usecase.department.model.Department;
import com.usecase.department.model.Employee;
import com.usecase.department.repository.DepartmentRepository;
import com.usecase.department.repository.EmployeeRepository;
import com.usecase.department.service.DepartmentService;

@Service
public class IDepartmentServiceImpl implements DepartmentService{

	@Autowired
	DepartmentRepository departmentRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Department addDepartment(Department department) {
		return this.departmentRepository.save(department);
	}

	@Override
	public Department findByDepartmentId(Long id) {
		Optional<Department> dep=this.departmentRepository.findById(id);
		Department dept= dep.orElseThrow( 
				()-> new DepartmentNotFoundException("Department does not exist") 
				);
		return dept;
	}

	@Override
	public List<Department> findAllDepartment() {
		return this.departmentRepository.findAll();
	}

	@Override
	public List<Department> findByOrganizationId(Long organizationId) {
		return this.departmentRepository.findAllByorganizationId(organizationId);
	}

	@Override
	public List<Employee> findByDepartmentWithEmployee(Long departmentId){
		return this.employeeRepository.findAllBydepartmentId(departmentId);
	}
	
	@Override
	public String deleteDepartment(Long departmentId) {
		String str;
		this.findByDepartmentId(departmentId);
		this.departmentRepository.deleteById(departmentId);
		str="Department has been deleted";
		return str;
	}

	@Override
	public Department updateDepartment(Long departmentId,Department department) {
		Department dep=this.findByDepartmentId(departmentId);
		dep.setDepartmentName(department.getDepartmentName());
		dep.setOrganizationId(department.getOrganizationId());
		this.departmentRepository.save(dep);
		return dep;
	}
}
