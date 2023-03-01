import { ExperiencesComponent } from "./pages/experiences/experiences.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SkillsComponent } from "./pages/skills/skills.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "skills",
    component: SkillsComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
  },
  {
    path: "experiences",
    component: ExperiencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
