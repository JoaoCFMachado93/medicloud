/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (6.6.0).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package org.example.endoscope.api.openapi;

import org.example.endoscope.api.openapi.model.ImageEntity;
import org.example.endoscope.api.openapi.model.InternalServerError;
import java.util.List;
import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.annotation.Generated;

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2024-05-07T22:46:29.933404+01:00[Europe/Lisbon]")
@Validated
@Controller
@Tag(name = "image", description = "image API")
public interface ImageApi {

    default ImageApiDelegate getDelegate() {
        return new ImageApiDelegate() {};
    }

    /**
     * PUT /images/directory/{directoryId} : Create image in directory
     * Create image in directory
     *
     * @param directoryId  (required)
     * @param imageEntity Image to create (required)
     * @return OK (status code 200)
     *         or Internal Server Error (status code 500)
     */
    @Operation(
        operationId = "createImageInDirectory",
        summary = "Create image in directory",
        description = "Create image in directory",
        tags = { "image" },
        responses = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = InternalServerError.class))
            })
        }
    )
    @RequestMapping(
        method = RequestMethod.PUT,
        value = "/images/directory/{directoryId}",
        produces = { "application/json" },
        consumes = { "application/json" }
    )
    default ResponseEntity<Void> createImageInDirectory(
        @Parameter(name = "directoryId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("directoryId") Integer directoryId,
        @Parameter(name = "ImageEntity", description = "Image to create", required = true) @Valid @RequestBody List<ImageEntity> imageEntity
    ) {
        return getDelegate().createImageInDirectory(directoryId, imageEntity);
    }


    /**
     * DELETE /images/{imageId} : Delete image
     * Delete image
     *
     * @param imageId  (required)
     * @return Successful operation (status code 200)
     *         or Internal Server Error (status code 500)
     */
    @Operation(
        operationId = "deleteImage",
        summary = "Delete image",
        description = "Delete image",
        tags = { "image" },
        responses = {
            @ApiResponse(responseCode = "200", description = "Successful operation"),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = InternalServerError.class))
            })
        }
    )
    @RequestMapping(
        method = RequestMethod.DELETE,
        value = "/images/{imageId}",
        produces = { "application/json" }
    )
    default ResponseEntity<Void> deleteImage(
        @Parameter(name = "imageId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("imageId") Integer imageId
    ) {
        return getDelegate().deleteImage(imageId);
    }


    /**
     * GET /images/{imageId} : Get image  by ID
     * Get image  by ID
     *
     * @param imageId  (required)
     * @return OK (status code 200)
     *         or Internal Server Error (status code 500)
     */
    @Operation(
        operationId = "getImageById",
        summary = "Get image  by ID",
        description = "Get image  by ID",
        tags = { "image" },
        responses = {
            @ApiResponse(responseCode = "200", description = "OK", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = ImageEntity.class))
            }),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = InternalServerError.class))
            })
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/images/{imageId}",
        produces = { "application/json" }
    )
    default ResponseEntity<ImageEntity> getImageById(
        @Parameter(name = "imageId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("imageId") Integer imageId
    ) {
        return getDelegate().getImageById(imageId);
    }


    /**
     * GET /images/directory/{directoryId} : Get Images by directory ID
     * Get Images by directory ID
     *
     * @param directoryId  (required)
     * @return OK (status code 200)
     *         or Internal Server Error (status code 500)
     */
    @Operation(
        operationId = "getImagesByDirectoryId",
        summary = "Get Images by directory ID",
        description = "Get Images by directory ID",
        tags = { "image" },
        responses = {
            @ApiResponse(responseCode = "200", description = "OK", content = {
                @Content(mediaType = "application/json", array = @ArraySchema(schema = @Schema(implementation = ImageEntity.class)))
            }),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                @Content(mediaType = "application/json", schema = @Schema(implementation = InternalServerError.class))
            })
        }
    )
    @RequestMapping(
        method = RequestMethod.GET,
        value = "/images/directory/{directoryId}",
        produces = { "application/json" }
    )
    default ResponseEntity<List<ImageEntity>> getImagesByDirectoryId(
        @Parameter(name = "directoryId", description = "", required = true, in = ParameterIn.PATH) @PathVariable("directoryId") Integer directoryId
    ) {
        return getDelegate().getImagesByDirectoryId(directoryId);
    }

}
