import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListCompteClientComponent } from './list-clients/list-compte-client/list-compte-client.component';
import { HeaderComponent } from './header/header.component';
import { VirementComponent } from './virement/virement/virement.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './list-clients/create-client/create-client.component';
import { EditClientComponent } from './list-clients/edit-client/edit-client.component';
import { LogoutComponent } from './auth/logout/logout.component';

import { ParametrageComponent } from './parametrage/parametrage.component';
import { ListConseillersComponent } from './list-conseillers/list-conseillers.component';
import { CreateConseillerComponent } from './list-conseillers/create-conseiller/create-conseiller.component';
import { HomeComponent } from './home/home.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AffectationClientComponent } from './list-clients/affectation-client/affectation-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListClientsComponent,
    ListCompteClientComponent,
    HeaderComponent,
    VirementComponent,
    CreateClientComponent,
    EditClientComponent,
    LogoutComponent,
    ParametrageComponent,
    ListConseillersComponent,
    CreateConseillerComponent,
    HomeComponent,
    ReportingComponent,
    AffectationClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
