import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListCompteClientComponent } from './list-clients/list-compte-client/list-compte-client.component';
import { VirementComponent } from './virement/virement/virement.component';
import { CreateClientComponent } from './list-clients/create-client/create-client.component';
import { EditClientComponent } from './list-clients/edit-client/edit-client.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGuardService } from './services/auth-guard-conseiller.service';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { HomeComponent } from './home/home.component';
import { ListConseillersComponent } from './list-conseillers/list-conseillers.component';
import { CreateConseillerComponent } from './list-conseillers/create-conseiller/create-conseiller.component';
import { ReportingComponent } from './reporting/reporting.component';
import { AffectationClientComponent } from './list-clients/affectation-client/affectation-client.component';

const routes: Routes = [

  // Rooting d'acceuil la page login
  {path: '', component: HomeComponent},
  {path: 'auth/login', component: LoginComponent },
  {path: 'list-clients', component: ListClientsComponent, canActivate: [AuthGuardService] },
  {path: 'list-conseillers', component: ListConseillersComponent, canActivate: [AuthGuardService] },
  {path: 'list-clients/new-client', component: CreateClientComponent, canActivate: [AuthGuardService]},
  {path: 'list-conseillers/new-conseiller', component: CreateConseillerComponent, canActivate: [AuthGuardService]},
  {path: 'list-clients/edit-client', component: EditClientComponent, canActivate: [AuthGuardService]},
  {path: 'list-clients/list-compte-client', component: ListCompteClientComponent, canActivate: [AuthGuardService]},
  {path: 'virement/virement', component: VirementComponent, canActivate: [AuthGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  {path: 'parametrage', component: ParametrageComponent},
  {path: 'reporting', component: ReportingComponent},
  {path: 'list-clients/affectation-client', component: AffectationClientComponent},


  // Redirection vers la page d'acceuil

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
