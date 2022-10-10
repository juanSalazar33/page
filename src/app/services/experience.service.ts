import { Injectable } from '@angular/core';
import { experiences } from '../data';
import { Experience } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiencesList: Experience[] = experiences
  
  getExperiences(): Experience[] {
    return this.experiencesList;
  }
  constructor() { }
}
