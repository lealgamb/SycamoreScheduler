DROP DATABASE if exists Sycamore;

CREATE DATABASE Sycamore;

USE Sycamore;

CREATE TABLE User (
  userID int(10) primary key not null auto_increment,
  fname varchar(10) not null,
  lname varchar(10) not null,
  email varchar(30) not null,
  majorID int (10) not null,
  minorID varchar(10) 
);


CREATE TABLE Class (
  classID int(10) primary key not null,
  department varchar(30) not null,
  className varchar(30),
  section varchar(10),
  session varchar(10),
  startTime varchar(10),
  endTime varchar(10),
  days varchar (20),
  numRegistered int(3),
  maxRegister int(3),
  instructorID int(3),
  FOREIGN KEY (instructorID) REFERENCES Instructor(instructorID)
); 


CREATE TABLE UserClasses (
  userClassID int(10) primary key not null auto_increment,
  userID int(10) not null,
  classID int(10) not null,
  FOREIGN KEY (userID) REFERENCES User(userID),
  FOREIGN KEY (classID) REFERENCES User(classID)
);


CREATE TABLE DegreeProgram (
  degreeID int(10) primary key not null auto_increment,
  degreeName varchar(30) not null,
  degreeType varchar (5) not null
);


CREATE TABLE DegreeClasses (
  degreeID int(10) primary key not null,
  classID varchar(50) not null,
  FOREIGN KEY (degreeID) REFERENCES DegreeProgram(degreeID),
  FOREIGN KEY (classID) REFERENCES Class(classID)
);


CREATE TABLE Department (
  departmentID varchar(10) primary key not null,
  departmentName varchar(50) not null
);


CREATE TABLE Prerequisite (
  classID int(10) not null,
  prerequisiteClassID int(10) not null,
  FOREIGN KEY (classID) REFERENCES classID(classID)
);


CREATE TABLE Corequisite (
  classID int(10) not null,
  corequisiteClassID int(10) not null,
  FOREIGN KEY (classID) REFERENCES classID(classID)
);


CREATE TABLE Instuctor (
  instructorID int(11) primary key not null auto_increment,
  fname varchar(10) not null,
  lname varchar(10) not null,
  link varchar(100) 
);
