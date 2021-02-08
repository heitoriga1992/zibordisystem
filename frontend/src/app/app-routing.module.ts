import { ProcessCreateComponent } from './components/process/process-create/process-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import './views/home/home.component'
import { HomeComponent } from './views/home/home.component';
import './views/process-crud/process-crud.component'
import { ProcessCrudComponent } from './views/process-crud/process-crud.component';
import { ProcessUpdateComponent } from './components/process/process-update/process-update.component';
import { ProcessDeleteComponent } from './components/process/process-delete/process-delete.component';
import { AaspComponent } from './views/aasp/aasp.component';
import { AcervoComponent } from './views/acervo/acervo.component';
import { AdmComponent } from './views/adm/adm.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { AudienciaComponent } from './views/audiencia/audiencia.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "acervo",
    component: AcervoComponent
  },
  {
    path: "acervo/process",
    component: ProcessCrudComponent
  },
  {
    path: "acervo/process/create",
    component: ProcessCreateComponent
  },
  {
    path: "acervo/process/update/:id",
    component: ProcessUpdateComponent
  },
  {
    path: "acervo/process/delete/:id",
    component: ProcessDeleteComponent
  },
  {
    path: "acervo/client",
    component: ClientCrudComponent
  },
  {
    path: "acervo/client/create",
    component: ClientCreateComponent
  },
  {
    path: "acervo/client/update/:id",
    component: ClientUpdateComponent
  },
  {
    path: "acervo/client/delete/:id",
    component: ClientDeleteComponent
  },
  {
    path: "aasp",
    component: AaspComponent
  },
  {
    path: "agenda",
    component: AgendaComponent
  },
  {
    path: "audiencia",
    component: AudienciaComponent
  },
  {
    path: "adm",
    component: AdmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
