import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

@Component({
  standalone: true,
  selector: 'test',
  templateUrl: './trainig.component.html',
  styleUrls: ['./trainig.component.scss'],
  imports: [CommonModule],
})
export class TestComponent implements OnInit {
  url = 'https://api.sampleapis.com/simpsons/products';
  productos$: any;

  constructor() {
    this.productos$ = fromFetch(this.url).pipe();
  }

  ngOnInit(): void {
    this.productos$.subscribe()

    console.log(this.productos$)
  }
}

 /* showProducts(data: Array<any>) {
    console.log("set observer..", data)
    this.productos$ = of(data)
  }
  async getData(url: string) {
    console.log('calling');
    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => this.showProducts(data));
  }*/