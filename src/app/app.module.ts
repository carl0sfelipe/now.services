import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SocialsComponent } from './socials/socials.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';
import { GithubService } from './github.service';
import { MainComponent } from './main/main.component';
import { RepoListComponent } from './repo-list/repo-list.component'; // Verifique o caminho correto


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialsComponent,
    UserInputComponent,
    MainComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
