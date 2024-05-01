package com.henrick.programer.comprasapi.service;

import com.henrick.programer.comprasapi.modelo.dto.ItemCadastroDTO;
import com.henrick.programer.comprasapi.modelo.dto.ItemDetalheDTO;
import com.henrick.programer.comprasapi.modelo.entidade.Item;
import com.henrick.programer.comprasapi.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

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
}
