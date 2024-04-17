import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path:'' , redirectTo:'/todo', pathMatch:'full'},
  {path:'home', component: HomeComponent ,title:'home'},
  {path:'todo' , component: TodoComponent, title:'todo'},
  {path:'todo/:id', component: TodoDetailsComponent, title: 'to do details'},
  {path:'contact', component: ContactComponent, title: 'contact'},
  {path:'about', component: AboutComponent, title:'about'},
  {path:'**' , component: NotFoundComponentComponent, title:'not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
