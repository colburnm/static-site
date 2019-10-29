import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PotosComponent } from '../media/photos/photos.component';
import { AlbumsComponent } from '../media/albums/albums.component';

const appRoutes: Routes = [
	{path: 'photos', components: PhotoComponent}.
	{path: 'albums', components: AlbumsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
	PhotosComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
	NgbModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
