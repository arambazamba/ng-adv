import { Component, OnInit } from "@angular/core";
import { MarkdownRendererComponent } from "../../../shared/markdown-renderer/markdown-renderer.component";

@Component({
    selector: "app-unit-testing",
    templateUrl: "./unit-testing.component.html",
    styleUrls: ["./unit-testing.component.scss"],
    standalone: true,
    imports: [MarkdownRendererComponent]
})
export class UnitTestingComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
