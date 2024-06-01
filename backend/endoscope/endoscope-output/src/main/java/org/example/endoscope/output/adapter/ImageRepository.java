package org.example.endoscope.output.adapter;

import org.example.endoscope.core.domain.Image;
import org.example.endoscope.core.driven.ImageRepositoryPort;
import org.example.endoscope.output.mapper.directory.DbImageConverter;
import org.example.endoscope.output.repository.ImageJpaRepository;

import java.util.List;

public class ImageRepository implements ImageRepositoryPort {

    private final ImageJpaRepository imageJpaRepository;
    private final DbImageConverter dbImageConverter;

    public ImageRepository(
            ImageJpaRepository imageJpaRepository,
            DbImageConverter dbImageConverter) {
        this.imageJpaRepository = imageJpaRepository;
        this.dbImageConverter = dbImageConverter;
    }

    @Override
    public void createImageInDirectory(long directoryId, List<Image> image) {
        var imageEntityList = image.stream()
                .map(dbImageConverter::domainToDbo)
                .toList();

        imageJpaRepository.saveAll(imageEntityList);
    }

    @Override
    public Image getImageById(long imageId) {
        return imageJpaRepository.findById(imageId)
                .map(dbImageConverter::dboToDomain)
                .orElseThrow();
    }

    @Override
    public List<Image> getImagesByDirectoryId(long directoryId) {
        return imageJpaRepository.findAllByDirectory_DirectoryId(directoryId).stream()
                .map(dbImageConverter::dboToDomain)
                .toList();
    }

    @Override
    public void deleteImage(long imageId) {
        imageJpaRepository.deleteById(imageId);
    }

    @Override
    public void editImageDescription(Long imageId, String description) {
        imageJpaRepository.findById(imageId)
                .ifPresent(image -> {
                    image.setDescription(description);
                    imageJpaRepository.save(image);
                });
    }
}
