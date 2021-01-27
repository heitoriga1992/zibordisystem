import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { Process } from './process.model';

@Injectable({
  providedIn: 'root'
})


export class ProcessService {

  baseUrl = 'http://localhost:3001/process';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false) {
    console.log(msg);
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    })
  }

  create(process: Process): Observable<Process> {
    return this.http.post<Process>(this.baseUrl, process).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true)
    return EMPTY;
  }

  read(): Observable<Process[]> {
    return this.http.get<Process[]>(this.baseUrl);
  }

  readById(id: string): Observable<Process> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Process>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Process): Observable<Process> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Process>(url, product);
  }

  delete(id: number): Observable<Process> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Process>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
