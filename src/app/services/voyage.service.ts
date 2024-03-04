import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environnement} from "../../environnements/environnement";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  apiUrl = environnement.apiUrl + 'voyages'

  constructor(private httpClient:HttpClient) { }

  /*getAll():Observable<Music[]>{
    return this.httpClient.get<Music[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getOne(id:number):Observable<Music>{
    return this.httpClient.get<Music>(this.apiUrl+'/'+id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  edit(music:Music):Observable<Music>{
    return this.httpClient.put(this.apiUrl + '/'+ music.id,music).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  add(music:Music):Observable<Music>{
    return this.httpClient.post<Music>(this.apiUrl,music).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  delete(music:Music): Observable<Music>{
    return this.httpClient.delete(this.apiUrl+'/'+ music.id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: any){
    let errorMessage =''
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message
    }else{
      errorMessage =`Error code ${error.status}\nMessage:${error.message}`;
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }*/
}
