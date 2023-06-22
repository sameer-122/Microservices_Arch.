package com.usecase.login.service;

import com.usecase.login.model.Login;

public interface LoginService {

	public Login username(String username);
	public Login saveCred(Login login);
}
