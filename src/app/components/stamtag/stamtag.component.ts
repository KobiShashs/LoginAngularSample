import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stamtag',
  templateUrl: './stamtag.component.html',
  styleUrls: ['./stamtag.component.css']
})
export class StamtagComponent implements OnInit {

  public myID: number;

  public constructor(private activatedRoute: ActivatedRoute) {
      this.myID = Number(this.activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
  }

}
