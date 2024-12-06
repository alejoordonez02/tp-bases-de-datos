package com.example.app.model;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Column;

import org.springframework.data.annotation.Id;

@Document(collection = "people")
public class PersonNoSQL {

    @Id
	@Column(name = "nid")
    private Long nid;

	@Column(name = "first_name")
    private String firstName;

	@Column(name = "lastName")
    private String lastName;

	@Column(name = "age")
    private int age;

	@Column(name = "gender")
    private String gender;

	@Column(name = "nationality")
    private String nationality;

// getters
    public Long getNid() {
        return nid;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getNationality() {
        return nationality;
    }

// setters
    public void setNid(Long nid) {
        this.nid = nid;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
}
