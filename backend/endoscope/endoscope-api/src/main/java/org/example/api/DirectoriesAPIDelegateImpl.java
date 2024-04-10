package org.example.api;



import org.example.endoscope.api.openapi.DirectoriesApiDelegate;
import org.example.endoscope.api.openapi.model.Directory;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;

public class DirectoriesAPIDelegateImpl implements DirectoriesApiDelegate {

    @Override
    public ResponseEntity<List<Directory>> getDirectories() {
        Directory directory = new Directory();
        directory.setId(new UUID(1l, 1l));
        directory.setName("Teste");

        return ResponseEntity.ok(List.of(directory));
    }
}
