import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent} from './helloworld/helloworld.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path: 'card', component: CardComponent},
  {path: 'hello', component: HelloworldComponent},
  {path: 'cart', component: CartComponent},
  {path: '', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }