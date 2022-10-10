import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title?: string
  @Input() role?: string
  @Input() locate?: string
  @Input() firstActivity?: string
  constructor() { }
  ngOnInit(): void {
  }

}
