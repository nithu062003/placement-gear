import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssessmentPageRoutingModule } from './assessment-routing.module';

import { AssessmentPage } from './assessment.page';
import { QuestionInstructionComponent } from 'src/app/components/question-instruction/question-instruction.component'; 
import { QuestionTextComponent } from 'src/app/components/question-text/question-text.component';
import { QuestionChoicesComponent } from 'src/app/components/question-choices/question-choices.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssessmentPageRoutingModule
  ],
  declarations: [AssessmentPage, QuestionInstructionComponent, QuestionTextComponent, QuestionChoicesComponent]
})
export class AssessmentPageModule {}
