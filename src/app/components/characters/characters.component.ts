import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: any = [];
  info: any = {};
  selectedCharacter: any;
  displayModal: boolean = false;
  

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.getCharacters();
  }

  // getCharacters() {
  //   this.characterService.getCharacters().subscribe(data => {
  //     this.characters = data.results;
  //     this.info = data.info;

  //   });
  // }
  getCharacters() {
    this.characterService.getCharacters().subscribe(data => {
      this.characters = data;
      // this.info = data.info;
    });
  }

  openModal(character: any) {
    this.displayModal = true;
    this.selectedCharacter = {...character};
  }

  getColorImage(character: any) {
    let filter = '';
    if (character.status == "Dead") {
      filter = 'grayscale(100%)'
    }
    return filter;
  }

  getImage(character: any) {
    let img = character.image
    if (character.status == 'unknown') {
      img = './../../assets/images/unknown.png';
    }
    return img;
  }

}
