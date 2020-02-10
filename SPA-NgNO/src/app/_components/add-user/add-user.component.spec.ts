import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectService } from 'src/app/_services/project.service';
import { UserService } from 'src/app/_services/user.service';
import { TaskService } from 'src/app/_services/task.service';
import { FormsModule }   from '@angular/forms';
import { AddUserComponent } from './add-user.component';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
 import { RouterTestingModule } from '@angular/router/testing';
 import {fakeAsync, tick } from "@angular/core/testing";

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports: [
        FormsModule ,HttpClientTestingModule,HttpClientModule ,RouterTestingModule    //<----------make sure you have added this.
        ],
        providers: [ DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
    const start = Date.now();
    tick(100);
    const end = Date.now();
    expect(end - start).toBe(100);
  }));

  it('should create Add User Component', () => {
    expect(component).toBeTruthy();
  });

  it('should be created and call User Service', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
  it('Test Case should render label heading as Add User', () => {
    const fixture = TestBed.createComponent(AddUserComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Add User');
  });
  
});
