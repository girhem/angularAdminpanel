
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { SidebarComponent } from './include/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {AppMaterialModule} from './app-material/app-material.module';
import {LoginComponent} from './pages/login/login.component';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AutocompleteComponent } from './pages/form-control/autocomplete/autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    AutocompleteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    AppMaterialModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
