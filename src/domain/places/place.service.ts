// import {
//   HttpClient
//   //,
//   //Response
// } from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Place
} from './place';
// import 'rxjs/add/operator/map';

@Injectable()
export class PlaceService {
  constructor() {
    //private http: HttpClient
  }
  getPlaces(): Place[] {
    return [{
        _id: 0,
        name: "thalankuppam_pier",
        title: "Thalankuppam Pier",
        location: "Ennore",
        city: "Chennai",
        img: "http://www.listchallenges.com/f/items/7130bc16-cbc7-4f73-ba99-18270d93f030.jpg",
        category: "Beach",
        description: "Thalankuppam is a small fishing hamlet, at Ennore, the extreme north of Chennai city. The Thalankuppam River, also called as the Kourtaliayaar, Mogathwaram, meets the sea this place.  Around 200 years ago, this is the place the British would come to, sailing 17 kilo meters from Fort St. George and buy their lord’s favorite here. Even today, people flock in the early hours to buy loads of fresh fish. It has also won its place for climax shots in a few movies."
      },
      {
        _id: 1,
        name: "haunted_house",
        title: "Haunted house",
        location: "Valmiki nagar",
        city: "Chennai",
        category: "Arts",
        img: "http://www.listchallenges.com/f/items/a8f7129d-c50f-470b-ab47-4607168dc9e8.jpg",
        description: "Take this instance. In the serene suburb of Thiruvanmiyur, the apartment No F-2 on 3, Seward Road in Valmiki Nagar, stands out—it has the dubious distinction of being a bhoot bangla. It is said that the owner’s daughter committed suicide there some years ago, and that her spirit haunts the place."
      },
      {
        _id: 2,
        name: "pulicat_lake",
        title: "Pulicat Lake",
        location: "Coromandal coast",
        city: "Chennai",
        img: "http://www.listchallenges.com/f/items/f8cda615-bdd7-49a8-9992-ea0dfd7c5241.jpg",
        category: "Lake",
        description: "Pulicat Lake formerly Pralaya Kaveri is the second largest brackish water lake or lagoon in India, after Chilika Lake. It straddles the border of Andhra Pradesh and Tamil Nadu states with over 40% of it in Andhra Pradesh and 60% in Tamil Nadu situated on the Coromandal Coast in South India. The lake encompasses the Pulicat Lake Bird Sanctuary. The barrier island of Sriharikota separates the lake from the Bay of Bengal and is home to the Satish Dhawan Space Centre."
      }
    ];
  }

  getRecommendations(){
    return;
    // return an observable
    // return this.http.get('https://ihangout.herokuapp.com/GetRecommendations')
    // .map( (responseData) => {
    //   return responseData.json();
    // })
    // .map((places: Array<Place>) => {
    //   return places;
    // });
    
  }

}
