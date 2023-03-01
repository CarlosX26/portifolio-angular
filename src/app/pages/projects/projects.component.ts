import { Component, OnInit } from "@angular/core";
import { IProjectsList } from "src/app/services/database/types";
import { projectsList } from "../../services/database/projects";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projectsList: IProjectsList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projectsList = projectsList;
  }
}
