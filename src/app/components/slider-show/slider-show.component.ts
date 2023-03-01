import { Component, Input, OnInit } from "@angular/core";
import { IProjectsList } from "src/app/services/database/types";

@Component({
  selector: "app-slider-show",
  templateUrl: "./slider-show.component.html",
  styleUrls: ["./slider-show.component.scss"],
})
export class SliderShowComponent implements OnInit {
  scroll: number = 0;

  showingNow = {};

  @Input() listToRender!: IProjectsList[];

  constructor() {}

  ngOnInit(): void {}

  scrollCards(event: WheelEvent): void {
    const target = event.target as HTMLElement;
    const nextCard = target.scrollWidth + 16;
    const maxSroll = nextCard * (this.listToRender.length - 1);

    if (this.scroll < 0) {
      this.scroll = 0;
    }
    if (this.scroll > maxSroll) {
      this.scroll = maxSroll;
    }

    this.scroll += event.deltaY;
  }
}
