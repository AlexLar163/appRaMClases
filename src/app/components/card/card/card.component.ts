import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  dataNext: any;
  dataPersonajes: any;
  constructor(private api: GetDataService) {}

  ngOnInit(): void {
    this.api.getCharacter('/character').subscribe((data) => {
      this.dataNext = Object.values(data)[0];
      this.dataPersonajes = Object.values(data)[1];
      console.log(this.dataPersonajes);
    });
    // console.log(
    //   this.api
    //     .getCharacter('/character')
    //     .subscribe((data) => console.log(Object.values(data)))
    // );
    // console.log(
    //   this.api
    //     .getCharacter('/location')
    //     .subscribe((data) => console.log(Object.values(data)))
    // );
    // console.log(
    //   this.api
    //     .getCharacter('/episode')
    //     .subscribe((data) => console.log(Object.values(data)))
    // );
  }
}
