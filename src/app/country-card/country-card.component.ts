import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  countries: any;

  ngOnInit(): void {
    this.countryService.getData().subscribe((val: any) => {
      this.countries = val;
    });
  }
}
