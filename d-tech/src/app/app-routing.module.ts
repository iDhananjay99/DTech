import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutusComponent
  },
  {
    path: 'contact-us',
    component: ContactusComponent
  },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
