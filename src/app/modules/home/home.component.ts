import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models';
import { ExperienceService } from 'src/app/services/experience.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  experiences: Experience[] = []
  
  constructor(private experienceService: ExperienceService){ }
  getExperiences(): void {
    this.experiences = this.experienceService.getExperiences()
    
  }
  ngOnInit(): void {
    this.getExperiences()
  }

}
