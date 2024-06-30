package org.example.endoscope.output.adapter;

import org.example.endoscope.core.domain.Directory;
import org.example.endoscope.core.driven.DirectoryRepositoryPort;
import org.example.endoscope.output.dbo.DirectoryEntity;
import org.example.endoscope.output.mapper.directory.DbDirectoryConverter;
import org.example.endoscope.output.repository.DirectoryJpaRepository;

import java.util.List;

public class DirectoryRepository implements DirectoryRepositoryPort {

    private final DirectoryJpaRepository directoryJpaRepository;
    private final DbDirectoryConverter dbDirectoryConverter;

    public DirectoryRepository(
            DirectoryJpaRepository directoryJpaRepository,
            DbDirectoryConverter dbDirectoryConverter) {
        this.directoryJpaRepository = directoryJpaRepository;
        this.dbDirectoryConverter = dbDirectoryConverter;
    }

    @Override
    public boolean doesDirectoryExist(long directoryId) {
        return directoryJpaRepository.existsById(directoryId);
    }

    @Override
    public List<Directory> getDirectories() {
        return directoryJpaRepository.findByParentDirectoryIsNull().stream()
                .map(dbDirectoryConverter::dboToDomain)
                .toList();
    }

    @Override
    public void createDirectories(List<Directory> directories) {
        List<DirectoryEntity> directoryEntityList = directories.stream()
                .map(dbDirectoryConverter::domainToDbo)
                .peek(directoryEntity -> directoryEntity.setParentDirectory(null))
                .peek(directoryEntity -> directoryEntity.setDirectoryDescription(" "))
                .toList();

        directoryJpaRepository.saveAll(directoryEntityList);
    }

    @Override
    public List<Directory> getSubDirectories(long directoryId) {
        return directoryJpaRepository.findByParentDirectory_DirectoryId(directoryId).stream()
                .map(dbDirectoryConverter::dboToDomain)
                .toList();
    }

    @Override
    public void createSubDirectories(List<Directory> directories) {
        List<DirectoryEntity> subDirectoryEntityList = directories.stream()
                .map(dbDirectoryConverter::domainToDbo)
                .peek(directoryEntity -> directoryEntity.setDirectoryDescription(" "))
                .toList();

        directoryJpaRepository.saveAll(subDirectoryEntityList);
    }

    @Override
    public void addOrEditDirectoryDescription(Long directory, String description) {
        directoryJpaRepository.findById(directory)
                .ifPresent(directoryEntity -> {
                    directoryEntity.setDirectoryDescription(description);
                    directoryJpaRepository.save(directoryEntity);
                });
    }

    @Override
    public int getNumberOfImagesInDirectory(long directoryId) {
        return directoryJpaRepository.findById(directoryId)
                .map(DirectoryEntity::getImageCount)
                .orElse(0);
    }

    @Override
    public void incrementImageCount(long directoryId) {
        directoryJpaRepository.findById(directoryId)
                .ifPresent(directoryEntity -> {
                    directoryEntity.setImageCount(directoryEntity.getImageCount() + 1);
                    directoryJpaRepository.save(directoryEntity);
                });
    }

    @Override
    public int getDirectoryPosition(long directoryId) {
        return directoryJpaRepository.findById(directoryId)
                .map(DirectoryEntity::getDirectoryPosition)
                .orElse(0);
    }
}
