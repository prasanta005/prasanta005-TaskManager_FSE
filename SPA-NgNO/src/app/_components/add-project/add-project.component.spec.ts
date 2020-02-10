import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { AddProjectComponent } from './add-project.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
 import { RouterTestingModule } from '@angular/router/testing';
 import { ProjectService } from 'src/app/_services/project.service';
 import { UserService } from 'src/app/_services/user.service';
 import { TaskService } from 'src/app/_services/task.service';
 import {fakeAsync, tick } from "@angular/core/testing";
describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectComponent ],
      imports: [
        FormsModule ,HttpClientTestingModule,HttpClientModule ,RouterTestingModule    //<----------make sure you have added this.
        ],
        providers: [ DatePipe]
         
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Add Project Component should created', () => {
    expect(component).toBeTruthy();
  });
  it('Test Case should render form heading as Add Project', () => {
    const fixture = TestBed.createComponent(AddProjectComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('Add Project');
  });
  it('Test Case should render label heading as Project', () => {
    const fixture = TestBed.createComponent(AddProjectComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('td').textContent).toContain('Project');
  });

  it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
    const start = Date.now();
    tick(100);
    const end = Date.now();
    expect(end - start).toBe(100);
  }));


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
