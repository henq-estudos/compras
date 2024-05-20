package com.henrick.programer.comprasapi.modelo.dto;

import java.time.LocalDateTime;
import com.henrick.programer.comprasapi.modelo.entidade.Item;

public record ItemDetalheDTO(Long id, String nome, LocalDateTime data, Boolean comprado) {

    public ItemDetalheDTO(Item item) {
        this(item.getId(), item.getNome(), item.getData(), item.getComprado());
    }
}
