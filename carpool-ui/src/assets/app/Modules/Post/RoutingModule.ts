import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CarpoolOfferComponent} from "./Components/carpoolOffer.component";
import {PostComponent } from './Components/post.component';
import {StatusCardComponent} from "./Components/statusCard.component";
import {PageNotFoundComponent} from "../PageNotFound/PageNotFound.component";
import { EmptyComponent } from './Components/empty.component';

const routes :Routes = [
    // { 
    //   path:'',
    //   redirectTo: 'carpoolPost',
    //   pathMatch:'full'
    // },
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
    // {
    //   path:"**",
    //   component:PageNotFoundComponent
    // }
    
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class RoutingPostModule{}
export const RoutingComponents =[
                                  EmptyComponent,
                                  CarpoolOfferComponent,
                                  PostComponent,
                                  StatusCardComponent,
                                  PageNotFoundComponent
                                ]