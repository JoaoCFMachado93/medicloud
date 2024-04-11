package org.example.endoscope.output.repository;

import org.example.endoscope.output.dbo.DirectoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DirectoryJpaRepository extends JpaRepository<DirectoryEntity, Long> {

    List<DirectoryEntity> findByParentDirectory_DirectoryId(long directoryId);

}
