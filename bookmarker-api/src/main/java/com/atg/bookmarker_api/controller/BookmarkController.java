
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
    public BookmarksDTO getBookmark(@RequestParam(name = "page",defaultValue = "1")Integer page,
                                    @RequestParam(name = "query",defaultValue = "")String query){
        if((query==null) || query.trim().length()==0){
            return bookmarkService.getBookmark(page);
        }
        return bookmarkService.searchBookmark(query,page);
    }
}

