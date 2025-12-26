import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // URL do seu Backend Java
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient) {}

  // Método para buscar todas as tarefas
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Se quiser implementar a criação depois:
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
