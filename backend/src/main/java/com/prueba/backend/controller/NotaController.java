package com.prueba.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.prueba.backend.model.Nota;
import com.prueba.backend.service.NotaService;

@RestController
@RequestMapping("/api/notas")
public class NotaController {

    private final NotaService notaService;

    public NotaController(NotaService notaService) {
        this.notaService = notaService;
    }

    // ✅ Registrar nota
    @PostMapping
    public Nota crear(@RequestBody Nota nota) {
        return notaService.guardar(nota);
    }

    // ✅ Listar notas por alumno
    @GetMapping("/alumno/{id}")
    public List<Nota> listarPorAlumno(@PathVariable Long id) {
        return notaService.listar()
                .stream()
                .filter(n -> n.getAlumno().getId().equals(id))
                .toList();
    }
}