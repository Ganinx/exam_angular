import {Image} from "./image";


export class Voyage {

  id?:number
  destination?:string
  lattitude?:number
  longitude?:number
  type?:[]
  mainPicture?:Image
  pictures?:Image[]
  nbStar?:number


  constructor(id: number, destination: string, lattitude: number, longitude: number, type: [], mainPicture: Image, pictures: Image[], nbStar: number) {
    this.id = id;
    this.destination = destination;
    this.lattitude = lattitude;
    this.longitude = longitude;
    this.type = type;
    this.mainPicture = mainPicture;
    this.pictures = pictures;
    this.nbStar = nbStar;
  }
}
