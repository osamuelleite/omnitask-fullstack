package com.samuel.omnitask;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController//classe para receber requisições HTTP
@RequestMapping("/tasks") // O endereço base será: http://localhost:8080/tasks
@CrossOrigin(origins = "*") // Libera portas diferentes para o Angular e React


public class TaskController {
    @Autowired // o Spring cria e conecta o Reposiotory automaticamente
    private TaskRepository repository;

    //Rota: GET /tasks -> Lista tudo
    @GetMapping
    public List<Task> getAllTasks () {
        return repository.findAll();
    }

    //Rota: POST /tasks -> Cria uma nova tarefa
    @PostMapping
    public Task createTask(@RequestBody Task task){
        return repository.save(task);
    }

    //Rota DELETE /tasks/{id} -> Deleta por ID
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        repository.deleteById(id);
    }

    //Rota PUT /tasks/{id} -> Atualiza uma Task (Exemplo: Marcar como concluída)
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task taskData){// Busca a tarefa, se existir atualiza, senão retorna null (simplificado para estudo)
        return repository.findById(id).map(task -> {
            task.setTitle(taskData.getTitle());
            task.setDescription(taskData.getDescription());
            task.setCompleted(taskData.isCompleted());
            return repository.save(task);
        }).orElse(null);
    }
}
