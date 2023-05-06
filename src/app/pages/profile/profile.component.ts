import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user?: User;

  userModifyForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private location: Location,
    private authService: AuthService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.userModifyForm.get('email')?.setValue(this.user?.email);
      this.userModifyForm.get('username')?.setValue(this.user?.username);
      this.userModifyForm.get('name.firstname')?.setValue(this.user?.name.firstname);
      this.userModifyForm.get('name.lastname')?.setValue(this.user?.name.lastname);
    });
  }

  onSubmit() {
    if(this.userModifyForm.valid) {
      const updateUser: User = {
        id: this.user?.id as string,
        email: this.userModifyForm.get('email')?.value,
        username: this.userModifyForm.get('username')?.value,
        name: {
          firstname: this.userModifyForm.get('name.firstname')?.value,
          lastname: this.userModifyForm.get('name.lastname')?.value
        }
      }
      console.log(updateUser);
      this.userService.update(updateUser).then(_ => {
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.log(error);
      });
  }
  }

  goBack() {
    this.location.back();
  }

}
