import {
  Component,
  ElementRef,
  viewChild,
  viewChildren
} from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { AlertComponent } from './alert/alert.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButtonModule,
    AlertComponent
  ],
})
export class ViewChildComponent {
  nbrLiters = viewChild.required('liters', { read: ElementRef });
  nbrCost = viewChild.required('cost', { read: ElementRef });
  inputs = viewChildren('input');
  alert = viewChild.required(AlertComponent, { read: ElementRef });

  ngAfterViewInit(): void {
    console.log("viewChildren:", this.inputs());
  }

  calculateCost() {
    const cost = this.nbrLiters().nativeElement.value * 1.25;
    if (this.nbrCost()) {
      this.nbrCost().nativeElement.value = cost;
    }
  }

  hideAlert() {
    this.alert().nativeElement.style.display = 'none';
  }
}
