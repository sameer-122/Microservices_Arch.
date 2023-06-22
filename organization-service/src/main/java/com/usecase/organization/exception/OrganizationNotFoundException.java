package com.usecase.organization.exception;

public class OrganizationNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public OrganizationNotFoundException() {
		super();
	}
	public OrganizationNotFoundException(String msg) {
		super(msg);
	}
}
