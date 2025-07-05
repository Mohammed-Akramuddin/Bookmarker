
package com.atg.bookmarker_api.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Table
@Data

public class Bookmark {
    @Id
    @SequenceGenerator(name = "bm_id_seq_gen",sequenceName = "bm_id_seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "bm_id_seq_gen")
    private Long id;
    @Column(nullable = false, unique = true)
    private String title;
    @Column(nullable = false)
    private String url;
    private Instant createdAt;
    public Bookmark(Long id, String title, String url, Instant createdAt) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.createdAt = createdAt;
}

}

