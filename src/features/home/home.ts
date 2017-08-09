import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsComponent } from '../details/details.component';
// import { PlaceService } from '../../domain/places/place.service';
import { Place } from '../../domain/places/place';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  recommendedPlaces:Place[];
  recommended = [
  {
    "name": "thalankuppam_pier",
    "title": "Thalankuppam Pier",
    "location": "Ennore",
    "city": "Chennai",
    "img": "http://www.listchallenges.com/f/items/7130bc16-cbc7-4f73-ba99-18270d93f030.jpg",
    "category": "Beach",
    "Description": "Thalankuppam is a small fishing hamlet, at Ennore, the extreme north of Chennai city. The Thalankuppam River, also called as the Kourtaliayaar, Mogathwaram, meets the sea this place.  Around 200 years ago, this is the place the British would come to, sailing 17 kilo meters from Fort St. George and buy their lord’s favorite here. Even today, people flock in the early hours to buy loads of fresh fish. It has also won its place for climax shots in a few movies."
  },
  {
    "name": "haunted_house",
    "title": "Haunted house",
    "location": "Valmiki nagar",
    "city": "Chennai",
    "img": "http://www.listchallenges.com/f/items/a8f7129d-c50f-470b-ab47-4607168dc9e8.jpg",
    "Description": "Take this instance. In the serene suburb of Thiruvanmiyur, the apartment No F-2 on 3, Seward Road in Valmiki Nagar, stands out—it has the dubious distinction of being a bhoot bangla. It is said that the owner’s daughter committed suicide there some years ago, and that her spirit haunts the place."
  },
   {
    "name": "pulicat_lake",
    "title": "Pulicat Lake",
    "location": "Coromandal coast",
    "city":"Chennai",
    "img": "http://www.listchallenges.com/f/items/f8cda615-bdd7-49a8-9992-ea0dfd7c5241.jpg",
    "category": "Lake",
    "Description": "Pulicat Lake formerly Pralaya Kaveri is the second largest brackish water lake or lagoon in India, after Chilika Lake. It straddles the border of Andhra Pradesh and Tamil Nadu states with over 40% of it in Andhra Pradesh and 60% in Tamil Nadu situated on the Coromandal Coast in South India. The lake encompasses the Pulicat Lake Bird Sanctuary. The barrier island of Sriharikota separates the lake from the Bay of Bengal and is home to the Satish Dhawan Space Centre."
  }
];
foods = [
  {
    "name": "rathna_cafe",
    "title": "Rathna Cafe",
    "location": "Triplicane",
    "city": "Chennai",
    "img": "http://www.listchallenges.com/f/items/e6530f66-e3f9-4c3a-95d4-23748c4177c1.jpg",
    "category": "Restaurants",
    "Description": "Ratna Cafe is a South Indian fast food restaurant chain and F&B services firm, headquartered in Chennai, India. It operates restaurants and food courts in Tamil Nadu. Originally named Ratna Cafe, it was re-branded as Triplicane Ratna Cafe after the brand started expanding to various parts of Chennai City. Ratna Cafe is one of the longest standing restaurants in Chennai, popular for its sambar-idly and unique taste that has been maintained over the years"
  },
  {
    "name": "balaji_sandwich_stall",
    "title": "Balaji Sandwich Stall",
    "location": "Nungambakkam",
    "city": "Chennai",
    "img": "http://www.listchallenges.com/f/items/59f3ad9e-6c23-4bc6-9a28-0d599ce6879a.jpg",
    "category": "Snacks",
    "Description": "Great place for a quick bite over a chat with friends"
  },
  {
    "name": "amadora_gourmet",
    "title": "Amadora Gourmet Icecream",
    "location": "Nungambakkam",
    "city": "Chennai",
    "img": "http://www.listchallenges.com/f/items/b24758e5-a3e6-4c6e-bdad-0cd6bdf14b3a.jpg",
    "category": "Ice cream parlor",
    "Description": "Amadora is all about gourmet stuff and freshly baked warm goodies and icecreams and sorbets "
  }
];

  constructor(public navCtrl: NavController) {
    //,private placeService: PlaceService
    // placeService.getRecommendations().subscribe(data => this.recommendedPlaces = data);
  } 
  public gotoDetails(place){
    this.navCtrl.push(DetailsComponent,{place:place});
  }

}
