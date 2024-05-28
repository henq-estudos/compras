package com.henrick.programer.comprasapi.controller;

import com.henrick.programer.comprasapi.modelo.dto.ItemCadastroDTO;
import com.henrick.programer.comprasapi.modelo.dto.ItemDTO;
import com.henrick.programer.comprasapi.service.ItemService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/itens")
@CrossOrigin(origins = "http://localhost:4200")
public class ItemController {

    private final ItemService itemService;

    @PostMapping
    @Transactional
    public ResponseEntity<ItemDTO> cadastrar(@RequestBody @Valid ItemCadastroDTO dados) {
        var dto = itemService.cadastrarItem(dados);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @GetMapping
    public ResponseEntity<List<ItemDTO>> listar() {
        var dto = itemService.listarItens();
        return ResponseEntity.status(HttpStatus.OK).body(dto);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        return itemService.deletarItem(id);
    }

    @DeleteMapping
    @Transactional
    public ResponseEntity<Void> deletarTodos() {
        return itemService.deletarTodosOsItens();
    }

    @PutMapping
    @Transactional
    public ResponseEntity<ItemDTO> editar(@RequestBody @Valid ItemDTO dados) {
        return itemService.editarItem(dados);
    }
}
