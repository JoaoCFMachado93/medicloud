package org.example.endoscope.api.openapi.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * DirectoryEntity
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-04-29T00:14:08.396809+01:00[Europe/Lisbon]")
public class DirectoryEntity {

  private Integer directoryId;

  private String directoryName;

  private Integer parentDirectory;

  public DirectoryEntity directoryId(Integer directoryId) {
    this.directoryId = directoryId;
    return this;
  }

  /**
   * The directory ID
   * @return directoryId
  */
  
  @Schema(name = "directoryId", description = "The directory ID", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("directoryId")
  public Integer getDirectoryId() {
    return directoryId;
  }

  public void setDirectoryId(Integer directoryId) {
    this.directoryId = directoryId;
  }

  public DirectoryEntity directoryName(String directoryName) {
    this.directoryName = directoryName;
    return this;
  }

  /**
   * The directory name
   * @return directoryName
  */
  
  @Schema(name = "directoryName", description = "The directory name", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("directoryName")
  public String getDirectoryName() {
    return directoryName;
  }

  public void setDirectoryName(String directoryName) {
    this.directoryName = directoryName;
  }

  public DirectoryEntity parentDirectory(Integer parentDirectory) {
    this.parentDirectory = parentDirectory;
    return this;
  }

  /**
   * The parent directory id
   * @return parentDirectory
  */
  
  @Schema(name = "parentDirectory", description = "The parent directory id", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("parentDirectory")
  public Integer getParentDirectory() {
    return parentDirectory;
  }

  public void setParentDirectory(Integer parentDirectory) {
    this.parentDirectory = parentDirectory;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DirectoryEntity directoryEntity = (DirectoryEntity) o;
    return Objects.equals(this.directoryId, directoryEntity.directoryId) &&
        Objects.equals(this.directoryName, directoryEntity.directoryName) &&
        Objects.equals(this.parentDirectory, directoryEntity.parentDirectory);
  }

  @Override
  public int hashCode() {
    return Objects.hash(directoryId, directoryName, parentDirectory);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DirectoryEntity {\n");
    sb.append("    directoryId: ").append(toIndentedString(directoryId)).append("\n");
    sb.append("    directoryName: ").append(toIndentedString(directoryName)).append("\n");
    sb.append("    parentDirectory: ").append(toIndentedString(parentDirectory)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

