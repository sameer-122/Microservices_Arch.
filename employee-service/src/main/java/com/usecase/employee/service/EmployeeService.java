package com.usecase.employee.service;

import java.util.List;

//import org.springframework.http.ResponseEntity;

import com.usecase.employee.model.Employee;

public interface EmployeeService {

	public Employee addEmployee(Employee employee);
	public Employee findById(String id);
	public List<Employee> findByDepartment(Long departmentid);
	public List<Employee> findByOrganization(Long organizationid);
	public List<Employee> findAllEmployee();
	public String deleteById(String deleteId);
	public void deleteAllEmployee();
	public Employee updateEmployee(String employeeId, Employee employee);
}
