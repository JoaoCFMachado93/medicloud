package org.example.endoscope.core.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Builder(toBuilder = true)
@Data
public class Image {

    private final long imageId;
    private final String imageName;
    private final long directory;
    private String uploadedBy;
    private long uploadDate;
    private String description;
    private byte[] imageData;
}
