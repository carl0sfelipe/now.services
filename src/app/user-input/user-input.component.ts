// src/app/components/user-input.component.ts
import { Component } from '@angular/core';
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

  constructor(private githubService: GithubService) {}

  fetchRepos() {
    this.githubService.fetchUserRepos(this.username).subscribe({
      next: (repos) => {
        console.log(repos);
      },
      error: (error) => console.error('Erro ao buscar repositórios:', error)
    });
  }
}
