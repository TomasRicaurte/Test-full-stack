package com.prueba.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.prueba.backend.model.Materia;
import com.prueba.backend.repository.MateriaRepository;

@RestController
@RequestMapping("/api/materias")
public class MateriaController {

    private final MateriaRepository materiaRepository;

    public MateriaController(MateriaRepository materiaRepository) {
        this.materiaRepository = materiaRepository;
    }

    @PostMapping
    public Materia crear(@RequestBody Materia materia) {
        return materiaRepository.save(materia);
    }

    @GetMapping
    public List<Materia> listar() {
        return materiaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Materia obtener(@PathVariable Long id) {
        return materiaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Materia no encontrada"));
    }

    @PutMapping("/{id}")
    public Materia actualizar(@PathVariable Long id, @RequestBody Materia materia) {
        Materia existente = materiaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Materia no encontrada"));

        existente.setNombre(materia.getNombre());
        existente.setCodigo(materia.getCodigo());
        existente.setCreditos(materia.getCreditos());

        return materiaRepository.save(existente);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        materiaRepository.deleteById(id);
    }
}