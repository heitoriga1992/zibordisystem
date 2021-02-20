import { Component, OnInit } from '@angular/core';
import { Client } from '../../client/client.model';
import { ClientService } from '../../client/client.service';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.scss']
})
export class ClientReadComponent implements OnInit {

  client: Client[];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.readClient();
  }

  private readClient() {
    this.clientService.read().subscribe(client => {
      this.client = client;
      console.log('this.client:', this.client)
    });
  }

  
}
