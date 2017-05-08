import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { UsersModel } from './model/users.model';

import { PageSizeComponent } from './components/page-size';
import { SpinnerComponent } from './components/spinner';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent,
    SpinnerComponent,
    PageSizeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [ UsersModel ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
