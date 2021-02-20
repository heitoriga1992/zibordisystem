import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    name: "",
    price: null
  }

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  createClient() {
    this.clientService.create(this.client).subscribe(value => {
      this.clientService.showMessage("Cliento cadastrado com sucesso!");
      this.router.navigate(["acervo/client"]);
    });
  }
  cancel() {
    this.router.navigate(["acervo/client"]);
  }
}
