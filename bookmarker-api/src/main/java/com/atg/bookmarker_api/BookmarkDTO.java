<<<<<<< HEAD
package com.atg.bookmarker_api;

import com.atg.bookmarker_api.model.Bookmark;
import lombok.Data;

import java.time.Instant;

@Data
public class BookmarkDTO {
    private Long id;
    private String title;
    private String Url;
    private Instant createdAt;
    public BookmarkDTO() {}
    public BookmarkDTO(Long id, String title, String Url, Instant createdAt) {
        this.id = id;
        this.title = title;
        this.Url = Url;
        this.createdAt = createdAt;
    }
}
=======
package com.atg.bookmarker_api;

import com.atg.bookmarker_api.model.Bookmark;
import lombok.Data;

import java.time.Instant;

@Data
public class BookmarkDTO {
    private Long id;
    private String title;
    private String Url;
    private Instant createdAt;
    public BookmarkDTO() {}
    public BookmarkDTO(Long id, String title, String Url, Instant createdAt) {
        this.id = id;
        this.title = title;
        this.Url = Url;
        this.createdAt = createdAt;
    }
}
>>>>>>> d79f437826b6ba6d025115917b21d6efd7fd153f
