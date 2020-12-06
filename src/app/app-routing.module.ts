import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsComponent} from './pages/skills/skills.component';
import {HomeComponent} from './pages/home/home.component';
import {Experience2Component} from './pages/experience2/experience2.component';
import {ExperienceComponent} from './pages/experience/experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'skills', component: SkillsComponent, data: {animation: 'SkillsPage'} },
  { path: 'experience', component: ExperienceComponent, data: {animation: 'Experience2Page'} },
  { path: 'experience2', component: Experience2Component, data: {animation: 'ExperiencePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
