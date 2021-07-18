import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place; // receiving props

  constructor() { }

  ngOnInit() {
    console.log(this.selectedPlace);
  }

}
