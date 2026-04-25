package com.prueba.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.prueba.backend.model.Alumno;
import com.prueba.backend.repository.AlumnoRepository;

@RestController
@RequestMapping("/api/alumnos")
public class AlumnoController {

    private final AlumnoRepository alumnoRepository;

    public AlumnoController(AlumnoRepository alumnoRepository) {
        this.alumnoRepository = alumnoRepository;
    }

    @PostMapping
    public Alumno crear(@RequestBody Alumno alumno) {
        return alumnoRepository.save(alumno);
    }

    @GetMapping
    public List<Alumno> listar() {
        return alumnoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Alumno obtener(@PathVariable Long id) {
        return alumnoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Alumno no encontrado"));
    }

    @PutMapping("/{id}")
    public Alumno actualizar(@PathVariable Long id, @RequestBody Alumno alumno) {
        Alumno existente = alumnoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Alumno no encontrado"));

        existente.setNombre(alumno.getNombre());
        existente.setApellido(alumno.getApellido());
        existente.setEmail(alumno.getEmail());
        existente.setFechaDeNacimiento(alumno.getFechaDeNacimiento());

        return alumnoRepository.save(existente);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        alumnoRepository.deleteById(id);
    }
}