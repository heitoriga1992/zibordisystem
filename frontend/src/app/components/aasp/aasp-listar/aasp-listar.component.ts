import { AaspService } from './../aasp.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aasp-listar',
  templateUrl: './aasp-listar.component.html',
  styleUrls: ['./aasp-listar.component.scss']
})
export class AaspListarComponent implements OnInit {

  intimacao = {};
  intimacoes;

  constructor(
    // private aaspService: AaspService,
    // private http: HttpClient,
    // public fb: FormBuilder
  ) {

  }

  ngOnInit() {
  }

  // onSearch() {
  //   const fields = 'name,description,version,homepage';
  //   let value = this.queryField.value;
  //   if (value) {


  //     let params = new HttpParams();
  //     params = params.set('search', value);
  //     params = params.set('fields', fields);

  //     this.results$ = this.http
  //       .get(this.SEARCH_URL, { params })
  //       .pipe(
  //         tap((res: any) => (this.total = res.total)),
  //         map((res: any) => res.results)
  //       );
  //   }
  // }

  // getIntimacoes() {
  //   this.aaspService.getList(this.data, this.diferencial).subscribe(
  //     response => {
  //       this.intimacoes = []
  //       this.spinner = false;
  //       Object.assign(this.intimacoes, response);
  //       this.intimacoes = this.intimacoes.intimacoes
  //       console.log(response);
  //     }
  //   );
  // }
}
