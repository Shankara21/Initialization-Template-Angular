import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  // Base url
  private port3000 = 'http://localhost:3000/';
  private port3126 = 'http://192.168.9.47:3126/';

  constructor(private HttpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //////////////////////
  //?/ Http Methods ///
  ////////////////////

  public id: any;
  public username: any;
  public fullname: any;
  public email: any;
  public userLevel: any;

  public path: any;

  public data: any;
  // Categories
  getAllCategories() {
    return this.HttpClient.get(this.port3126 + 'categories')
      .pipe(catchError(this.errorHttpHandler))
  }

  getCategories(params: any) {
    return this.HttpClient.get(this.port3126 + `categories/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }

  getCategoriesById(params: any) {
    return this.HttpClient.get(this.port3126 + `categories/find/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }

  createCategories(params: any) {
    return this.HttpClient.post(this.port3126 + `categories`, params)
      .pipe(catchError(this.errorHttpHandler))
  }

  updateCategories(id: any, params: any) {
    return this.HttpClient.put(this.port3126 + `categories/${id}`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  deleteCategories(id: any) {
    return this.HttpClient.delete(this.port3126 + `categories/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }

  // Sections
  getSection() {
    return this.HttpClient.get(this.port3126 + 'sections')
      .pipe(catchError(this.errorHttpHandler))
  }
  createSection(params: any) {
    return this.HttpClient.post(this.port3126 + `sections`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  getSectionById(params: any) {
    return this.HttpClient.get(this.port3126 + `sections/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateSection(id: any, params: any) {
    return this.HttpClient.put(this.port3126 + `sections/${id}`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  deleteSection(id: any) {
    return this.HttpClient.delete(this.port3126 + `sections/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }

  // Documents
  getListDocuments(params: any) {
    return this.HttpClient.get(this.port3126 + `documents/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  createDocument(params: any) {
    return this.HttpClient.post(this.port3126 + `documents`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  findDocument(params: any): Observable<any> {
    return this.HttpClient.get(this.port3126 + `documents/find/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateDocument(id: any, params: any): Observable<any> {
    return this.HttpClient.put(this.port3126 + `documents/${id}`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  deleteDocument(id: any): Observable<any> {
    return this.HttpClient.delete(this.port3126 + `documents/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  getAmountDocument() {
    return this.HttpClient.get(this.port3126 + `documents/count`).pipe(catchError(this.errorHttpHandler))
  }
  filterByYear(params: any) {
    return this.HttpClient.post(this.port3126 + `documents/filterByYear`, params).pipe(catchError(this.errorHttpHandler));
  }

  // Line
  getLine() {
    return this.HttpClient.get(this.port3126 + 'lines/')
      .pipe(catchError(this.errorHttpHandler))
  }
  createLine(params: any) {
    return this.HttpClient.post(this.port3126 + `lines`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  getLineById(params: any) {
    return this.HttpClient.get(this.port3126 + `lines/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateLine(id: any, params: any) {
    return this.HttpClient.put(this.port3126 + `lines/${id}`, params)
      .pipe(catchError(this.errorHttpHandler))
  }
  deleteLine(id: any) {
    return this.HttpClient.delete(this.port3126 + `lines/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }



  // Auth
  login(params: any) {
    return this.HttpClient.post(this.port3126 + 'users/login', params)
  }
  register(params: any) {
    return this.HttpClient.post(this.port3126 + 'users/register', params)
  }
  logout(params: any) {
    return this.HttpClient.delete(this.port3126 + `users/logout/${params}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  refreshToken(params: any) {
    return this.HttpClient.post(this.port3126 + `users/refreshToken`, params)
      .pipe(catchError(this.errorHttpHandler))
  }

  // User
  getUser() {
    return this.HttpClient.get(this.port3126 + 'users')
      .pipe(catchError(this.errorHttpHandler))
  }
  findUser(id: any) {
    return this.HttpClient.get(this.port3126 + `users/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  deleteUser(id: any) {
    return this.HttpClient.delete(this.port3126 + `users/${id}`)
      .pipe(catchError(this.errorHttpHandler))
  }
  updateUser(id: any, params: any) {
    return this.HttpClient.put(this.port3126 + `users/${id}`, params)
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
