import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Componentes
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EmpresaListComponent } from './components/empresa-list/empresa-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

// Servicios
import { EmpresaService } from './services/empresa.service';
import { SimpleGlobal } from 'ng2-simple-global';
// import { AuthService } from './services/auth.service';
import { AuthService } from './auth/auth.service';


// Guards
import { AuthGuard } from './guards/auth.guard';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { CategoriaService } from './services/categoria.service';
import { CategoriaListComponent } from './components/categoria-list/categoria-list.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NavigationComponent } from './common/navigation/navigation.component';
import { AppService } from './common/app.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '@auth/auth.module';
import { AdminModule } from '@admin/admin.module';










@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EmpresaListComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AdminPageComponent,
    NotFoundPageComponent,
    CategoriaComponent,
    CategoriaListComponent,
    NavigationComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    AuthRoutingModule,
    AngularFirestoreModule,
    SharedModule,
    AuthModule,
    AdminModule
    // ToastrModule.forRoot()
  ],
  providers: [
    EmpresaService,
    AuthService,
    AuthGuard,
    FlashMessagesService,
    CategoriaService,
    AppService,
    SimpleGlobal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
