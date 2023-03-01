import { Component, Input, OnInit } from "@angular/core";
import { ILinksProject } from "src/app/services/database/types";

@Component({
  selector: "app-slider-show-card",
  templateUrl: "./slider-show-card.component.html",
  styleUrls: ["./slider-show-card.component.scss"],
})
export class SliderShowCardComponent implements OnInit {
  @Input() elementVideo!: string;
  @Input() elementName!: string;
  @Input() elementDescription!: string;
  @Input() elementLinks!: ILinksProject[];

  constructor() {}

  ngOnInit(): void {}
}
