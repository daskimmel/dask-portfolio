import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsComponent} from './pages/skills/skills.component';
import {HomeComponent} from './pages/home/home.component';
import {ExperienceComponent} from './pages/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'skills', component: SkillsComponent, data: {animation: 'SkillsPage'} },
  { path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
