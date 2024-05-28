package com.henrick.programer.comprasapi.modelo.dto;

import java.time.LocalDateTime;
import com.henrick.programer.comprasapi.modelo.entidade.Item;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ItemDTO(@NotNull Long id, @NotBlank String nome, LocalDateTime data,
        Boolean comprado) {

    public ItemDTO(Item item) {
        this(item.getId(), item.getNome(), item.getData(), item.getComprado());
    }
}
