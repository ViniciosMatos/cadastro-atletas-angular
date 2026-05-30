import { Component, inject, OnInit, signal } from '@angular/core';
import { AtletaService } from '../../services/atleta.service';
import { Atleta } from '../../model/atleta';

@Component({
  selector: 'app-atleta-list',
  imports: [],
  templateUrl: './atleta-list.html',
  styleUrl: './atleta-list.css',
})
export class AtletaList implements OnInit{
  private readonly produtoService = inject(AtletaService);
  atletas = signal<Atleta[]>([]);
  carregando = signal<boolean>(false);

  ngOnInit() {
    
  }

  carregarAtletas(): void{
    this.carregando.set(true);
    this.produtoService.listar().subscribe({
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

  excluir(atleta: Atleta): void{
    if(!atleta.id) return;

    this.produtoService.excluir(atleta.id).subscribe({
      next: () => this.carregarAtletas(),
      error: (erro) => console.error('Erro ao excluir', erro),
    })
  }
}
