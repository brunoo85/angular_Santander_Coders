import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  public teste = false;

  constructor(private formBuilder: FormBuilder){}

  submitTask(){
    console.log(this.formTask.value);
    if(this.formTask.invalid) return;

    this.teste = true;
    
    this.addTask.emit(this.formTask.value);
    this.formTask.reset();
    // this.addTask.emit(this.newTask);
    // this.newTask = new Task();
  }
}
