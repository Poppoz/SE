import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JhComponent } from './jh/jh.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jh', component: JhComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
