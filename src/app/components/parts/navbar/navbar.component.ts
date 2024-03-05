import { Component } from '@angular/core';
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgbCollapse,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isToggle: boolean = false


  constructor(private router:Router) {
  }
  logout() {
    window.localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

}
