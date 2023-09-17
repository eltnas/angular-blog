import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  altCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDesc:string = ""
  @Input()
  Id:string = "0"


  constructor() { }

  ngOnInit(): void {
      
  }

}
