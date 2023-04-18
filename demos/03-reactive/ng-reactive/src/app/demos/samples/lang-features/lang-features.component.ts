import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { combineLatest, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-lang-features',
  templateUrl: './lang-features.component.html',
  styleUrls: ['./lang-features.component.scss'],
})
export class LangFeaturesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  shallowClone() {
    //Spread operator on objects
    const simplePerson = { name: 'Sepp' };
    const father = {
      birth: new Date(),
      job: 'Dev Dude',
      children: [
        { name: 'David', age: 12 },
        { name: 'Soi', age: 7 },
      ],
    };

    const spreadClonedPerson = { ...father };
    const copiedPerson = Object.assign(father);
    const clonedPerson = Object.assign({}, father);

    const arr = [1, 2, 3];
    const clonedArray = [...arr];

    console.log('Spreaded Person:', spreadClonedPerson);

    father.children[0].name = 'Giro';
    console.log('After Change:', spreadClonedPerson);

    const person = { ...simplePerson, ...father };
    console.log('Spread combined Person:', person);
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

  impureFunction() {
    let name = 'Sandra';

    function greet() {
      name += ', how are you today?';
      console.log(name);
    }

    greet();
    greet();
  }

  pureFunction() {
    function greet(name: string) {
      return `${name}, how are you today`;
    }

    console.log(greet('Sandra'));
    console.log(greet('Heinz'));
  }

  useDestructuring() {
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

    //object destructuring
    const father = {
      birth: new Date(),
      job: 'Dev Dude',
      children: [
        { name: 'David', age: 12 },
        { name: 'Soi', age: 7 },
      ],
    };

    const { birth, job } = father;
    console.log('birth:', birth);
    console.log('job:', job);
  }
}
