import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models';
import { ExperienceService } from 'src/app/services/experience.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  register = false
  experiences: Experience[] = []
  experienceForm = new FormGroup({
    rol: new FormControl(''),
    company: new FormControl(''),
    description: new FormControl('')
  });
  constructor(private experienceService: ExperienceService){ }
  getExperiences(): void {
    this.experiences = this.experienceService.getExperiences()
    
  }
  showRegister(inp: boolean) {
    console.log(inp)
    this.register = inp
  }
  ngOnInit(): void {
    this.getExperiences()
    
  }

}
