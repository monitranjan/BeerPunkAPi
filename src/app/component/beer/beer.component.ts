import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/app.service';
import { Beer } from '../../shared/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  beers: Beer[] = [];
  error = null;
  imageUrl: any = 'https://i.ibb.co/fDWsn3G/buck.jpg';
  constructor(private beersService: AppService) { }

  ngOnInit() {
    this.getRandomBeer();
  }

  getRandomBeer() {
    this.beersService.getRandomBeer().subscribe(
      (beer) => {
        this.beers = beer;
        console.log(beer);
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  getNonAlcoholicBeer() {
    this.beersService.getNonAlcoholicBeer().subscribe(
      (beer: Beer[]) => {
        this.beers = [];
        let randomBeerIndex = Math.floor(Math.random() * beer.length);
        this.beers.push(beer[randomBeerIndex]);
      },
      (error) => {
        this.error = error.message;
      }
    );
  }
}

function typeOf(randomBeer: Beer): any {
  throw new Error('Function not implemented.');
}
