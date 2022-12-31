import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{ path: 'landingpage', component: LandingpageComponent },
	{ path: 'aboutme', component: AboutComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '', redirectTo: '/landingpage', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
