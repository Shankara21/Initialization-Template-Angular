// Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { CreateComponent } from './views/create/create.component';
import { EditComponent } from './views/edit/edit.component';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './views/category/index/index.component';
import { IndexsectionComponent } from './views/section/indexsection/indexsection.component';
import { EditComponent as sectionEdit } from './views/section/edit/edit.component';
import { CreateComponent as sectionCreate } from './views/section/create/create.component';
import { EditComponent as categoryEdit } from './views/category/edit/edit.component';
import { CreateComponent as categoryCreate } from './views/category/create/create.component';
import { IndexLineComponent } from './views/line/index-line/index-line.component';
import { CreateLineComponent } from './views/line/create-line/create-line.component';
import { EditLineComponent } from './views/line/edit-line/edit-line.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    DocumentsComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    IndexComponent,
    IndexsectionComponent,
    sectionEdit,
    sectionCreate,
    categoryEdit,
    categoryCreate,
    IndexLineComponent,
    CreateLineComponent,
    EditLineComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
