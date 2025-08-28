import { Component, signal } from '@angular/core';
import { QuizComponent } from './quiz/quiz';
import { NavbarComponent } from './navbar/nav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,              
  imports: [QuizComponent, NavbarComponent, CommonModule],      
  templateUrl: './app.html',
  styleUrls: ['./app.css']       
})
export class App {
  protected readonly title = signal('quizapp');
}
