import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../skill.model';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
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
