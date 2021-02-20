import { Router } from '@angular/router';
import { ProcessService } from './../process.service';
import { Component, OnInit } from '@angular/core';
import { Process } from '../process.model';

@Component({
  selector: 'app-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.scss']
})
export class ProcessCreateComponent implements OnInit {

  process: Process = {
    name: "",
    price: null
  }

  constructor(private processService: ProcessService, private router: Router) { }

  ngOnInit(): void {
  }

  createProcess() {
    this.processService.create(this.process).subscribe(value => {
      this.processService.showMessage("Processo cadastrado com sucesso!");
      this.router.navigate(["acervo/process"]);
    });
  }
  cancel() {
    this.router.navigate(["acervo/process"]);
  }
}
