import { TrainService } from './../service/train-service.service';
import { Component, OnInit } from '@angular/core';
import { Wagon } from '../service/wagon';

@Component({
  selector: 'app-list-wagon',
  templateUrl: './list-wagon.component.html',
  styleUrls: ['./list-wagon.component.css']
})
export class ListWagonComponent implements OnInit {

  private _listWagons: Wagon[];
  constructor(private trainService: TrainService) {}

  ngOnInit(): void {
    this.trainService.listWagons().subscribe((data: Wagon[]) => {
      this._listWagons = data;
    });
  }
  public get listWagons(): Wagon[] {
    return this._listWagons;
  }
}
