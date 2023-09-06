import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PartnershipComponent } from './components/pages/partnership/partnership.component';
import { TrainingComponent } from './components/pages/training/training.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { December2022Component } from './components/pages/blogpages/december2022/december2022.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about_us',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'partnership',
        component: PartnershipComponent,
      },
      {
        path: 'training',
        component: TrainingComponent,
      },
      {
        path: 'december2022blog',
        component: December2022Component,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home', //create 404 page
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
