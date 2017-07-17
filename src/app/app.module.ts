import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdIconModule, MdIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public mdIconRegistry: MdIconRegistry
  ) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
