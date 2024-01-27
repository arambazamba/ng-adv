import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { uxSplitComponent } from "./ux-split/ux-split.component";
import { uxButtonComponent } from "./ux-button/ux-button.component";


const comps = [uxSplitComponent, uxButtonComponent];

@NgModule({
    imports: [CommonModule, ...comps],
    exports: comps
})
export class UxModule {}
