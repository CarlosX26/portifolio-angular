import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { SkillsComponent } from "./pages/skills/skills.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SliderShowComponent } from "./components/slider-show/slider-show.component";
import { SliderShowCardComponent } from "./components/slider-show-card/slider-show-card.component";
import { MatButtonModule } from "@angular/material/button";
import { ExperiencesComponent } from './pages/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    SliderShowComponent,
    SliderShowCardComponent,
    ExperiencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
