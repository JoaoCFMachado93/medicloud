package org.example.endoscope.core.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Builder(toBuilder = true)
@Data
public class Directory {

    private final long directoryId;
    private final String directoryName;
    private final String directoryDescription;
    private final long parentDirectory;
    private final int imageCount;
    private final int directoryPosition;

}
