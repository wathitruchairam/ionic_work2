import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TwoPage } from '../pages/two/two';
import { DataPage } from '../pages/data/data';
import { LoginPage } from '../pages/login/login';
import { StoragePage } from '../pages/storage/storage';
import { IonicStorageModule } from '@ionic/storage';
import { ShowPage } from '../pages/show/show';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TwoPage,
    DataPage,
    LoginPage,
    StoragePage,
    ShowPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TwoPage,
    DataPage,
    LoginPage,
    StoragePage,
    ShowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
