import { IndexComponent as sectionIndex } from './views/section/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent as categoriesIndex } from './views/category/index/index.component';
import { CreateComponent } from './views/create/create.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { EditComponent } from './views/edit/edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dq', component: DocumentsComponent },
  { path: 'iq', component: DocumentsComponent },
  { path: 'pq', component: DocumentsComponent },
  { path: 'pv', component: DocumentsComponent },
  { path: 'oq', component: DocumentsComponent },
  { path: 'rv', component: DocumentsComponent },
  { path: 'fat', component: DocumentsComponent },
  { path: 'fr', component: DocumentsComponent },
  { path: 'ms', component: DocumentsComponent },
  { path: 'ps', component: DocumentsComponent },
  { path: 'qs', component: DocumentsComponent },
  { path: 'st', component: DocumentsComponent },
  { path: 'sop', component: DocumentsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'categories', component: categoriesIndex },
  {path:'sections', component: sectionIndex}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
