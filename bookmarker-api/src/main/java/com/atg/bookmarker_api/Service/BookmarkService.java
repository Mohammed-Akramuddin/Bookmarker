
package com.atg.bookmarker_api.Service;

import com.atg.bookmarker_api.BookmarkMapper;
import com.atg.bookmarker_api.BookmarksDTO;
import com.atg.bookmarker_api.Repository.BookmarkRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class BookmarkService {
    @Autowired
    private BookmarkRepository bookmarkRepository;
    public BookmarksDTO getBookmark(Integer page){
        int pg=page<1?0:page-1;
        Pageable pageable= PageRequest.of(pg,10, Sort.Direction.DESC,"createdAt");
        return new BookmarksDTO(bookmarkRepository.findAllBookmarkDTO(pageable));
    }
}


