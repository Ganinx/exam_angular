import { Injectable } from '@angular/core';
import {environnement} from "../../environnements/environnement";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environnement.apiUrl

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<{ token: string }>{
    return this.httpClient.post<{token: string}>(this.apiUrl+"auth", user).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new ErrorEvent(error.error.message));
  }

}
