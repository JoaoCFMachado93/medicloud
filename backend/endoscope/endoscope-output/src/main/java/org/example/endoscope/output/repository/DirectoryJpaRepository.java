package org.example.endoscope.output.repository;

import org.example.endoscope.output.dbo.DirectoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DirectoryJpaRepository extends JpaRepository<DirectoryEntity, Long> {

}
