import {Image} from "./image";

export class VoyageForm {

  id?:number
  destination?:string
  lattitude?:number
  longitude?:number
  type?:[]
  mainPicture?:Image
  nbStar?:number
  pictures?:Image[]


  constructor(id?: number, destination?: string, lattitude?: number, longitude?: number, type?: [], mainPicture?: Image, nbStar?: number,pictures?:Image[]) {
    this.id = id;
    this.destination = destination;
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.type = type;
    this.mainPicture = mainPicture;
    this.nbStar = nbStar;
    this.pictures = pictures
  }
}
