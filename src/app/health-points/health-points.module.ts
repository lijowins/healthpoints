import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule,  
  MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule,  
  MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatRippleModule,
  MatSelectModule, MatOptionModule, MatSlideToggleModule, MatDividerModule,
  MatSortModule, MatTableModule, ErrorStateMatcher, MatDialogModule, MatProgressSpinnerModule,
  ShowOnDirtyErrorStateMatcher, MatStepperModule, MatExpansionModule, MatListModule
 } from '@angular/material';
import { HealthPointsRoutingModule } from './health-points-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { TrackablesComponent } from './trackables/trackables.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ LoginComponent, LandingComponent, DashboardComponent, ToolbarComponent, FooterComponent, TrackablesComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,  
    MatGridListModule,
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,   
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSlideToggleModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule, 
    MatExpansionModule,
    MatDialogModule,
    MatDividerModule,
    MatRippleModule,
    HealthPointsRoutingModule,
    NgbModule,
    NgbCarouselModule,
    MatListModule,
    MatProgressSpinnerModule
  ],    
  exports: [  
    MatButtonModule,  
    MatMenuModule,  
    MatToolbarModule,  
    MatIconModule,  
    MatCardModule,   
    MatGridListModule, 
    MatFormFieldModule,  
    MatInputModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatRadioModule,  
    MatSelectModule,  
    MatOptionModule,  
    MatSortModule,
    MatTableModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatDividerModule,
    MatRippleModule,
    NgbModule,
    NgbCarouselModule
  ],  
  entryComponents: [
    
  ],
  providers: [  
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}  
  ], 
})
export class HealthPointsModule { }
