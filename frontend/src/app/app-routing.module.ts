import { ProcessCreateComponent } from './components/process/process-create/process-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import './views/home/home.component'
import { HomeComponent } from './views/home/home.component';
import './views/process-crud/process-crud.component'
import { ProcessCrudComponent } from './views/process-crud/process-crud.component';
import { ProcessUpdateComponent } from './components/process/process-update/process-update.component';
import { ProcessDeleteComponent } from './components/process/process-delete/process-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "process",
    component: ProcessCrudComponent
  },
  {
    path: "process/create",
    component: ProcessCreateComponent
  },
  {
    path: "process/update/:id",
    component: ProcessUpdateComponent
  },
  {
    path: "process/delete/:id",
    component: ProcessDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
