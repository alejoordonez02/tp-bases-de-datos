package com.example.app.service;

import com.example.app.model.PersonSQL;
import com.example.app.repository.PersonSQLRepository;
import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PersonSQLService {

  @Autowired
  private PersonSQLRepository personSQLRepository;

  public List<PersonSQL> getPeople() {
    return personSQLRepository.findAll();
  }

  public PersonSQL addPerson(PersonSQL person) {
    return personSQLRepository.save(person);
  }

  public void deletePerson(Long id) {
    personSQLRepository.deleteById(id);
  }
}

