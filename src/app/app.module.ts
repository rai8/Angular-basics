import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCompoComponent } from './user-compo/user-compo.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, UsersListComponent, HeaderComponent, FooterComponent, UserCompoComponent, AboutComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, UsersModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
