package com.example.app.service;

import com.example.app.model.PersonNoSQL;
import com.example.app.repository.PersonNoSQLRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PersonNoSQLService {

  @Autowired
  private PersonNoSQLRepository personNoSQLRepository;

  public List<PersonNoSQL> getPeople() {
    return personNoSQLRepository.findAll();
  }

  public PersonNoSQL addPerson(PersonNoSQL person) {
    return personNoSQLRepository.save(person);
  }

  public void deletePerson(Long id) {
      personNoSQLRepository.deleteById(id.toString());
  }
}
