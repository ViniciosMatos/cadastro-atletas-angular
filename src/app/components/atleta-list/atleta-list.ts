import { Component, inject, OnInit, signal } from '@angular/core';
import { AtletaService } from '../../services/atleta.service';
import { Atleta } from '../../model/atleta';

@Component({
  selector: 'app-atleta-list',
  imports: [],
  templateUrl: './atleta-list.html',
  styleUrl: './atleta-list.css',
})
export class AtletaList implements OnInit {
  private readonly atletaService = inject(AtletaService);
  atletas = signal<Atleta[]>([]);
  carregando = signal<boolean>(false);

  ngOnInit() {
    this.carregarAtletas();
  }

  carregarAtletas(): void {
    this.carregando.set(true);
    this.atletaService.listar().subscribe({
      next: (dados) => {
        this.atletas.set(dados);
        this.carregando.set(false);
      },
      error: (erro) => {
        console.error('Erro ao carregar os atletas:', erro);
        this.carregando.set(false);
      }
    })
  }

  excluir(atleta: Atleta): void {
    if (!atleta.id) return;

    this.atletaService.excluir(atleta.id).subscribe({
      next: () => this.carregarAtletas(),
      error: (erro) => console.error('Erro ao excluir', erro),
    })
  }

  editar(atleta: Atleta): void {
    if (!atleta.id) return;

    const novoNome = prompt('Novo nome:', atleta.nome);
    const novaIdade = prompt('Nova Idade:', atleta.idade.toString());
    const novaNacionalidade = prompt('Nova Nacionalidade:', atleta.nacionalidade);
    const novoEsporte = prompt('Novo Esporte:', atleta.esporte);
    if (!novoNome || !novaIdade || !novaNacionalidade || !novoEsporte) return;
    if (parseInt(novaIdade) < 0) {
      alert('Idade deve ser maior ou igual a 0.');
      return;
    }

    const atletaAtualizado: Atleta = {
      ...atleta,
      nome: novoNome,
      idade: parseInt(novaIdade),
      nacionalidade: novaNacionalidade,
      esporte: novoEsporte
    };
    this.atletaService.atualizar(atletaAtualizado, atleta.id).subscribe({
      next: () => this.carregarAtletas(),
      error: (erro) => console.error('Erro ao editar atleta:', erro)
    });
  }
}
