package com.accenture.pokemonShop.model;


import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Table(name = "discounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Discounts {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
//    Discount Section
    private String discountCode;
    private Integer discount_amount;
//    Audit Section
    private Date created_at;
    private Date updated_at;
//    Other
    private String notes;
    private String gift;

}
