import { Component, OnInit } from '@angular/core';
import { ApiResponse, Character } from 'src/app/models/api-response';
import { CharactersService } from 'src/app/services/characters.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faListDots } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  private apiResponse?: ApiResponse;
  characters: any[] = [];
  status: boolean = false;
  toggle: boolean = true;

  faTableCells = faTableCells;
  faTableList = faListDots;

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.status = true;
    const response = this.characterService
      .getAllCharacters()
      .subscribe((api) => {
        this.apiResponse! = api;
        this.characters = this.apiResponse!.data.results;
        this.status = false;
        console.log(this.characters);
      });
  }

  toggleView(change: MatButtonToggleChange) {
    this.toggle = change.value;
  }
}
