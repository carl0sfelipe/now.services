// src/app/components/main/main.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<!-- src/app/components/main/main.component.html -->
  <app-user-input (reposUpdated)="updateRepos($event)"></app-user-input>
  <app-repo-list [repos]="lastThreeRepos"></app-repo-list>` })
export class MainComponent {
  lastThreeRepos: any[] = [];

  updateRepos(repos: any[]) {
    this.lastThreeRepos = repos.slice(-3); // Pega os três últimos repositórios
  }
}
