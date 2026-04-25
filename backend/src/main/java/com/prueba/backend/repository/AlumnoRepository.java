package com.prueba.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prueba.backend.model.Alumno;

public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
}