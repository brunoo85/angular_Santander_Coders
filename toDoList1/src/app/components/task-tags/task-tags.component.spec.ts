import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTagsComponent } from './task-tags.component';

describe('TaskTagsComponent', () => {
  let component: TaskTagsComponent;
  let fixture: ComponentFixture<TaskTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskTagsComponent]
    });
    fixture = TestBed.createComponent(TaskTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
