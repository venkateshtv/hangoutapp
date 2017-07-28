import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'tool-bar',
    templateUrl: 'toolbar.view.html'
})

export class ToolBar {
    constructor (public navCtrl: NavController){

    }
    public gotoSearch(){
        this.navCtrl.push(SearchComponent,{});        
    }
}