import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../skill.model';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';

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
    ],
})
export class SkillsEditComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  sns = inject(SnackbarService);
  skill: Skill = new Skill();

  name = new FormControl(this.skill.name, [Validators.required, Validators.minLength(3)]);
  id = new FormControl(this.skill.id, [Validators.required]);
  completed = new FormControl(this.skill.completed, [Validators.required]);

  ngOnInit(): void {
    // this.readParamUsingResolver();
    this.readParamUsingResolverObs();
  }

  readParamUsingResolver() {
    this.skill = this.route.snapshot.data['skillData'];
  }

  readParamUsingResolverObs() {
    this.route.data.subscribe((data) => {
      this.skill = data['skillData'];
    });
  }

  saveSkill() {
    this.sns.displayAlert('Warning', 'Save not implemented');
  }

  doCancel() {
    this.router.navigate(['/skills']);
  }
}
