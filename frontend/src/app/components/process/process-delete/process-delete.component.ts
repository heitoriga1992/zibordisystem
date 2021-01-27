import { ProcessService } from './../process.service';
import { Process } from './../process.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-process-delete',
  templateUrl: './process-delete.component.html',
  styleUrls: ['./process-delete.component.scss']
})
export class ProcessDeleteComponent implements OnInit {

  process: Process;

  constructor(
    private processService: ProcessService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.processService.readById(id).subscribe(process => {
      this.process = process;
    });
  }

  deleteProcess() {
    this.processService.delete(this.process.id).subscribe(() => {
      this.processService.showMessage("Processo deletado com sucesso!");
      this.router.navigate(["/process"]);
    });
  }
  cancel() {
    this.router.navigate(["/process"]);
  }
}
