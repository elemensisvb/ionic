import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloglistPage } from './bloglist';
import { FlashCardComponent } from '../../components/flash-card/flash-card';

@NgModule({
  declarations: [
    BloglistPage,
    FlashCardComponent
  ],
  imports: [
    IonicPageModule.forChild(BloglistPage),
  ],

})
export class BloglistPageModule {}
