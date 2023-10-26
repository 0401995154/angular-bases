import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule],

  exports: [MainComponent],
})
export class DbzModule {}
