import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {VoyageForm} from "../../../models/voyage-form";
import {VoyageService} from "../../../services/voyage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Voyage} from "../../../models/voyage";

@Component({
  selector: 'app-edit',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf
    ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {


  isLoading: boolean = false;
  voyage?: Voyage;
  voyageForm: VoyageForm = new VoyageForm();
  types: string[] = ["Mer","Montagne","Campagne"]


  constructor(private voyageService: VoyageService,
              private activatedRoute: ActivatedRoute, private routerService: Router) {
  }

  ngOnInit(): void {
      let id= parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'))
        this.voyageService.getOne(id).subscribe(data => {
          this.voyage = data;
          this.voyageForm.mainPicture = data.mainPicture
          this.voyageForm.destination = data.destination
          this.voyageForm.pictures = data.pictures
          this.voyageForm.nbStar = data.nbStar
          this.voyageForm.lattitude = data.lattitude
          this.voyageForm.longitude = data.longitude
          this.voyageForm.type = data.type
          this.voyageForm.id = data.id
          this.isLoading = false;
        })
  }

  updateVoyage() {
    this.isLoading = true;
    console.log(this.voyageForm)
    this.voyageService.edit(this.voyageForm).subscribe(data => {
      this.routerService.navigate(["/admin"]);
      this.isLoading = false;
    })
  }


  onMainPictureChange(newValue: string) {
    if (this.voyageForm.mainPicture === undefined) {
      this.voyageForm.mainPicture = { src: newValue, alt: "" };
    } else {
      this.voyageForm.mainPicture.src = newValue;
    }
  }


  onMainAltPictureChange(newValue: string) {
    if (this.voyageForm.mainPicture === undefined) {
      this.voyageForm.mainPicture = { src: "" , alt: newValue };
    } else {
      this.voyageForm.mainPicture.alt = newValue;
    }
  }
  addPicture() {
    if (this.voyageForm) {
      if (this.voyageForm.pictures) {
        this.voyageForm.pictures.push({ src: '', alt: '' });
        console.log('oui')
      }
    }
  }



}
