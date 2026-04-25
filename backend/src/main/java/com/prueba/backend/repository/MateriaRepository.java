package com.prueba.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prueba.backend.model.Materia;

public interface MateriaRepository extends JpaRepository<Materia, Long> {
}
