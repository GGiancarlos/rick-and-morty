import { CharacterModel } from './../models/character.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private baseURL: string = "https://rickandmortyapi.com/api/character";
  private baseURL2: string = "/api/characters";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  filterCharacters(ids: string): Observable<any> {
    let url = this.baseURL + '/' + ids;
    return this.http.get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  saveCharacter(character: any): Observable<any> {
    let url = this.baseURL2;

    return this.http.post<any>(url, JSON.stringify(character), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling 
  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
