package com.henrick.programer.comprasapi.repository;

import com.henrick.programer.comprasapi.modelo.entidade.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
