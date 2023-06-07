import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse, Character } from 'src/app/models/api-response';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  private apiResponse?: ApiResponse;
  character?: Character;
  status: boolean = false;
  showDetails: boolean = false;
  labelDetails: string = 'Show All Details';

  constructor(
    private characterService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.status = true;
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    const response = this.characterService
      .getCharacterById(identifier!)
      .subscribe((api) => {
        this.apiResponse! = api;
        this.character = this.apiResponse!.data.results[0];
        this.status = false;
        console.log(this.character);
      });
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ToggleDetails() {
    this.showDetails = !this.showDetails;
    if (this.showDetails) {
      this.labelDetails = 'Hide Details';
    } else {
      this.labelDetails = 'Show All Details';
    }
  }
}
