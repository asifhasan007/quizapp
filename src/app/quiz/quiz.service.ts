import { Injectable } from '@angular/core';

export interface QuizQuestion {
  type: 'Multiple Choice' | 'True/False';
  question: string; //Multiple Choice or True/False
  options?: string[]; // Only for Multiple Choice
  answer: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {

  //private apiurl = 'https://example.com/api/quiz'; // Replace with your actual API endpoint
  
  private combined_quiz: QuizQuestion[] = [
    {
      type: 'Multiple Choice',
      question: 'Which of the following best describes the primary function of a JavaScript library in Node.js?',
      options: [
        'It directly executes C++ code.',
        'It wraps C++ code, making the C++ features easier to use in JavaScript.',
        'It replaces JavaScript code with C++ code.',
        'It translates JavaScript code into C++.',
      ],
      answer: 'It wraps C++ code, making the C++ features easier to use in JavaScript.',
    },
    {
      type: 'Multiple Choice',
      question: 'What does `process.binding` primarily do?',
      options: [
        'It compiles C++ code into JavaScript.',
        'It creates new JavaScript files.',
        'It retrieves C++ features and makes them accessible within JavaScript.',
        'It binds JavaScript functions together.',
      ],
      answer: 'It retrieves C++ features and makes them accessible within JavaScript.',
    },
    {
      type: 'Multiple Choice',
      question: 'What is the primary purpose of the `util.js` file mentioned?',
      options: [
        'It contains only C++ code.',
        'It provides a collection of useful JavaScript functions.',
        'It is used to manage ZIP files.',
        'It contains the core logic of Node.js.',
      ],
      answer: 'It provides a collection of useful JavaScript functions.',
    },
    {
      type: 'Multiple Choice',
      question: 'Where are we going to write JavaScript code?',
      options: [
        'In the C++ code.',
        'In the Node.js core.',
        'In the folder called `liblib`.',
        'In the Zlib file.',
      ],
      answer: 'In the folder called `liblib`.',
    },
    {
      type: 'Multiple Choice',
      question: 'When using Zlib in Node.js, what are you primarily interacting with?',
      options: [
        'The raw C++ library directly.',
        'A JavaScript library that wraps the C++ code.',
        'The ZIP file itself.',
        'A compiler that turns JavaScript into C++.',
      ],
      answer: 'A JavaScript library that wraps the C++ code.',
    },
    { type: 'True/False', question: 'Zlib was created to handle ZIP files.', answer: 'True' },
    { type: 'True/False', question: 'Node.js does not include any pre-written JavaScript code.', answer: 'False' },
    { type: 'True/False', question: 'The JavaScript libraries in Node.js are primarily written in C++.', answer: 'False' },
  ];

  getQuiz(): QuizQuestion[] {
    return this.combined_quiz;
  }
}
