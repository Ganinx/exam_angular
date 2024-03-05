import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environnement} from "../../environnements/environnement";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Voyage} from "../models/voyage";
import {VoyageForm} from "../models/voyage-form";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  apiUrl = environnement.apiUrl + 'voyages'

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Voyage[]>{
    return this.httpClient.get<Voyage[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  getOne(id:number):Observable<Voyage>{
    return this.httpClient.get<Voyage>(this.apiUrl+'/'+id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  delete(voyage:Voyage): Observable<Voyage>{
    return this.httpClient.delete(this.apiUrl+'/'+ voyage.id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

  add(voyage:VoyageForm):Observable<VoyageForm>{
    return this.httpClient.post<VoyageForm>(this.apiUrl,voyage).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
  }

    edit(voyage:Voyage):Observable<Voyage>{
      return this.httpClient.put(this.apiUrl + '/'+ voyage.id,voyage).pipe(
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
  }
}
