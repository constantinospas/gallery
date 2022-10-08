import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)

  },
  {
    path: 'favorites', loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
  },

  { path: 'photos/:id', component: PhotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
