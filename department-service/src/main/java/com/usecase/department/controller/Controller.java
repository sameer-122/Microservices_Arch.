package com.usecase.department.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usecase.department.model.Department;
import com.usecase.department.model.Employee;
import com.usecase.department.service.impl.IDepartmentServiceImpl;

@RestController
@RequestMapping("/department")
public class Controller {

	@Autowired
	IDepartmentServiceImpl departmentService;

	@PostMapping("/addDepartment")
	public Department add(@RequestBody Department department) {
		return this.departmentService.addDepartment(department);
	}
	
	@GetMapping("/departmentId/{id}")
	public Department findById(@PathVariable("id") Long id) {
		return this.departmentService.findByDepartmentId(id);
	}
	
	@GetMapping("/allDepartment")
	public List<Department> findAll() {
		return this.departmentService.findAllDepartment();
	}
	
	@GetMapping("/organization/{organizationId}")
	public List<Department> findByOrganization(@PathVariable("organizationId") Long organizationId) {
		return this.departmentService.findByOrganizationId(organizationId);
	}
	
	@GetMapping("/employeewithdepartment/{departmentId}")
	public List<Employee> findByDepartmentWithEmployee(@PathVariable("departmentId") Long departmentId){
		return this.departmentService.findByDepartmentWithEmployee(departmentId);
	}
	
	@DeleteMapping("/delete/{departmentId}")
	public String deleteDepartment(@PathVariable("departmentId") Long departmentId) {
		return this.departmentService.deleteDepartment(departmentId);
	}

	@PutMapping("/update/{departmentId}")
	public Department updateDepartment(@PathVariable("departmentId") Long departmentId,@RequestBody Department department) {
		return this.departmentService.updateDepartment(departmentId,department);
	}
}
