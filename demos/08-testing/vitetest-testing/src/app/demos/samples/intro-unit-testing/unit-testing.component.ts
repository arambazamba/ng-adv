import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MarkdownRendererComponent } from "../../../shared/markdown-renderer/markdown-renderer.component";

@Component({
    selector: "app-unit-testing",
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./unit-testing.component.html",
    styleUrls: ["./unit-testing.component.scss"],
    imports: [MarkdownRendererComponent]
})
export class UnitTestingComponent { }
