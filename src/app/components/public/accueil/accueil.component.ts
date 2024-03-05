import {Component, OnInit} from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {VoyageService} from "../../../services/voyage.service";
import {Voyage} from "../../../models/voyage";
import {CommonModule, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    MatProgressSpinner,
    CommonModule,
    MatCardModule, MatButtonModule, RouterLink
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{

  isLoading: boolean = false
  voyages?: Voyage[]



  constructor(private voyageService:VoyageService) {
  }

  ngOnInit() {
    this.isLoading = true
    this.voyageService.getAll().subscribe(data=>{
        this.voyages = data
        this.isLoading = false
    }
    )
  }


}
