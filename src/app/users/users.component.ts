import { Component, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/operator/startwith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

import { UsersModel } from '../model/users.model';
import { User } from '../model/users';

@Component({
  selector: 'users',
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  public users: Observable<User[]>;
  public isRequesting = false;
  private reloadUsers: EventEmitter<any> = new EventEmitter();

  constructor(private UsersModel: UsersModel){
    let initialSize = 25;
    this.users = this.reloadUsers
      .startWith(initialSize)
      .distinctUntilChanged()
      .do(_ => this.isRequesting = true)
      .flatMap(size => this.UsersModel.getCollection(size))
      .do(_ => this.isRequesting = false)
  }

  handleSizeChanged(size: number) {
    this.reloadUsers.emit(size);
  }
}
