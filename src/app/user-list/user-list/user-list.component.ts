import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../entities/user.entity';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule], // Añade CommonModule aquí
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}

