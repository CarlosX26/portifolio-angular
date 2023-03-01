import { Component, OnInit } from "@angular/core";
import { ISkillsList } from "src/app/services/database/types";
import { skillsList } from "../../services/database/skills";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  skillsList!: ISkillsList[];

  constructor() {}

  ngOnInit(): void {
    this.skillsList = skillsList;
  }
}
