import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../../shared/app.service';
import { Beer } from '../../shared/beer.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  beers: Beer[] = [];
  type: string = 'by Name';
  error: null;
  constructor(private beersService: AppService) { }

  searchBeer(searchForm: NgForm): void {
    if (searchForm.value.type === 'by Name') {
      this.searchByName(searchForm.value.searchBeer);
    } else if (searchForm.value.type === 'by description') {
      this.searchByDescription(searchForm.value.searchBeer);
    } else {
      alert('Please select correct Options');
    }
  }

  private searchByDescription(value: any) {
    this.beersService.getBeerByName(value).subscribe(
      (beer) => {
        this.beers = beer;
        if (!this.beers.length){
          alert("No record Found");
        }
        console.log(beer);
      },
      (error) => {
        this.error = error.message;
      }
    );
    
  }

  private searchByName(value: string) {
    this.beersService.getBeerBydescription(value).subscribe(
      (beer) => {
        this.beers = beer;
        if (!this.beers.length){
          alert("No record Found");
        }
        console.log(beer);
      },
      (error) => {
        this.error = error.message;
      }
    );
   
  }
}
