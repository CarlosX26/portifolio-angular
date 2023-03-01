import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-slider-show-card",
  templateUrl: "./slider-show-card.component.html",
  styleUrls: ["./slider-show-card.component.scss"],
})
export class SliderShowCardComponent implements OnInit {
  @Input() elementVideo!: string;
  @Input() elementName!: string;
  @Input() elementDescription!: string;
  @Input() elementLink!: string;

  constructor() {}

  ngOnInit(): void {}
}
