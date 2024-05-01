import { Component, EventEmitter, Output } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  username: string = 'carl0sfelipe';
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
