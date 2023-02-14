import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InLibraryComponent } from './in-library/in-library.component';
import { OutLibraryComponent } from './out-library/out-library.component';
import { SettingsComponent } from './settings/settings.component';
import { AddBookComponent } from './add-book/add-book.component';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';


const routing : Routes = [
  {path: "", component: HomeComponent},
  {path: "AddBook", component: AddBookComponent},
  {path: "LibraryBooks", component: InLibraryComponent},
  {path: "OutLibraryBooks", component: OutLibraryComponent},
  {path: "Settings", component: SettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InLibraryComponent,
    OutLibraryComponent,
    SettingsComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    NgToastModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
