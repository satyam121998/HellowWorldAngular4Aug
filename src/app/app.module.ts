import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { ButtonModule } from 'primeng/button';
import {InputNumberModule} from 'primeng/inputnumber';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { ViewComponent } from './view/view.component';





@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    CardComponent,
    CartComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputNumberModule,
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
