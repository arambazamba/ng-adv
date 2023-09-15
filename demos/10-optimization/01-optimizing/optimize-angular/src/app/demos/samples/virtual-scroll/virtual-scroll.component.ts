import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-virtual-scroll",
  templateUrl: "./virtual-scroll.component.html",
  styleUrls: ["./virtual-scroll.component.scss"]
})
export class VirtualScrollComponent {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  @ViewChild(CdkVirtualScrollViewport, { static: true })
  viewport: CdkVirtualScrollViewport | undefined;

  handler(evt: any) { }
}
