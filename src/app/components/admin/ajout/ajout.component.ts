import { Component } from '@angular/core';
import {VoyageForm} from "../../../models/voyage-form";
import {VoyageService} from "../../../services/voyage.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Voyage} from "../../../models/voyage";
import {elementAt} from "rxjs";


@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {

  isLoading = false;



  voyage:VoyageForm = new VoyageForm();
  types: string[] = ["Mer","Montagne","Campagne"]
  stringError?: string;


  constructor(private voyageService: VoyageService, private router: Router) {
  }

  ajoutVoyage() {
    this.isLoading = true
    console.log(this.voyage)
    this.voyageService.add(this.voyage).subscribe(data => {
      console.log(this.voyage)
      this.router.navigate(["/admin"]);
    }, error => {

    })
  }

  onMainPictureChange(newValue: string) {
    if (this.voyage.mainPicture === undefined) {
      this.voyage.mainPicture = { src: newValue, alt: "" };
    } else {
      this.voyage.mainPicture.src = newValue;
    }
  }

  onMainAltPictureChange(newValue: string) {
    if (this.voyage.mainPicture === undefined) {
      this.voyage.mainPicture = { src: "" , alt: newValue };
    } else {
      this.voyage.mainPicture.alt = newValue;
    }
  }

  addPicture() {
    if (this.voyage) {
      if (!this.voyage.pictures) {
        this.voyage.pictures = [];
      }
      this.voyage.pictures.push({ src: '', alt: '' });
    }
  }

}
