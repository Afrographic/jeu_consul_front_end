
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { Title } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CalendarComponent } from './views/components/calendar/calendar.component';
import { ReminderComponent } from './views/components/reminder/reminder.component';


@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DashboardComponent,
    CalendarComponent,
    ReminderComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [
    Title,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

