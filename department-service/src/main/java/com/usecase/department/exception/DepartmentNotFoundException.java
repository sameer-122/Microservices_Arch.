package com.usecase.department.exception;

public class DepartmentNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public DepartmentNotFoundException() {
		super();
	}
	public DepartmentNotFoundException(String msg) {
		super(msg);
	}
}
