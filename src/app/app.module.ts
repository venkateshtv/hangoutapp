import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../features/home/home';
import { ListPage } from '../features/list/list';
import { ToolBar } from '../features/toolbar/toolbar.component';
import { SearchComponent } from '../features/search/search.component';
import { DetailsComponent } from '../features/details/details.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ToolBar,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ToolBar,
    SearchComponent,
    DetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
