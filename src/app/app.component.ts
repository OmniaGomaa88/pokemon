import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.Component.html',
  styles: []
})
export class AppComponent  implements OnInit{
  pokemonList :Pokemon[]= POKEMONS


  ngOnInit():void{
console.table(this.pokemonList)

  }
  //void c'est un type de donner pour dire ce méthod ne renvoi rien

  selectPokemen(event:MouseEvent ){
    const index : number =+ (event.target as HTMLInputElement).value
    console.log(`the name of pokement is ${this.pokemonList[index].name}`)

  }
}
