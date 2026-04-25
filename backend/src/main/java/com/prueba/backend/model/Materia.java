package com.prueba.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Materia {
    
    @Id //Primary Key para la DB
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column(nullable = false) //Evita que tenga datos nulos
    private String codigo;

    private Integer creditos;

    @OneToMany(mappedBy = "materia")
    @JsonIgnore //Nos evita un bulce infinito
    private List<Nota> notas;

    public Materia() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() {return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getCodigo() { return codigo; }
    public void setCodigo(String codigo) { this.codigo = codigo; }

    public Integer getCreditos() { return creditos; }
    public void setCreditos(Integer creditos) { this.creditos = creditos; }


}
