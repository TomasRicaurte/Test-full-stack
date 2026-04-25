package com.prueba.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.prueba.backend.model.Nota;
import com.prueba.backend.model.Alumno;
import com.prueba.backend.model.Materia;
import com.prueba.backend.repository.NotaRepository;
import com.prueba.backend.repository.AlumnoRepository;
import com.prueba.backend.repository.MateriaRepository;

@Service
public class NotaService {
    
    private final NotaRepository notaRepository;
    private final AlumnoRepository alumnoRepository;
    private final MateriaRepository materiaRepository;

    public NotaService(
        NotaRepository notaRepository,
        AlumnoRepository alumnoRepository,
        MateriaRepository materiaRepository
    ) {
        this.notaRepository = notaRepository;
        this.alumnoRepository = alumnoRepository;
        this.materiaRepository = materiaRepository;
    }

    //Lista todas las notas
    public List<Nota> listar() {
        return notaRepository.findAll();
    }

    //Guarda las notas validando la existencia del alumno/materia
    public Nota guardar(Nota nota) {

        Long alumnoId = nota.getAlumno().getId();
        Alumno alumno = alumnoRepository.findById(alumnoId)
                .orElseThrow(() -> new RuntimeException("Alumno no existe."));

        Long materiaId = nota.getMateria().getId();
        Materia materia = materiaRepository.findById(materiaId)
                .orElseThrow(() -> new RuntimeException("Materia no existe."));

        nota.setAlumno(alumno);
        nota.setMateria(materia);

        return notaRepository.save(nota);
    }

    //Buscar la nota por ID
    public Nota buscarPorId(Long id) {
        return notaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Nota no encontrada."));
    }

    //Elimina la nota por ID
    public void eliminar(Long id) {
        notaRepository.deleteById(id);
    }
}