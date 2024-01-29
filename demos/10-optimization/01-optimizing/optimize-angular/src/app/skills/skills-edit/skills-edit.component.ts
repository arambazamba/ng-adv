import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../skill.model';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { SkillsEntityService } from '../skills-entity.service';
import { map, skip, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggle,
    MatCardActions,
    MatButton,
    AsyncPipe,
    JsonPipe,
  ],
})
export class SkillsEditComponent {
  @Input({ required: true }) id: number = 0;
  route = inject(ActivatedRoute);
  router = inject(Router);
  service = inject(SkillsEntityService);
  sns = inject(SnackbarService);
  skill = this.id != 0 ? this.service.getSkillById(this.id) : null;

  ngOnChanges(): void {
    if (this.id != 0) {
      this.skill = this.service.getSkillById(this.id);
    }
  }

  saveSkill() {

  }

  doCancel() {
    this.router.navigate(['/skills']);
  }
}
