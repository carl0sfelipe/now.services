import { Component, EventEmitter, Output } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-input',
  template: `
    <input type="text" [(ngModel)]="username">
    <button (click)="fetchRepos()">Buscar Repositórios</button>
  `
})
export class UserInputComponent {
  username: string = '';
  @Output() reposUpdated = new EventEmitter<any[]>();

  constructor(private githubService: GithubService) {}

  fetchRepos() {
    this.githubService.fetchUserRepos(this.username).subscribe({
      next: (repos) => {
        console.log(repos);
        this.reposUpdated.emit(repos);  // Emite os dados para o componente principal
      },
      error: (error) => {
        console.error('Erro ao buscar repositórios:', error);
        this.reposUpdated.emit([]);  // Emite array vazio em caso de erro
      }
    });
  }
}
