import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  // Base url
  private port3000 = 'http://localhost:3000/';

  constructor(private HttpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //////////////////////
  //?/ Http Methods ///
  ////////////////////

  // Categories
  getAllCategories() {
    return this.HttpClient.get(this.port3000 + 'categories')
      .pipe(catchError(this.errorHttpHandler))
  }

  getCategories(params: any) {
    return this.HttpClient.get(this.port3000 + `categories/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }

  getCategoriesById(params: any) {
    return this.HttpClient.get(this.port3000 + `categories/find/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }

  // Sections
  getSection() {
    return this.HttpClient.get(this.port3000 + 'sections')
      .pipe(catchError(this.errorHttpHandler))
  }

  // Documents
  getListDocuments(params: any) {
    return this.HttpClient.get(this.port3000 + `documents/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  createDocument(params: any) {
    return this.HttpClient.post(this.port3000 + `documents`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  findDocument(params: any): Observable<any>{
    return this.HttpClient.get(this.port3000 + `documents/find/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateDocument(id: any, params: any): Observable<any> {
    return this.HttpClient.put(this.port3000 + `documents/${id}`, params)
      .pipe(catchError(this.errorHttpHandler))
  }

  //////////////////////
  //!/ Http Methods ///
  ////////////////////



  // Error handling
  errorHttpHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error ${error.error.message}`
    }
    else {
      errorMessage = `Error code : ${error.status}\n${error.message}`
    }
    return throwError(errorMessage)
  }
}
