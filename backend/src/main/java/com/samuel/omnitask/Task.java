package com.samuel.omnitask;
import jakarta.persistence.*;
import lombok.Data;


@Entity // Faz o Spring criar uma tabela 'Task'
@Data // Usa o "Data" do Lombok, que cria automaticamente os getters e setters

public class Task {
    @Id // esse campo é a chave primária
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private boolean completed;
}
