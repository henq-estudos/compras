package com.henrick.programer.comprasapi.service;

import com.henrick.programer.comprasapi.modelo.dto.ItemCadastroDTO;
import com.henrick.programer.comprasapi.modelo.dto.ItemDTO;
import com.henrick.programer.comprasapi.modelo.entidade.Item;
import com.henrick.programer.comprasapi.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ItemService {

    private final ItemRepository repository;

    public ItemDTO cadastrarItem(ItemCadastroDTO dados) {
        var item = new Item();
        BeanUtils.copyProperties(dados, item);
        repository.save(item);
        return new ItemDTO(item);

    }

    public List<ItemDTO> listarItens() {
        return repository.findAll().stream().map(ItemDTO::new).toList();
    }

    public ResponseEntity<Void> deletarItem(Long id) {
        Optional<Item> item = repository.findById(id);
        if (item.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        repository.delete(item.get());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    public ResponseEntity<Void> deletarTodosOsItens() {
        repository.deleteAll();
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    public ResponseEntity<ItemDTO> editarItem(ItemDTO dados) {
        Optional<Item> item0 = repository.findById(dados.id());
        if (item0.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Item itemModel = item0.get();
        BeanUtils.copyProperties(dados, itemModel);
        repository.save(itemModel);
        return ResponseEntity.status(HttpStatus.OK).body(new ItemDTO(itemModel));
    }
}
