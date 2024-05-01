import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  template: `
    <div *ngFor="let repo of repos">
      <p>{{ repo.name }} - <a href="{{ repo.html_url }}" target="_blank">{{ repo.html_url }}</a></p>
    </div>
  `, 
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent {
  @Input() repos: any[] = []; // Define 'repos' como uma propriedade de entrada
}
