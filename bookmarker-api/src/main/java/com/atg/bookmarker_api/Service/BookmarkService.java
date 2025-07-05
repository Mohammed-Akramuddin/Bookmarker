package com.atg.bookmarker_api.Service;

import com.atg.bookmarker_api.BookmarkDTO;
import com.atg.bookmarker_api.BookmarkMapper;
import com.atg.bookmarker_api.BookmarksDTO;
import com.atg.bookmarker_api.Repository.BookmarkRepository;
import com.atg.bookmarker_api.model.Bookmark;
import com.atg.bookmarker_api.model.BookmarkRequest;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@Transactional
public class BookmarkService {
    @Autowired
    private BookmarkRepository bookmarkRepository;
    @Autowired
    private BookmarkMapper bookmarkMapper;
    @Transactional
    public BookmarksDTO getBookmark(Integer page){
        int pg=page<1?0:page-1;
        Pageable pageable= PageRequest.of(pg,10, Sort.Direction.DESC,"createdAt");
        return new BookmarksDTO(bookmarkRepository.findAllBookmarkDTO(pageable));
    }
    @Transactional
    public BookmarksDTO searchBookmark(String query, Integer page) {
        int pg=page<1?0:page-1;
        Pageable pageable= PageRequest.of(pg,10, Sort.Direction.DESC,"createdAt");
        return new BookmarksDTO(bookmarkRepository.searchBookmark(query,pageable));
    }
    @Transactional
    public BookmarkDTO createBookmark(@Valid BookmarkRequest bookmarkRequest) {
        Bookmark b=new Bookmark(null,bookmarkRequest.getTitle(),bookmarkRequest.getUrl(),Instant.now());
        Bookmark c=bookmarkRepository.save(b);
        return bookmarkMapper.toBookmarkDTO(c);

    }
}
