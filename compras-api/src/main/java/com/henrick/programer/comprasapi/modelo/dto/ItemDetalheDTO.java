package com.henrick.programer.comprasapi.modelo.dto;

import java.time.LocalDateTime;

public record ItemDetalheDTO(Long id, String nome, LocalDateTime data, Boolean comprado) {

}
