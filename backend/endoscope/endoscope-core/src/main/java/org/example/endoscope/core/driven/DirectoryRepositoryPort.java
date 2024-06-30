package org.example.endoscope.core.driven;

import org.example.endoscope.core.domain.Directory;

import java.util.List;

public interface DirectoryRepositoryPort {

    boolean doesDirectoryExist(long directoryId);

    List<Directory> getDirectories();

    void createDirectories(List<Directory> directories);

    List<Directory> getSubDirectories(long directoryId);

    void createSubDirectories(List<Directory> subDirectories);

    void addOrEditDirectoryDescription(Long directory, String description);

    int getNumberOfImagesInDirectory(long directoryId);

    void incrementImageCount(long directoryId);

    int getDirectoryPosition(long directoryId);
}
