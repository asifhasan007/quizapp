import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService, QuizQuestion } from './quiz.service';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css']
})
export class QuizComponent implements OnInit {
  quiz: QuizQuestion[] = [];
  score = signal(0);
  isFinished = signal(false);
  userAnswers: string[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quiz = this.quizService.getQuiz();
    this.userAnswers = Array(this.quiz.length).fill('');
  }

submitQuiz(form: any): void {

  Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to submit the quiz?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, Submit',
    cancelButtonText: 'No, Continue',
  }).then((result) => {
    if (result.isConfirmed) {

      this.score.set(0);
      let skipped = 0;

      this.quiz.forEach((q, i) => {
        const selected = form.value['question' + i];
        this.userAnswers[i] = selected || '';
        if (!selected) {
          skipped++;
        } else if (selected === q.answer) {
          this.score.update(s => s + 1);
        }
      });

      this.isFinished.set(true);

      Swal.fire({
        icon: skipped > 0 ? 'warning' : 'success',
        title: 'Quiz Submitted!',
        html: `
          <p>You scored <strong>${this.score()}</strong> out of <strong>${this.quiz.length}</strong></p>
          ${skipped > 0 ? `<p style="color:red;">⚠ You skipped ${skipped} question(s)</p>` : ''}
        `,
      });
    }
  });
}
  restartQuiz(): void {
    this.isFinished.set(false);
    this.score.set(0);
    this.userAnswers = Array(this.quiz.length).fill('');
  }
}
