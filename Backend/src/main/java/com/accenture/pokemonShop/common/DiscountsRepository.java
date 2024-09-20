package com.accenture.pokemonShop.common;

import com.accenture.pokemonShop.model.Discounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscountsRepository extends JpaRepository<Discounts, Integer> {
    List<Discounts> findByDiscountCode(String discountCode);
}

