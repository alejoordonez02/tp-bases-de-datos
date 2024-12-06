package com.example.app.controller;

import com.example.app.model.PersonSQL;
import com.example.app.service.PersonSQLService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;

@RestController
@RequestMapping("/personSQL")
public class PersonSQLController {

  @Autowired
  private PersonSQLService personSQLService;

  @GetMapping
  @Operation(summary = "Get all people")
  public ResponseEntity<List<PersonSQL>> getPeople() {
    return ResponseEntity.ok(personSQLService.getPeople());
  }

  @PostMapping
  @Operation(summary = "Add a person")
  public ResponseEntity<PersonSQL> addPerson(@RequestBody PersonSQL person) {
    return ResponseEntity.ok(personSQLService.addPerson(person));
  }

  @DeleteMapping("/{id}")
  @Operation(summary = "Delete a person")
  public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
    personSQLService.deletePerson(id);
    return ResponseEntity.ok().build();
  }

}
