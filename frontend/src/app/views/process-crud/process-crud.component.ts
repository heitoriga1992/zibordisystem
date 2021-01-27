import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-crud',
  templateUrl: './process-crud.component.html',
  styleUrls: ['./process-crud.component.scss']
})
export class ProcessCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate() {
    this.router.navigate(['/process/create'])
  }
}
