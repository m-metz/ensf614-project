package com.ensf614project.movietheatre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.RegisteredUser;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Long> {

    RegisteredUser findRegisteredUserByEmailAndPassword(String email, String password);

    RegisteredUser findRegisteredUserByEmail(String email);
}
