package com.usecase.department.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.usecase.department.exception.DepartmentNotFoundException;

@RestControllerAdvice
public class CustomExceptionHandler {

	@ExceptionHandler(DepartmentNotFoundException.class)
	public ResponseEntity<String> handleDepartmentNotFound(
			DepartmentNotFoundException enfe){
		return new ResponseEntity<String>(
				enfe.getMessage(),HttpStatus.NOT_FOUND);

	}
}
