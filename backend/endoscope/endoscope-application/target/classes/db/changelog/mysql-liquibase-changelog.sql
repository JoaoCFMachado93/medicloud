--liquibase formatted sql

--changeset endoscope:1

CREATE TABLE IF NOT EXISTS directory (
    directory_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    directory_name VARCHAR(256) NOT NULL,
    parent_directory_id BIGINT,
    FOREIGN KEY (parent_directory_id) REFERENCES directory(directory_id)
);

CREATE TABLE IF NOT EXISTS image (
    image_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    image_name VARCHAR(256) NOT NULL,
    directory_id BIGINT,
    uploaded_by VARCHAR(256),
    upload_date TIMESTAMP,
    description VARCHAR(512),
    image_data LONGBLOB, -- Field to hold the image data
    FOREIGN KEY (directory_id) REFERENCES directory(directory_id)
);

CREATE TABLE IF NOT EXISTS user (
    user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    full_name VARCHAR(256) NOT NULL,
    age INT NOT NULL,
    work_location VARCHAR(256) NOT NULL,
    medical_id VARCHAR(256) NOT NULL,
    medical_speciality VARCHAR(256) NOT NULL,
    education VARCHAR(256) NOT NULL,
    role VARCHAR(256) NOT NULL
);
