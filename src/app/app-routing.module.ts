import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Home'
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'About'
  },
  { 
    path: 'projects', 
    component: ProjectsComponent,
    title: 'Projects'
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    title: 'Contact'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { } 