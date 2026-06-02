import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { AtletaForm } from './components/atleta-form/atleta-form';
import { AtletaList } from './components/atleta-list/atleta-list';

@Component({
  selector: 'app-root',
  imports: [Navbar, AtletaForm, AtletaList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
