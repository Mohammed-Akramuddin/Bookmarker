
package com.atg.bookmarker_api;

import com.atg.bookmarker_api.model.Bookmark;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.ALWAYS)
public class BookmarksDTO {
    private List<BookmarkDTO> bookmarks;
    private long totalElements;
    private int totalPages;
    private int currentPage;
    private int previousPage;
    private boolean hasNext;
    private boolean hasPrevious;
    private boolean isFirst;
    private boolean isLast;
    public BookmarksDTO(Page<BookmarkDTO> bookmarks) {
        this.setBookmarks(bookmarks.getContent());
        this.setTotalElements(bookmarks.getTotalElements());
        this.setTotalPages(bookmarks.getTotalPages());
        this.setCurrentPage(bookmarks.getNumber()+1);
        this.setPreviousPage(bookmarks.getNumber()-1);
        this.setFirst(bookmarks.isFirst());
        this.setLast(bookmarks.isLast());
        this.setHasNext(bookmarks.hasNext());
        this.setHasPrevious(bookmarks.hasPrevious());

    }

}

