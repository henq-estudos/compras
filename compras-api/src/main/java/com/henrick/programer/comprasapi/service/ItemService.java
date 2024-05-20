package com.henrick.programer.comprasapi.service;

import com.henrick.programer.comprasapi.modelo.dto.ItemCadastroDTO;
import com.henrick.programer.comprasapi.modelo.dto.ItemDetalheDTO;
import com.henrick.programer.comprasapi.modelo.entidade.Item;
import com.henrick.programer.comprasapi.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ItemService {

    private final ItemRepository repository;

    public ItemDetalheDTO cadastrarItem(ItemCadastroDTO dados) {
        var item = new Item();
        BeanUtils.copyProperties(dados, item);
        repository.save(item);
        return new ItemDetalheDTO(item.getId(), item.getNome(), item.getData(), item.getComprado());

    }

    public List<ItemDetalheDTO> listarItens() {
        return repository.findAll().stream().map(ItemDetalheDTO::new).toList();
    }

    public ResponseEntity<Void> deletarItem(Long id) {
        Optional<Item> item = repository.findById(id);
        if (item.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        repository.delete(item.get());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
