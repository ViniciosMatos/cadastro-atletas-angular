import { ChangeDetectorRef, Component, EventEmitter, inject, Output } from '@angular/core';
import { AtletaService } from '../../services/atleta.service';
import { Atleta } from '../../model/atleta';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atleta-form',
  imports: [FormsModule],
  templateUrl: './atleta-form.html',
  styleUrl: './atleta-form.css',
})
export class AtletaForm {
  title = "Novo Atleta";
  atleta: Atleta = {
    nome: '',
    idade: 0,
    nacionalidade: '',
    esporte: ''
  };

  @Output() salvo = new EventEmitter<void>();

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly produtoService = inject(AtletaService);

  salvar(): void {
    this.produtoService.criar(this.atleta).subscribe({
      next: () => {
        this.atleta = {
          nome: '',
          idade: 0,
          nacionalidade: '',
          esporte: ''
        };
        this.salvo.emit();
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao salvar', erro),
    })
  }
}
