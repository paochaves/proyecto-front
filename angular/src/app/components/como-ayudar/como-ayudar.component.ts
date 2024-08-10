import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-ayudar',
  standalone: true,
  imports: [],
  templateUrl: './como-ayudar.component.html',
  styleUrls: ['./como-ayudar.component.css'] // Cambia 'styleUrl' por 'styleUrls'
})
export class ComoAyudarComponent implements OnInit {

  ngOnInit(): void {
    const textSections = document.querySelectorAll('.text-section');

    textSections.forEach(section => {
      const button = section.querySelector('.read-more-btn');
      button?.addEventListener('click', () => {
        section.classList.toggle('expanded');
        button.textContent = section.classList.contains('expanded') ? 'Leer menos' : 'Leer más';
      });
    });
  }
}

