import { Component } from '@angular/core';
import { User } from './user-model';
import { usersdata } from './users-data';

@Component({
  selector: 'app-material-async',
  templateUrl: './material-async.component.html',
  styleUrls: ['./material-async.component.scss'],
})
export class MaterialAsyncComponent {
  displayedColumns = ['email', 'created', 'roles'];
  users: User[] = usersdata;
}
