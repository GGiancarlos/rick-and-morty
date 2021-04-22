import { element } from 'protractor';
import { CharacterModel } from './../../models/character.model';
import { FilterService } from './../../services/filter.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  loading: boolean = false;
  characters: CharacterModel[] = [];

  btnSaveDisabled: boolean = true;
  idValues: string = '';

  isInputValid: boolean = false;
  form: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private filterService: FilterService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      number: ['', [Validators.required, Validators.pattern("[0-9]{1,3}(\,[0-9]{0,3})*")]]
    })
  }

  ngOnInit() {
  }

  inputValidation(values: string) {
    let arr = values.split(',');

    if (arr.length == 1 && arr[0] == "") {
      this.toastr.warning('You must enter an ID at least', 'Warning');
      return false;
    }
    else if (arr.length > 10) {
      this.toastr.warning('You must enter a maximum of 10 IDs', 'Warning');
      return false;
    }
    
    return true;
  }

  searchCharacters(values: string) {
    let isInputValid = this.inputValidation(values);
    if (isInputValid) {
      this.idValues = values;
      this.loading = true;
      this.filterService.filterCharacters(this.idValues).subscribe((data: any) => {
        if (data.length == undefined) {
          this.characters = [data]
          this.loading = false;
          this.btnSaveDisabled = false;
        } else {
          this.characters = data;
          this.loading = false;
          this.btnSaveDisabled = false;
        }
      });
    }
  }

  saveCharacters() {
    let character: CharacterModel = {
      id: 0,
      name: "",
      status: "",
      species: "",
      image: "",
      gender: ""
    };

    this.characters.forEach(element => {
      character.id = element.id;
      character.name = element.name;
      character.status = element.status;
      character.species = element.species;
      character.image = element.image;
      character.gender = element.gender;

      this.filterService.saveCharacter(character).subscribe(data => {
        console.log(`character ${data.name} created!`);
      });
    });

    this.toastr.success('Characters saved successfully', 'Characters Saved');
  }

  get f() {
    return this.form.controls;
  }

}
