import { ProcessService } from './../process.service';
import { Process } from './../process.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-process-update',
  templateUrl: './process-update.component.html',
  styleUrls: ['./process-update.component.scss']
})
export class ProcessUpdateComponent implements OnInit {

  process: Process;

  constructor(
    private processService: ProcessService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.processService.readById(id).subscribe((process) => {
      this.process = process;
    });
  }

  updateProcess() {
    this.processService.update(this.process).subscribe(() => {
      this.processService.showMessage("Processo atualizado com sucesso!");
      this.router.navigate(["acervo/process"]);
    });
  }

  cancel() {
    this.router.navigate(["acervo/process"]);
  }
}
