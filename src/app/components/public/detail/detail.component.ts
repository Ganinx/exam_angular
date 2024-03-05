import {Component, OnInit} from '@angular/core';
import {Voyage} from "../../../models/voyage";
import {VoyageService} from "../../../services/voyage.service";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgForOf, NgIf} from "@angular/common";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    RouterModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  voyage?:Voyage
  isLoading:boolean = false
  src:SafeResourceUrl

  constructor(private voyageService:VoyageService,private activatedRoute:ActivatedRoute,private sanitizer:DomSanitizer) {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl('')
  }

  ngOnInit() {
    this.isLoading = true
    let id= parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
    this.voyageService.getOne(id).subscribe(data => {
        this.voyage = data;
        this.src =this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.voyage?.longitude},${this.voyage?.lattitude}&hl=es&z=14&output=embed`);
        this.isLoading =false
      console.log(data)
      }
    )
  }

}
