package com.accenture.pokemonShop.controller;

import com.accenture.pokemonShop.common.DiscountsRepository;
import com.accenture.pokemonShop.model.Discounts;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DiscountController {

  private final DiscountsRepository discountsRepository;

  public DiscountController(DiscountsRepository discountsRepository){
      this.discountsRepository = discountsRepository;
  }

  @GetMapping("/discounts")
    public ResponseEntity<List<Discounts>> discounts(){
      List<Discounts> discountsList = discountsRepository.findAll();
      return ResponseEntity.ok(discountsList);
  }
}
