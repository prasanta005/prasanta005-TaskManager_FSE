import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { ViewTaskComponent } from './view-task.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
 import { RouterTestingModule } from '@angular/router/testing';
 import { DatePipe } from '@angular/common';
 import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
 import { ProjectService } from 'src/app/_services/project.service';
 import {fakeAsync, tick } from "@angular/core/testing";
 import { TaskService } from 'src/app/_services/task.service';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskComponent ],
       imports: [
             FormsModule ,HttpClientTestingModule,HttpClientModule ,RouterTestingModule    //<----------make sure you have added this.
                        ],
            providers:[ DatePipe],
              schemas: [ CUSTOM_ELEMENTS_SCHEMA ]            
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('View Component should created', () => {
    expect(component).toBeTruthy();
  });

  it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
    const start = Date.now();
    tick(100);
    const end = Date.now();
    expect(end - start).toBe(100);
  }));

  it('should be created and call Task Service', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
  it('Test Case should render label heading as Task', () => {
    const fixture = TestBed.createComponent(ViewTaskComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('td').textContent).toContain('Task');
  });

});
