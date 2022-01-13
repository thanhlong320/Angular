import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user.model';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  user?:User

  getUser(): void {
    this.userService.getUser().subscribe(
      u => this.user = u
    )
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

}
