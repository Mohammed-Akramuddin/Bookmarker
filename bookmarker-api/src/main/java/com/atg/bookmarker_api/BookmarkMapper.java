
package com.atg.bookmarker_api;

import com.atg.bookmarker_api.model.Bookmark;
import org.springframework.stereotype.Component;

@Component
public class BookmarkMapper {
    public BookmarkDTO toBookmarkDTO(Bookmark bookmark) {
        BookmarkDTO bookmarkDTO = new BookmarkDTO();
        bookmarkDTO.setId(bookmark.getId());
        bookmarkDTO.setTitle(bookmark.getTitle());
        bookmarkDTO.setUrl(bookmark.getUrl());
        bookmarkDTO.setCreatedAt(bookmark.getCreatedAt());
        return bookmarkDTO;
    }
}
