import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:
    [
    	{
    		path: 'posts',
    		loadChildren: () => import('../pages/posts/posts.module').then(m => m.PostsPageModule)
    	},
    	{
    		path: 'recents',
    		loadChildren: () => import('../pages/recents/recents.module').then(m => m.RecentsPageModule)
    	},
    	{
    		path: '',
    		redirectTo: '/home/posts',
    		pathMatch: 'full'
    	}
    ]
  },
  {
  	path: '',
  	redirectTo: '/home/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
