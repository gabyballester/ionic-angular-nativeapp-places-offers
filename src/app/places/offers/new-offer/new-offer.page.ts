import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {}

  onCreateOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }
}
