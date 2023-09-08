import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthFacade } from 'src/app/auth/state/auth.facade';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements AfterViewInit {
  router = inject(Router);
  dialog = inject(MatDialog);
  as = inject(AuthFacade);
  @ViewChild('dialog') template: TemplateRef<any> | null = null;

  ngAfterViewInit() {
    if (this.template) {
      const ref = this.dialog.open(this.template, {
        width: '350px',
      });

      ref.afterClosed().subscribe(() => {
        this.router.navigate(['demos']);
      });
    }
  }

  signIn() {
    this.as.signIn('mockUser', 'mockPassword');
    this.dialog.closeAll();
  }
}
