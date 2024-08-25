import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  items: number[] = [
    1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 3, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6,
  ];
}
