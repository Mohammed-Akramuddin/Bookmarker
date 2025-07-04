package com.atg.bookmarker_api.controller;

import com.atg.bookmarker_api.BookmarksDTO;
import com.atg.bookmarker_api.Service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookmark")
public class BookmarkController {
    @Autowired
    private BookmarkService bookmarkService;
    @GetMapping("/")
    public BookmarksDTO getBookmark(@RequestParam(name = "page",defaultValue = "1")Integer page){
        return bookmarkService.getBookmark(page);
    }
}
