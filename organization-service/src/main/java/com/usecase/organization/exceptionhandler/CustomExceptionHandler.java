package com.usecase.organization.exceptionhandler;

import com.usecase.organization.exception.OrganizationNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(OrganizationNotFoundException.class)
    public ResponseEntity<String> handleOrganizationNotFound(
            OrganizationNotFoundException enfe){
        return new ResponseEntity<String>(
                enfe.getMessage(), HttpStatus.NOT_FOUND);

    }
}
