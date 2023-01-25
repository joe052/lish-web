import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    WrapperComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, LayoutRoutingModule],
})
export class CustomLayoutModule {}
