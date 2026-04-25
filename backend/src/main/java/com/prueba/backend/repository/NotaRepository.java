package com.prueba.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.prueba.backend.model.Nota;

public interface NotaRepository extends JpaRepository<Nota, Long> {
}
