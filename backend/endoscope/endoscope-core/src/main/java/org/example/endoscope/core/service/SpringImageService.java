package org.example.endoscope.core.service;

import org.example.endoscope.core.domain.Image;
import org.example.endoscope.core.driven.DirectoryRepositoryPort;
import org.example.endoscope.core.driven.ImageRepositoryPort;
import org.example.endoscope.core.driver.ImageServicePort;

import java.util.List;

public class SpringImageService implements ImageServicePort {

    private final ImageRepositoryPort imageRepositoryPort;
    private final DirectoryRepositoryPort directoryRepositoryPort;


    public SpringImageService(ImageRepositoryPort imageRepositoryPort,
                              DirectoryRepositoryPort directoryRepositoryPort) {
        this.imageRepositoryPort = imageRepositoryPort;
        this.directoryRepositoryPort = directoryRepositoryPort;
    }

    @Override
    public void createImageInDirectory(long directoryId, List<Image> image) {
        if (image.isEmpty()) {
            return;
        }

        if (!directoryRepositoryPort.doesDirectoryExist(directoryId)) {
            throw new IllegalArgumentException("Directory does not exist");
        }


        imageRepositoryPort.createImageInDirectory(directoryId, image);
    }

    @Override
    public Image getImageById(long imageId) {
        return imageRepositoryPort.getImageById(imageId);
    }

    @Override
    public List<Image> getImagesByDirectoryId(long directoryId) {
        if (!directoryRepositoryPort.doesDirectoryExist(directoryId)) {
            throw new IllegalArgumentException("Directory does not exist");
        }

        return imageRepositoryPort.getImagesByDirectoryId(directoryId);
    }
}
