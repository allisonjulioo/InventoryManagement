import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ButtonModule } from './components/button/button.module';
import { SigInputModule } from './components/sig-input/sig-input.module';
import { StoreModule } from '@ngrx/store';

import { reducer as routes } from './store/reducers/routes.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ReceivementComponent } from './pages/receivement/receivement.component';
import { TableComponent } from './components/sig-table/sig-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    HeaderComponent,
    InventoryComponent,
    ReceivementComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    StoreModule.forRoot({
      routes
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    SigInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
