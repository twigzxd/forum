import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

// import { UserModule } from './Modules/User/userModule';
import {PostModule} from './Modules/Post/postModule'
// import { UserService } from './Modules/User/services';
import { RouterModule, Routes } from '@angular/router'
// import { RoutingComponents } from './Modules/Post/RoutingModule';

const routes: Routes = [
  {
    path: 'test',
    // loadChildren: () => UserModule
    loadChildren: () => PostModule
  }
];

@NgModule({
  imports: [
    BrowserModule,
    // UserModule,
    PostModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
    // RoutingComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
