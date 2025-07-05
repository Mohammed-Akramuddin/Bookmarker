package com.atg.bookmarker_api.model;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

@Data
public class BookmarkRequest {
    @NotEmpty(message = "Titls should not be empty")
    private String title;
    @NotEmpty(message = "Url should not be empty")
    private String url;
}
