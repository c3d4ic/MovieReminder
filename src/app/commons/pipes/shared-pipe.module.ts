import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImagePipe } from './image/image.pipe';

@NgModule({
  declarations: [ImagePipe],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ImagePipe]
})
export class SharedPipesModule { }
