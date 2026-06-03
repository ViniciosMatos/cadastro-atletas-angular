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
  mensagemErro = '';
  atleta: Atleta = {
    nome: '',
    idade: 0,
    nacionalidade: '',
    esporte: '',
    emAtividade: false
  };

  @Output() salvo = new EventEmitter<void>();

  private readonly cdr = inject(ChangeDetectorRef);
  private readonly produtoService = inject(AtletaService);

  private validarFormulario(): boolean {
    const nomeValido = this.atleta.nome.trim().length > 0;
    const idadeValida = this.atleta.idade >= 0; //
    const nacionalidadeValida = this.atleta.nacionalidade.trim().length > 0;
    const esporteValido = this.atleta.esporte.trim().length > 0;

    this.mensagemErro = nomeValido && idadeValida && nacionalidadeValida && esporteValido
      ? ''
      : 'Preencha todos os campos e use uma idade maior ou igual a 0.';

    return nomeValido && idadeValida && nacionalidadeValida && esporteValido;
  }

  salvar(): void {
    this.mensagemErro = '';

    if (!this.validarFormulario()) {
      return;
    }

    this.produtoService.criar(this.atleta).subscribe({
      next: () => {
        this.atleta = {
          nome: '',
          idade: 0,
          nacionalidade: '',
          esporte: '',
          emAtividade: false
        };
        this.salvo.emit();
        this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao salvar', erro),
    })
  }
}
