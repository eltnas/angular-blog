import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoSrc:string = ""
  photoAlt:string = ""
  contentTitle:string = ""
  contentDesc:string = ""
  private id:string | null = "0"


  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
          this.id = value.get("id")
        )
        this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter( article => article.Id == id )[0]

      this.contentTitle = result.title
      this.photoSrc = result.photo
      this.photoAlt = result.alt
      this.contentDesc = result.desc
      console.log(result.photo)

  }

}
