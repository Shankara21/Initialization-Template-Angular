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
