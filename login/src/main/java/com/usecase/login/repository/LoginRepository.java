package com.usecase.login.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.usecase.login.model.Login;

public interface LoginRepository extends JpaRepository<Login,String> {

	public Login findByusername(String username);

}
