import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ProjectDitails } from './components/project-ditails/project-ditails';
import { LegalNotice } from './components/shared/legal-notice/legal-notice';
import { PrivacyPolicy } from './components/shared/privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: LandingPage },
    { path: 'projekts/:id', component: ProjectDitails },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'privacy-policy', component: PrivacyPolicy }
];
