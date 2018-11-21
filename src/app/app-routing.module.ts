import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchHistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './login/login.component';
import { AdminComponent} from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'history', canActivate: [AuthGuard], component: SearchHistoryComponent },
  { path: 'admin', canActivate: [AdminGuard], component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
