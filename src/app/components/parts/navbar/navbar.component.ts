import { Component } from '@angular/core';
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgbCollapse
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isToggle: boolean = false

}
