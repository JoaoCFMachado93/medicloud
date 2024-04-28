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
 * UserEntity
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-04-29T00:14:08.396809+01:00[Europe/Lisbon]")
public class UserEntity {

  private String email;

  private String password;

  private String fullName;

  private Integer age;

  private String workLocation;

  private String medicalId;

  private String medicalSpeciality;

  private String education;

  private String role;

  public UserEntity email(String email) {
    this.email = email;
    return this;
  }

  /**
   * The user's email address
   * @return email
  */
  @javax.validation.constraints.Email
  @Schema(name = "email", description = "The user's email address", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("email")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public UserEntity password(String password) {
    this.password = password;
    return this;
  }

  /**
   * The user's password
   * @return password
  */
  
  @Schema(name = "password", description = "The user's password", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("password")
  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public UserEntity fullName(String fullName) {
    this.fullName = fullName;
    return this;
  }

  /**
   * The user's full name
   * @return fullName
  */
  
  @Schema(name = "fullName", description = "The user's full name", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("fullName")
  public String getFullName() {
    return fullName;
  }

  public void setFullName(String fullName) {
    this.fullName = fullName;
  }

  public UserEntity age(Integer age) {
    this.age = age;
    return this;
  }

  /**
   * The user's age
   * @return age
  */
  
  @Schema(name = "age", description = "The user's age", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("age")
  public Integer getAge() {
    return age;
  }

  public void setAge(Integer age) {
    this.age = age;
  }

  public UserEntity workLocation(String workLocation) {
    this.workLocation = workLocation;
    return this;
  }

  /**
   * The user's work location
   * @return workLocation
  */
  
  @Schema(name = "workLocation", description = "The user's work location", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("workLocation")
  public String getWorkLocation() {
    return workLocation;
  }

  public void setWorkLocation(String workLocation) {
    this.workLocation = workLocation;
  }

  public UserEntity medicalId(String medicalId) {
    this.medicalId = medicalId;
    return this;
  }

  /**
   * The user's medical ID
   * @return medicalId
  */
  
  @Schema(name = "medicalId", description = "The user's medical ID", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("medicalId")
  public String getMedicalId() {
    return medicalId;
  }

  public void setMedicalId(String medicalId) {
    this.medicalId = medicalId;
  }

  public UserEntity medicalSpeciality(String medicalSpeciality) {
    this.medicalSpeciality = medicalSpeciality;
    return this;
  }

  /**
   * The user's medical speciality
   * @return medicalSpeciality
  */
  
  @Schema(name = "medicalSpeciality", description = "The user's medical speciality", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("medicalSpeciality")
  public String getMedicalSpeciality() {
    return medicalSpeciality;
  }

  public void setMedicalSpeciality(String medicalSpeciality) {
    this.medicalSpeciality = medicalSpeciality;
  }

  public UserEntity education(String education) {
    this.education = education;
    return this;
  }

  /**
   * The user's education
   * @return education
  */
  
  @Schema(name = "education", description = "The user's education", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("education")
  public String getEducation() {
    return education;
  }

  public void setEducation(String education) {
    this.education = education;
  }

  public UserEntity role(String role) {
    this.role = role;
    return this;
  }

  /**
   * The user's role
   * @return role
  */
  
  @Schema(name = "role", description = "The user's role", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("role")
  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UserEntity userEntity = (UserEntity) o;
    return Objects.equals(this.email, userEntity.email) &&
        Objects.equals(this.password, userEntity.password) &&
        Objects.equals(this.fullName, userEntity.fullName) &&
        Objects.equals(this.age, userEntity.age) &&
        Objects.equals(this.workLocation, userEntity.workLocation) &&
        Objects.equals(this.medicalId, userEntity.medicalId) &&
        Objects.equals(this.medicalSpeciality, userEntity.medicalSpeciality) &&
        Objects.equals(this.education, userEntity.education) &&
        Objects.equals(this.role, userEntity.role);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, password, fullName, age, workLocation, medicalId, medicalSpeciality, education, role);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UserEntity {\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    fullName: ").append(toIndentedString(fullName)).append("\n");
    sb.append("    age: ").append(toIndentedString(age)).append("\n");
    sb.append("    workLocation: ").append(toIndentedString(workLocation)).append("\n");
    sb.append("    medicalId: ").append(toIndentedString(medicalId)).append("\n");
    sb.append("    medicalSpeciality: ").append(toIndentedString(medicalSpeciality)).append("\n");
    sb.append("    education: ").append(toIndentedString(education)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
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

