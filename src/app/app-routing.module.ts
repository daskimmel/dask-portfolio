import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsComponent} from './pages/skills/skills.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
