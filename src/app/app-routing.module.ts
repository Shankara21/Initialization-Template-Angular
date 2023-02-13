import { EditComponent as sectionEdit} from './views/section/edit/edit.component';
import { CreateComponent as sectionCreate } from './views/section/create/create.component';
import { EditComponent as categoryEdit } from './views/category/edit/edit.component';
import { CreateComponent as categoryCreate } from './views/category/create/create.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent as categoriesIndex } from './views/category/index/index.component';
import { CreateComponent } from './views/create/create.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { EditComponent } from './views/edit/edit.component';
import { IndexsectionComponent } from './views/section/indexsection/indexsection.component';

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
  { path: 'sections', component: IndexsectionComponent },
  { path: 'categories/create', component: categoryCreate },
  { path: 'categories/edit/:id', component: categoryEdit },
  { path: 'sections/create', component: sectionCreate },
  { path: 'sections/edit/:id', component: sectionEdit }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
