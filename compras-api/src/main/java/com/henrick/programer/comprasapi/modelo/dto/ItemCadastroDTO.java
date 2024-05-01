package com.henrick.programer.comprasapi.modelo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public record ItemCadastroDTO(

        @NotBlank String nome,

        LocalDateTime data,

        @NotNull Boolean comprado

) {
}
