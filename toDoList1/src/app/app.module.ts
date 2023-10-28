import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskFiltroComponent } from './components/task-filtro/task-filtro.component';
import { DateGreaterThanTodayDirective } from './directives/date-greater-than-today.directive';
import { TaskTagsComponent } from './components/task-tags/task-tags.component';
import { TaskLogComponent } from './components/task-log/task-log.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskFiltroComponent,
    DateGreaterThanTodayDirective,
    TaskTagsComponent,
    TaskLogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
