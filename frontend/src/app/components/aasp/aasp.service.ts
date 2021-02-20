import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AaspService {

  chave: string = '7DB47455AD7142509F1A5632D5E030E2';

  constructor(private http: HttpClient) {}

  getList(data, diferencial) {
    return this.http.get(`api/Associado/intimacao?chave=` + this.chave + `&data=${data}&diferencial=${diferencial}`);
  }
}
