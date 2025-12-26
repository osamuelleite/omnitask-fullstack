import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core'; // <--- Importamos ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  cd = inject(ChangeDetectorRef); // <--- Injetamos a ferramenta de detecção de mudanças

  tasks: any[] = [];

  ngOnInit(): void {
    this.buscarTarefas();
  }

  buscarTarefas() {
    this.http.get<any[]>('http://localhost:8080/tasks').subscribe({
      next: (dados) => {
        this.tasks = dados;
        console.log('Tarefas carregadas:', dados);

        // <--- O PULO DO GATO:
        // Forçamos o Angular a verificar as mudanças e pintar a tela AGORA
        this.cd.detectChanges();
      },
      error: (erro) => {
        console.error('Erro de conexão:', erro);
      },
    });
  }
}
