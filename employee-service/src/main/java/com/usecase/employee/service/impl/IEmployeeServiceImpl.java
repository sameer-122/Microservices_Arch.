package com.usecase.employee.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usecase.employee.exception.EmployeeNotFoundException;
import com.usecase.employee.model.Employee;
import com.usecase.employee.repository.EmployeeRepository;
import com.usecase.employee.service.EmployeeService;

@Service
public class IEmployeeServiceImpl implements EmployeeService {
	@Autowired
	EmployeeRepository repo;
	boolean val;
	
	@Override
	public Employee addEmployee(Employee employee) {
		return this.repo.save(employee);	
	}
	
	@Override
	public Employee findById(String id) {
		Optional<Employee> opt = repo.findById(id);
		Employee emp = opt.orElseThrow( 
				()-> new EmployeeNotFoundException("Employee not exist") 
				);
		return emp;
	}
	
	@Override
	public List<Employee> findByDepartment(Long departmentid) {
		return this.repo.findAllBydepartmentId(departmentid);
	}
	
	@Override
	public List<Employee> findByOrganization(Long organizationid) {
		return this.repo.findAllByorganizationId(organizationid);
	}
	
	@Override
	public List<Employee> findAllEmployee(){
		return this.repo.findAll();
	}

//	}
	public String deleteById(String deleteId) {
		String str="";
		Employee emp=this.findById(deleteId);
		if(emp!=null)str="Employee has been deleted";
		this.repo.deleteById(deleteId);
		return str;
	}
	
	@Override
	public void deleteAllEmployee() {
		this.repo.deleteAll();
	}

	@Override
	public Employee updateEmployee(String employeeId, Employee employee) {
	
		Employee emp;
		emp=this.findById(employeeId);
			emp.setAge(employee.getAge());
			emp.setDepartmentId(employee.getDepartmentId());
			emp.setName(employee.getName());
			emp.setOrganizationId(employee.getOrganizationId());
			emp.setPosition(employee.getPosition());
			this.repo.save(emp);
		return emp;
	}
}
