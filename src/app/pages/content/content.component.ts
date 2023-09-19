import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { database } from '../../data/database';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  id: string | null = ''
  title = ''
  cover = ''
  description = ''

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  private setValuesToComponent(id: string | null) {
    const result = database.filter( article => article.id.toString() == id )[0]

    if (!result) {
      this.title = 'Error 404'
    }
    else {
      this.title = result.title
      this.cover = result.cover
      this.description = result.description
    }
  }
}
