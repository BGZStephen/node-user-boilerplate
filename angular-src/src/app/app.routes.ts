import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

const APP_ROUTES: Routes = [
  {path: "", component: LoginRegisterComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
