import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgOptimizedImage } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'pokemonInfo/:id', component: PokemonInfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    SearchPokemonComponent,
    PokemonInfoComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
