import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  inject
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements AfterViewInit {
  router = inject(Router);
  dialog = inject(MatDialog);
  @ViewChild('dialog') template: TemplateRef<any> | null = null;

  ngAfterViewInit() {
    if (this.template) {
      const ref = this.dialog.open(this.template, {
        width: '350px',
      });

      ref.afterClosed().subscribe(() => {
        this.router.navigate(['demos']);
        this.dialog.closeAll();
      });
    }
  }
}
