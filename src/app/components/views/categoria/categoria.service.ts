import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Categoria[]> {//observable é o retorno
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  } // 'https://bookstore-api-patryck.herokuapp.com/categorias'
}
