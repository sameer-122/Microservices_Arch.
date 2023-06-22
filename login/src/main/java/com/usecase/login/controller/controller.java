package com.usecase.login.controller;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.usecase.login.model.Login;
import com.usecase.login.serviceimpl.LoginServiceImpl;

@RestController
@RequestMapping("/login")
public class controller {
	
	String token;
	@Autowired
	private LoginServiceImpl uService;

	@PostMapping("/signin")
	public ResponseEntity<Login> login(@RequestBody Login login){
		Login logn = uService.username(login.getUsername());
		
//		System.out.println(logn);
		token=this.authenticateAndGetToken(login);
		System.out.println(this.authenticateAndGetToken(login));
		if (logn==null)
 			return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).build();
		else if (login.getPassword().equals(logn.getPassword()))
		{ 
			System.out.println(ResponseEntity.status(HttpStatus.SC_CREATED).body(logn));
			
		 return ResponseEntity.status(HttpStatus.SC_CREATED).body(logn);
		}
		return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).build();
	}
	
	@PostMapping("/saveCred")
	public Login savePassword(@RequestBody Login login){
		return this.uService.saveCred(login);
	}

//	@PostMapping("/authenticate")
	public String authenticateAndGetToken(@RequestBody Login login){
		return this.uService.generateToken(login.getUsername());
	}
	
}
