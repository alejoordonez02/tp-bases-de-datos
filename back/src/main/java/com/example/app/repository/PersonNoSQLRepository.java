package com.example.app.repository;

import com.example.app.model.PersonNoSQL;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonNoSQLRepository extends MongoRepository<PersonNoSQL, String> {
}

