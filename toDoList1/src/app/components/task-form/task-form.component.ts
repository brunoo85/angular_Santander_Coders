import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  public formTask: FormGroup = this.formBuilder.group({
    title: ['',Validators.required],
    description: ['',Validators.required],
    date: ['',Validators.required],
    status: ['toDo',Validators.required],
    
  })

  @Output() addTask = new EventEmitter();

  constructor(private formBuilder: FormBuilder){}

  submitTask(){
    console.log(this.formTask.value);
    // this.addTask.emit(this.newTask);
    // this.newTask = new Task();
  }
}
