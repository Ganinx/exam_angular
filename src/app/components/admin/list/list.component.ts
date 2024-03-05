import {Component, OnInit} from '@angular/core';
import {Voyage} from "../../../models/voyage";
import {VoyageService} from "../../../services/voyage.service";
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
import {RouterLink} from "@angular/router";
import {DeleteConfirmService} from "../../../services/delete-confirm.service";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-list',
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
    RouterLink
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  isLoading: boolean = false
  voyages?: Voyage[]



  constructor(private voyageService:VoyageService,private confirmSercice: DeleteConfirmService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.isLoading = true
    this.voyageService.getAll().subscribe(data=>{
        this.voyages = data
        this.isLoading = false
      }
    )
  }

  deleteEvent(voyage:Voyage) {
    this.isLoading = true;
    this.confirmSercice
      .confirm("Veuillez confirmer",
        "Action irrémédiable" ).then(res => {
      if(res){
        this.voyageService.delete(voyage).subscribe(data => {
          this.ngOnInit();
          this.isLoading = false;
          this.toastr.success("voyage supprimé")
        })
      }else{
        this.ngOnInit()
      }
    });
  }

}
