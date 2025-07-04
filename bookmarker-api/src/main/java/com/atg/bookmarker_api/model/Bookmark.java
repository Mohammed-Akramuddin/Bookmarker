
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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bm_id_seq_gen")
    private Long id;
    @Column(nullable = false, unique = true)
    private String title;
    @Column(nullable = false)
    private String Url;
    private Instant createdAt;
}

