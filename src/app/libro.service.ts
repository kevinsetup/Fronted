import { Injectable } from '@angular/core';
import { Libro } from '../app/libro/libro';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private url = 'http://localhost:8086/libro';




  constructor(private http:HttpClient) {}
    getListarLibros(){
      return this.http.get<Libro[]>(this.url);
    
   }
}
