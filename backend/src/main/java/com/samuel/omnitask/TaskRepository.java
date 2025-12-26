package com.samuel.omnitask;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long >{ //Só de fazer isso, você já ganhou métodos como: .save(), .findAll(), .deleteById(), .findById() Sem escrever nenhuma linha de SQL!
}
