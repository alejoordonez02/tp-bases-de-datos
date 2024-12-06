package com.example.app.repository;

import com.example.app.model.PersonSQL;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface PersonSQLRepository extends JpaRepository<PersonSQL, Long> {
}
