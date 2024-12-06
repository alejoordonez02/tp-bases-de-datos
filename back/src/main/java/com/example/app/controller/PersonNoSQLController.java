package com.example.app.controller;

import com.example.app.model.PersonNoSQL;
import com.example.app.service.PersonNoSQLService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;

@RestController
@RequestMapping("/personNoSQL")
public class PersonNoSQLController {

  @Autowired
  private PersonNoSQLService personNoSQLService;

  @GetMapping
  @Operation(summary = "Get all people")
  public ResponseEntity<List<PersonNoSQL>> getPeople() {
    return ResponseEntity.ok(personNoSQLService.getPeople());
  }

  @PostMapping
  @Operation(summary = "Add a person")
  public ResponseEntity<PersonNoSQL> addPerson(@RequestBody PersonNoSQL person) {
    return ResponseEntity.ok(personNoSQLService.addPerson(person));
  }

  @DeleteMapping("/{id}")
  @Operation(summary = "Delete a person")
  public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
    personNoSQLService.deletePerson(id);
    return ResponseEntity.ok().build();
  }

}
