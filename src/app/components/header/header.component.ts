import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navLinks: any = [
    {
      label: 'Página Inicial',
      path: '',
    },
    {
      label: 'Contactos',
      path: '',
    },
    {
      label: 'Sobre',
      path: '',
    },
  ];
}
