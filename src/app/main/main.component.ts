import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {
  lastThreeRepos: any[] = [];

  updateRepos(repos: any[]) {
    this.lastThreeRepos = repos.slice(-6); // Correção: pega os seis últimos, comentário ajustado
  }
}
