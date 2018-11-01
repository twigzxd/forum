import { NgModule } from '@angular/core'
import { FormsModule }    from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// import {CarpoolOfferComponent} from './Components/carpoolOffer.component';
// import {PostComponent} from './Components/post.component';
// import {PageNotFoundComponent} from '../PageNotFound/PageNotFound.component';
// import {StatusCardComponent} from './Components/statusCard.component';
import {PostService} from './posts.services';
import { RoutingPostModule, RoutingComponents } from './RoutingModule';

// const routes :Routes = [
//     {
//       path:'carpoolPost',
//       component:CarpoolOfferComponent
//     },
//     {
//       path: 'post', 
//       component:PostComponent
//     },
//     {
//       path:'statusCard',
//       component:StatusCardComponent
//     }
//     ,
//     {
//       path:'**',
//       component:PageNotFoundComponent
//     }
// ];

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      RoutingPostModule
    ],
  
    declarations: [
      RoutingComponents
    ],
  
    providers: [
      PostService
    ]

  })

export class PostModule {}