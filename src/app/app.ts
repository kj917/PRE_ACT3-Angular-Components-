import { Component } from '@angular/core';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, Skills, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  fullName = 'Kurt John M. Cabrera';
  location = 'Angeles City, Pampanga';
  email = 'kmcabrera2@student.hau.edu.ph';
  phone = '0919 375 3583';
  profile = 'I am an Information Technology student at Holy Angel University passionate about full-stack web development, UI/UX design, and building responsive web applications.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React & Node.js',
    'MongoDB'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Figma UI/UX', level: 'Advanced' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
