
package com.atg.bookmarker_api.Repository;

import com.atg.bookmarker_api.BookmarkDTO;
import com.atg.bookmarker_api.model.Bookmark;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Integer> {
    @Query("select new com.atg.bookmarker_api.BookmarkDTO(b.id,b.title,b.Url,b.createdAt) from Bookmark b")
    Page<BookmarkDTO> findAllBookmarkDTO(Pageable pageable);

}
