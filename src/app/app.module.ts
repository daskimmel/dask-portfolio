import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SkillsComponent} from './pages/skills/skills.component';
import {TileComponent} from './ui/tile/tile.component';
import {TileGroupComponent} from './ui/tile-group/tile-group.component';
import {HomeComponent} from './pages/home/home.component';
import {NavigationComponent} from './ui/navigation/navigation.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ExperienceCardComponent } from './ui/experience-card/experience-card.component';
import { CloudsComponent } from './ui/clouds/clouds.component';
import {Experience2Component} from './pages/experience2/experience2.component';
import {Experience2CardComponent} from './ui/experience2-card/experience2-card.component';

@NgModule({
    declarations: [
        AppComponent,
        SkillsComponent,
        TileComponent,
        TileGroupComponent,
        HomeComponent,
        NavigationComponent,
        ExperienceComponent,
        Experience2Component,
        ExperienceCardComponent,
        Experience2CardComponent,
        CloudsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
