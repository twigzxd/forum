import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {CarpoolOfferComponent} from "./Components/carpoolOffer.component";
import {PostComponent } from './Components/post.component';
import {StatusCardComponent} from "./Components/statusCard.component";
import {PageNotFoundComponent} from "../PageNotFound/PageNotFound.component";
import { EmptyComponent } from './Components/empty.component';
import { MainComponent } from '../main/main.component';
import { OfferWantComponent} from '../main/offer_want.component'



const routes :Routes = [
  { 
    path:'',
    redirectTo:'main',
    pathMatch: 'full' 
  },
  { 
    path:'main',
    component:MainComponent
  },
  { 
    path:'offer_want',
    component:OfferWantComponent
  },
  {
    path:'carpoolPost',
    component:CarpoolOfferComponent
  },
  {
    path: 'post', 
    component:PostComponent
  },
  {
    path:'statusCard',
    component:StatusCardComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
    
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class RoutingPostModule{}
export const RoutingComponents =[
                                  MainComponent,
                                  OfferWantComponent,
                                  CarpoolOfferComponent,
                                  PostComponent,
                                  StatusCardComponent,
                                  EmptyComponent,
                                  PageNotFoundComponent
                                ]