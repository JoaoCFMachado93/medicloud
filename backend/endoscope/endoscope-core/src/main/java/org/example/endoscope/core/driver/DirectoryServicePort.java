package org.example.endoscope.core.driver;

import org.example.endoscope.core.domain.Directory;

import java.util.List;

public interface DirectoryServicePort {

    List<Directory> getDirectories();

    void createDirectory(List<Directory> directories);

    List<Directory> getSubDirectories(long directoryId);

    void createSubDirectory(List<Directory> subDirectories);

    void addOrEditDirectoryDescription(Long directoryId, String description);
}
