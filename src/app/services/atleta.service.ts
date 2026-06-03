import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Atleta } from "../models/atleta";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AtletaService {
    private readonly apiUrl = 'http://localhost:3000/atletas';
    private readonly http = inject(HttpClient);

    listar(): Observable<Atleta[]>{
        return this.http.get<Atleta[]>(this.apiUrl);
    }

    criar(atleta: Atleta): Observable<Atleta>{
        return this.http.post<Atleta>(this.apiUrl, atleta);
    }

    atualizar(atleta: Atleta, id: number | string) : Observable<Atleta> {
        return this.http.put<Atleta>(`${this.apiUrl}/${id}`, atleta);
    }

    excluir(id: number | string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}