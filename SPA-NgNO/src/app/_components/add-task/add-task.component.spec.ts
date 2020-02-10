import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { AddTaskComponent } from './add-task.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
 import { RouterTestingModule } from '@angular/router/testing';
 import { DatePipe } from '@angular/common';
 import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 import { ProjectService } from 'src/app/_services/project.service';
import { UserService } from 'src/app/_services/user.service';
import { TaskService } from 'src/app/_services/task.service';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ],
        imports: [
             FormsModule,HttpClientTestingModule,HttpClientModule,RouterTestingModule      //<----------make sure you have added this.
            
           ],
           providers:[ DatePipe],
             schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Add Task Component', () => {
    expect(component).toBeTruthy();
  });
  it('should render form title in a div tag', () => {
    const fixture = TestBed.createComponent(AddTaskComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Task');
  });
  it('should be created and call ProjectService', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });

  it('should be created and call Task Service', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

  it('should be created and call User Service', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
