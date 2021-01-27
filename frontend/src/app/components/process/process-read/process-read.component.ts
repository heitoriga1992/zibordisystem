import { ProcessService } from './../process.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Process } from '../process.model';

@Component({
  selector: 'app-process-read',
  templateUrl: './process-read.component.html',
  styleUrls: ['./process-read.component.scss']
})
export class ProcessReadComponent implements OnInit {

  process: Process[];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private processService: ProcessService) {
  }

  ngOnInit() {
    this.readProcess();
  }

  private readProcess() {
    this.processService.read().subscribe(process => {
      this.process = process;
      console.log('this.process:', this.process)
    });
  }

  
}
