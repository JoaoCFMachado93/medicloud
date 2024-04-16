package org.example.endoscope.api;


import lombok.extern.slf4j.Slf4j;
import org.example.endoscope.api.mapper.directory.ImageConverter;
import org.example.endoscope.api.openapi.ImageApiDelegate;
import org.example.endoscope.api.openapi.model.ImageEntity;
import org.example.endoscope.core.driver.ImageServicePort;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Slf4j
public class ImagesAPIDelegateImpl implements ImageApiDelegate {

    private final ImageServicePort imageServicePort;
    private final ImageConverter imageConverter;

    public ImagesAPIDelegateImpl(ImageServicePort imageServicePort, ImageConverter imageConverter) {
        this.imageServicePort = imageServicePort;
        this.imageConverter = imageConverter;
    }

    @Override
    public ResponseEntity<Void> createImageInDirectory(Integer directoryId, List<ImageEntity> imageEntity) {
        log.info("Creating the following images in directory: {}", imageEntity);
        var imageDomainList = imageEntity.stream()
                .map(imageConverter::dtoToDomain)
                .toList();
        imageServicePort.createImageInDirectory(directoryId, imageDomainList);
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<ImageEntity> getImageById(Integer imageId) {
        log.info("Fetching image by id: {}", imageId);
        var image = imageServicePort.getImageById(imageId);
        return ResponseEntity.ok(imageConverter.domainToDto(image));
    }

    @Override
    public ResponseEntity<List<ImageEntity>> getImagesByDirectoryId(Integer directoryId) {
        log.info("Fetching images by directory id: {}", directoryId);
        var images = imageServicePort.getImagesByDirectoryId(directoryId);
        return ResponseEntity.ok(images.stream()
                .map(imageConverter::domainToDto)
                .toList());
    }
}
