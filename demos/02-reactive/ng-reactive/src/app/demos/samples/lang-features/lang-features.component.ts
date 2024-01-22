import { Component } from '@angular/core';
import * as _ from 'lodash';
import { combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lang-features',
  templateUrl: './lang-features.component.html',
  styleUrls: ['./lang-features.component.scss'],
})
export class LangFeaturesComponent {
  impureFunction() {
    let name = 'Sandra';

    function greet() {
      name += ', how are you today?';
      console.log(name);
    }

    greet();
    name = 'Heinz';
    greet();
  }

  pureFunction() {
    function greet(name: string) {
      return `${name}, how are you today`;
    }

    console.log(greet('Sandra'));
    console.log(greet('Heinz'));
  }

  shallowClone() {
    const languages = {
      js: 'JavaScript',
      ts: 'TypeScript',
      ng: 'Angular',
    };
    const father = {
      birth: new Date(),
      job: 'Dev Dude',
      children: [
        { name: 'David', age: 12 },
        { name: 'Soi', age: 7 },
      ],
    };

    //does this create a shallow copy or a deep copy?
    const spreadClonedPerson = { ...father };
    spreadClonedPerson.children[0].name = 'Giro';
    console.log('After Change:', father.children[0].name);

    //object composition -> no change detection
    const copiedPerson = Object.assign(father, { job: 'Construction Guy' });
    console.log('After Change:', father);
    console.log('After Change:', copiedPerson);
    //shallow copy -> change detection
    const clonedPerson = Object.assign({}, father, languages);
    console.log('After Change:', father);
    console.log('After Change:', clonedPerson);

    const arr = [1, 2, 3];
    const notAnArray = { ...arr };
    const clonedArray = [...arr];
  }

  deepCloning() {
    const father = {
      birth: new Date(),
      job: 'Dev Dude',
      children: [
        { name: 'David', age: 12 },
        { name: 'Soi', age: 7 },
      ],
    };

    const copiedPerson = _.cloneDeep(father);
    console.log('Spreaded Person:', copiedPerson);

    father.children[0].name = 'Giro';
    console.log('After Change:', copiedPerson);
  }

  useDestructuring() {
    //object destructuring
    const father = {
      birth: new Date(),
      job: 'Dev Dude',
      children: [
        { name: 'David', age: 12 },
        { name: 'Soi', age: 7 },
      ],
    };

    //destructuring helps us to initialize variables with the values of an object
    const { birth, job, children } = father;

    //this is the same as
    const b = father.birth;
    const j = father.job;
    const c = father.children;

    console.log('birth:', birth);
    console.log('job:', job);
    console.log('children:', children);

    const chrs$ = of(['a', 'b', 'c']);
    const nbrs$ = of([1, 2, 3]);

    //when used like here destructuring works like aliasing
    combineLatest([nbrs$, chrs$])
      .pipe(
        map(([nbrs, chars]) => {
          console.log('nbrs:', nbrs);
          console.log('chrs:', chars);
        })
      )
      .subscribe();
  }
}
