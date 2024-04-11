--liquibase formatted sql

--changeset endoscope:1

CREATE TABLE IF NOT EXISTS directory (
    directory_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    directory_name VARCHAR(256) NOT NULL,
    parent_directory_id BIGINT,
    FOREIGN KEY (parent_directory_id) REFERENCES directory(directory_id)
);
