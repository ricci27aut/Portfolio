import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ProjectDitails } from './components/project-ditails/project-ditails';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'projekts/:id', component: ProjectDitails }
];
