import { Component, Input } from '@angular/core';

import { User } from '../../model/users';

@Component({
  selector: 'user-details',
  styleUrls: ['./user-details.component.css'],
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  @Input() user: User;
}
