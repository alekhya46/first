import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
componentPlaces;
  constructor(private data : PlacesService) { }

  ngOnInit(): void {
    this.componentPlaces =this.data.places;
  }

}
