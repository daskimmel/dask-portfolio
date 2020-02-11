import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './pages/skills/skills.component';
import { TileComponent } from './ui/tile/tile.component';
import { TileGroupComponent } from './ui/tile-group/tile-group.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { ExperienceComponent } from './pages/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    TileComponent,
    TileGroupComponent,
    HomeComponent,
    NavigationComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
