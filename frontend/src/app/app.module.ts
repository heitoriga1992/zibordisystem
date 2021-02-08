import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './views/home/home.component';
import { ProcessCrudComponent } from './views/process-crud/process-crud.component';
import { ProcessCreateComponent } from './components/process/process-create/process-create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProcessReadComponent } from './components/process/process-read/process-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from "@angular/common";
import { ProcessUpdateComponent } from './components/process/process-update/process-update.component';
import { ProcessDeleteComponent } from './components/process/process-delete/process-delete.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { AcervoComponent } from './views/acervo/acervo.component';
import { AaspComponent } from './views/aasp/aasp.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { AudienciaComponent } from './views/audiencia/audiencia.component';
import { AdmComponent } from './views/adm/adm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProcessCrudComponent,
    ProcessCreateComponent,
    ProcessReadComponent,
    ProcessUpdateComponent,
    ProcessDeleteComponent,
    ClientCrudComponent,
    AcervoComponent,
    AaspComponent,
    AgendaComponent,
    AudienciaComponent,
    AdmComponent,
    ClientCreateComponent,
    ClientDeleteComponent,
    ClientReadComponent,
    ClientUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
