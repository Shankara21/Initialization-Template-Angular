import { RegisterComponent } from './pages/register/register.component';
import { EditLineComponent } from './views/line/edit-line/edit-line.component';
import { CreateLineComponent } from './views/line/create-line/create-line.component';
import { IndexLineComponent } from './views/line/index-line/index-line.component';
import { EditComponent as sectionEdit } from './views/section/edit/edit.component';
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
  {
    path: 'document', children: [
      { path: ':route', component: DocumentsComponent },
    ]
  },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'categories', component: categoriesIndex },
  { path: 'sections', component: IndexsectionComponent },
  { path: 'categories/create', component: categoryCreate },
  { path: 'categories/edit/:id', component: categoryEdit },
  { path: 'sections/create', component: sectionCreate },
  { path: 'sections/edit/:id', component: sectionEdit },
  { path: 'line', component: IndexLineComponent },
  { path: 'line/create', component: CreateLineComponent },
  { path: 'line/edit/:id', component: EditLineComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
