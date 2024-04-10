package org.example.endoscope.core.driver;

import org.example.endoscope.core.domain.Directory;

import java.util.List;

public interface DirectoryServicePort {

    List<Directory> getDirectories();
}
