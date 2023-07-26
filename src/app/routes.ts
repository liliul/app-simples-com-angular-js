import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalhesDoComponente } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetalhesDoComponente,
      title: 'Home details'
    }
  ];
  
  export default routeConfig;