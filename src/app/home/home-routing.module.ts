import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from '../pages/main/main.page';
import { RegisterPage } from '../pages/register/register.page';
import { HomePage } from './home.page';

const routes: Routes = [
  { path: '', component: HomePage, },
  { path: '/register', component: RegisterPage, },
  // { path: '/main', component: MainPage, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
