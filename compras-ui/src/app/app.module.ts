import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormItemComponent } from 'src/app/components/form-item/form-item.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './core/pipes/capitalize.pipe';

@NgModule({
  declarations: [AppComponent, FormItemComponent, ItemComponent, CapitalizePipe],
  imports: [BrowserModule, FontAwesomeModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
