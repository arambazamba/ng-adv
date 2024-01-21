import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  EntityCollectionService
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { SkillsEntityService } from '../skills-entity.service';
import { Skill } from '../skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [AsyncPipe],
})
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  skillsService: EntityCollectionService<Skill>;

  constructor(es: SkillsEntityService) {
    this.skillsService = es;
    this.skills$ = this.skillsService.entities$;
  }

  ngOnInit(): void {
    this.skillsService.getAll();
  }

  addSkill() {
    this.skillsService.add({ id: 0, name: '@ngrx/data', completed: false });
  }

  deleteSkill(item: Skill) {
    this.skillsService.delete(item);
  }
}
