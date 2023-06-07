import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url: string = environment.apiUrl;
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ApiResponse> {
    const url = `${this.url}characters?apikey=${this.apiKey}`;
    console.log(url);
    return this.http.get<ApiResponse>(url);
  }

  getCharacterById(id: string): Observable<ApiResponse> {
    const url = `${this.url}characters/${id}?apikey=${this.apiKey}`;
    console.log(url);
    return this.http.get<ApiResponse>(url);
  }
}
