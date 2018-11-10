#ANALYZE TABLE `Scheduler`.`Class`, `Scheduler`.`Corequisite`, `Scheduler`.`degreeClassID`, `Scheduler`.`DegreeProgram`, `Scheduler`.`Department`, `Scheduler`.`Instructor`, `Scheduler`.`Prerequisite`, `Scheduler`.`UserClasses`, `Scheduler`.`Users`;

DROP DATABASE IF EXISTS Scheduler;
CREATE DATABASE Scheduler;
USE Scheduler;

# User, Class, UserClasses, DegreeProgram, DegreeClassID, Department, Prerequisite, Corequisite


CREATE TABLE DegreeProgram (
	degreeID INT(11) PRIMARY KEY AUTO_INCREMENT,
    degreeName VARCHAR(20) NOT NULL
);

# DegreeProgram: degreeID (P_K, AUTO_INC), degreeName (NOT NULL)

CREATE TABLE DegreeClassID (
	degreeClassID INT(11) PRIMARY KEY AUTO_INCREMENT,
	degreeID INT(1) NOT NULL,
    classID INT(11) NOT NULL
);

# DegreeClasses: degreeClassID (PK, AUTO_INC), degreeID (F_K, NOT NULL), classID (F_K, NOT NULL)

CREATE TABLE Prerequisite (
	prereqID INT(11) PRIMARY KEY AUTO_INCREMENT,
    classID INT(11) NOT NULL,
    preClassID INT(11) NOT NULL
);
# Prerequisite: prereqID (P_K, AUTO_INC), classID (NOT NULL), preClassID (NOT NULL)

CREATE TABLE Corequisite (
	coreqID INT(11) PRIMARY KEY AUTO_INCREMENT,
    classID INT(11) NOT NULL,
    coClassID INT(11) NOT NULL
);

# Corequisite: coreqID (P_K, AUTO_INC), classID (NOT NULL), coClassID (NOT NULL)

CREATE TABLE Instructor (
	instructorID INT(11) PRIMARY KEY AUTO_INCREMENT,
    instructorName VARCHAR(50) NOT NULL,
    rateMyProfessorLink VARCHAR(100) NULL
);

# Instructor: instructorID (P_K, AUTO_INC), instructorName (NOT NULL) ratemyprofessorLink (NULL)

CREATE TABLE Users (
	userID INT(11) PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    pass VARCHAR(64) NOT NULL, # Password
    degreeID INT(11) NOT NULL,
    degree2ID INT(11) NULL,
    minorID INT(11) NULL,
    minor2ID INT(11) NULL,
    FOREIGN KEY fk1 (degreeID) REFERENCES DegreeProgram(degreeID),
    FOREIGN KEY fk2 (degree2ID) REFERENCES DegreeProgram(degreeID),
    FOREIGN KEY fk3 (minorID) REFERENCES DegreeProgram(degreeID),
    FOREIGN KEY fk4 (minorID) REFERENCES DegreeProgram(degreeID)
);

# Users: userID (P_K, AUTO_INC), name (NOT NULL), password (encrypted, NOT NULL), degreeID (F_K, NOT NULL), degree2ID (F_K, NULL), email (NOT NULL, UNIQUE), minorID (F_K, NULL), minor2ID (F_K, NULL)

CREATE TABLE Class (
    classID INT(11) PRIMARY KEY AUTO_INCREMENT,
    department VARCHAR(10) NOT NULL,
    classNumber VARCHAR(11) NOT NULL,
    className VARCHAR(100) NULL,
    units INT(11) NOT NULL,
    section VARCHAR(8) NOT NULL,
    sessionNum INT(11) NOT NULL,
    typeName VARCHAR(30) NOT NULL,
    timeStart VARCHAR(20) NOT NULL,
    timeEnd VARCHAR(20) NOT NULL,
    days VARCHAR(10) NOT NULL,
    registered INT(11) NOT NULL,
    registeredMax INT(11) NOT NULL,
    instructor VARCHAR(200) NULL,
    location VARCHAR(20) NOT NULL,
    syllabus VARCHAR(100) NULL,
    info VARCHAR(500) NOT NULL
    #FOREIGN KEY fk5 (instructorID) REFERENCES Instructor(instructorID)
);



# Class: classID (P_K, AUTO_INC), department (F_K, NOT NULL), class number (NOT NULL), units (NOT NULL), section(NOT NULL), session(NOT NULL), type (NOT NULL), timeStart (NOT NULL), timeEnd (NOT NULL), days (NOT NULL), registered (NOT NULL), registeredMax (NOT NULL), instructorID (NOT NULL), location (NOT NULL), syllabus (NULL), info (NULL)

CREATE TABLE UserClasses (
	userClassID INT(11) PRIMARY KEY AUTO_INCREMENT,
    classID INT(11) NOT NULL,
    userID INT(11) NOT NULL,
    currStatus VARCHAR(20) NULL,
    FOREIGN KEY fk6 (userID) REFERENCES Users(userID),
    FOREIGN KEY fk7 (classID) REFERENCES Class(classID)
);

# UserClasses: userClassID (P_K, AUTO_INC), userID (NOT NULL), classID (NOT NULL)


