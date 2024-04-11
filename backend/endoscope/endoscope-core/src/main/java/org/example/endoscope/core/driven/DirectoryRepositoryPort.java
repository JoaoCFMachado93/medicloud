package org.example.endoscope.core.driven;

import org.example.endoscope.core.domain.Directory;

import java.util.List;

public interface DirectoryRepositoryPort {

    List<Directory> getDirectories();

    void createDirectories(List<Directory> directories);

    List<Directory> getSubDirectories(long directoryId);

    void createSubDirectories(List<Directory> subDirectories);

}
