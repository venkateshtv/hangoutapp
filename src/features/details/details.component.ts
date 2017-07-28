import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'details.view.html',
})
export class DetailsComponent {
    detailsItem:any = {};
    constructor(public navParams: NavParams){
        this.detailsItem = this.navParams.get('place');
    }
}