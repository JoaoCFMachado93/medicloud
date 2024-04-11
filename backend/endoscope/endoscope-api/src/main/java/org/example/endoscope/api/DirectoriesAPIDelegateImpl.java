package org.example.endoscope.api;


import lombok.extern.slf4j.Slf4j;
import org.example.endoscope.api.mapper.directory.DirectoryConverter;
import org.example.endoscope.api.openapi.DirectoriesApiDelegate;
import org.example.endoscope.api.openapi.model.DirectoryEntity;
import org.example.endoscope.core.driver.DirectoryServicePort;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Slf4j
public class DirectoriesAPIDelegateImpl implements DirectoriesApiDelegate {

    private final DirectoryServicePort directoryServicePort;
    private final DirectoryConverter directoryConverter;

    public DirectoriesAPIDelegateImpl(DirectoryServicePort directoryServicePort, DirectoryConverter directoryConverter) {
        this.directoryServicePort = directoryServicePort;
        this.directoryConverter = directoryConverter;
    }

    @Override
    public ResponseEntity<List<DirectoryEntity>> getDirectories() {
        log.info("Fetching directories");
        var directories = directoryServicePort.getDirectories();

        return ResponseEntity.ok(directories.stream()
                .map(directoryConverter::domainToDto)
                .toList());
    }

    @Override
    public ResponseEntity<Void> createDirectory(List<DirectoryEntity> directoryEntity) {
        log.info("Creating the following directories: {}", directoryEntity);
        var directoryDomainList = directoryEntity.stream()
                .map(directoryConverter::dtoToDomain)
                .toList();

        directoryServicePort.createDirectory(directoryDomainList);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<List<DirectoryEntity>> getSubDirectories(Integer directoryId) {
        log.info("Fetching sub directories");
        var subDirectories = directoryServicePort.getSubDirectories(directoryId);

        return ResponseEntity.ok(subDirectories.stream()
                .map(directoryConverter::domainToDto)
                .toList());
    }

    @Override
    public ResponseEntity<Void> createSubDirectory(Integer directoryId, List<DirectoryEntity> subDirectoryEntity) {
        log.info("Creating the following sub directories: {}", subDirectoryEntity);
        var subDirectoryDomainList = subDirectoryEntity.stream()
                .map(directoryConverter::dtoToDomain)
                .toList();

        directoryServicePort.createSubDirectory(subDirectoryDomainList);
        return ResponseEntity.ok().build();
    }

}
