import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HorizontalCards } from './horizontalcards/horizontalcards.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [BrowserModule, IonicModule],
    declarations:[ HorizontalCards ],
    exports: [HorizontalCards]
})

export class ComponentModule {

}
