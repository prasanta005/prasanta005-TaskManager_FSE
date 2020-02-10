(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/add-project/add-project.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/_components/add-project/add-project.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/add-project/add-project.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/add-project/add-project.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <form #projectForm=\"ngForm\" (ngSubmit)=\"submit(projectForm)\">\n   <div >\n      <div class=\"panel panel-primary\">\n         <div class=\"panel-heading\">Add Project</div>\n         <div class=\"panel-body\">\n            <table>\n               <tr>\n                  <td><label for=\"txtuserFName\" class=\"control-label\">Project: &nbsp;&nbsp;&nbsp;</label></td>\n                  <td colspan=\"4\">\n                     <input type=\"text\" class=\"form-control\" id=\"txtuserFName\" name=\"ProjectName\" [(ngModel)]=\"projectData.ProjectName\" #userFName=\"ngModel\"\n                     required>\n                  </td>\n               </tr>\n               <br/>\n               <tr>\n                  <td></td>\n                  <td>\n                     <input type=\"checkbox\" name=\"date\" value=\"1\" checked=\"checked\"> Set Start & End date &nbsp;&nbsp;\n                  </td>\n                  <td>\n                     <input required class=\"form-control\" type=\"date\" value=\"\" id=\"example-date-input\" #StartDate=\"ngModel\" name=\"StartDate\" [(ngModel)]=\"projectData.StartDate\">\n                  </td>\n                  <td>\n                     &nbsp;&nbsp;\n                  </td>\n                  <td>\n                     <input required class=\"form-control\" type=\"date\" value=\"\" id=\"example-date-input\" #EndDate=\"ngModel\" name=\"EndDate\" [(ngModel)]=\"projectData.EndDate\">\n                  </td>\n               </tr>\n               <tr>\n                  <td>\n                  </td>\n                  <td colspan=\"4\">0\n                  </td>\n                  <td>\n                     30\n                  </td>\n               </tr>\n               <tr>\n                  <td> <label for=\"txtlblPriorityName\" class=\"control-label\">Priority:{{taskPriority.value}}</label></td>\n                  <td colspan=\"4\">\n                     <input required type=\"range\" class=\"form-control\" id=\"txtPrioritySlider\" name=\"Priority\" min=\"0\" max=\"50\" #taskPriority=\"ngModel\"\n                     [(ngModel)]=\"projectData.Priority\" required>\n                  </td>\n               </tr>\n               <br/>\n               <tr>\n                  <label for=\"lblParentTsk\" class=\"control-label\">Manager:&nbsp;&nbsp; </label>\n                  <td colspan=\"3\">\n                      <select name=\"UserID\" id=\"ddlParentTask\" class=\"form-control\" #ddltaskId=\"ngModel\" [(ngModel)]=\"projectData.UserID\">\n              <option [ngValue]=\"null\">select</option>\n               <option *ngFor=\"let item of users\" [value]=\"item.UserID\" [selected]=\"projectData.UserID\" >{{item.FirstName}}</option>\n              </select>\n                  </td>\n               </tr>\n               <br/>\n               <tr>\n                 <td></td>               \n                  <td> <button class=\"btn btn-md btn-primary\" >{{FormRequestType}} Project</button> &nbsp; </td>\n                  <td> <button type=\"reset\" class=\"btn btn-success\">Reset</button></td>\n               </tr>\n            </table>\n         </div>\n      </div>\n   </div>\n   </form>\n   <table class=\"table table-striped table-hover table-bordered\">\n      <thead>\n         <tr>\n            <th (click)=\"sort('name')\">Project\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">No of Tasks\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Start Date\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">End Date\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Completed\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Priority\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n            <td colspan=\"2\"><b>\n               <th colspan=\"2\"><b>\n            Search Project:\n            <input class=\"form-control\" type=\"text\" name=\"ProjectName\"  style=\"box-sizing:border-box;display:block;width:100%;background-color: lightgrey\">\n            </b></th></b></td>\n         </tr>\n      </thead>\n      <tbody>\n         <tr *ngFor=\"let proj of projects \">\n            <td>{{proj.ProjectName}}</td>\n            <td>1</td>\n            <td>{{proj.StartDate | date:'dd/MM/yyyy'}}</td>\n            <td>{{proj.EndDate | date:'dd/MM/yyyy'}}</td>\n            <td>No</td>\n             <td>{{proj.Priority}}</td>\n            <td colspan=\"2\">\n               <button class=\"btn btn-sm btn-primary\" (click)=\"edit(proj.ProjectID)\">\n               <span class=\"glyphicon glyphicon-pencil\">&nbsp;Edit</span>\n               </button> &nbsp;&nbsp;&nbsp;\n               <button class=\"btn btn-sm btn-danger\" (click)=\"delete(proj.ProjectID)\">\n               <span class=\"glyphicon glyphicon-trash\">&nbsp;Suspend</span>\n               </button>\n            </td>\n         </tr>\n      </tbody>\n   </table>\n \n</div>\n"

/***/ }),

/***/ "./src/app/_components/add-project/add-project.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/add-project/add-project.component.ts ***!
  \******************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(datePipe, projectService, userService, router) {
        this.datePipe = datePipe;
        this.projectService = projectService;
        this.userService = userService;
        this.router = router;
        // User Data
        this.key = 'name'; //set default
        this.reverse = false;
        this.userData = { FirstName: '', UserID: null, LastName: '', EmployeeID: '' };
        this.projectData = { ProjectID: null,
            UserID: null,
            TaskID: null,
            ProjectName: '',
            StartDate: '',
            EndDate: '',
            Priority: null };
        this.FormRequestType = "";
    }
    //
    AddProjectComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    AddProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FormRequestType = "Add";
        this.projectService.getProjects()
            .subscribe(function (response) {
            _this.projects = response;
            console.log(_this.projects);
        });
        this.userService.getUsers()
            .subscribe(function (userresponse) {
            _this.users = userresponse;
            console.log("users response in consolee");
            console.log(_this.users);
        });
    };
    AddProjectComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        if (!this.isEdit) {
            this.projectService.addProject(request)
                .subscribe(function (response) {
                _this.projects.push(response);
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            this.updateprojreq = request;
            this.updateprojreq.ProjectID = this.projectId;
            console.log("Inside update");
            console.log(this.updateprojreq);
            this.projectService.updateProject(this.projectId, this.updateprojreq)
                /* working
                .subscribe(project => {
                  var projIndex = this.projects.findIndex(proj => proj.UserID == this.projectId);
                  console.log("projIndex");
                  console.log(projIndex);
        
                  if (projIndex != -1) {
                   this.projectService.getUsers()
              .subscribe(response => {
                this.projects = response;
                console.log( this.projects)
              })
                  }
                  */
                .subscribe(function (project) {
                _this.projectService.getProjects()
                    .subscribe(function (response) {
                    _this.projects = response;
                    console.log(_this.projects);
                    _this.FormRequestType = "Submit";
                });
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    AddProjectComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to delete the Project?');
        if (isDelete) {
            this.projectService.deleteProject(id)
                .subscribe(function (response) {
                if (response) {
                    var projIndex = _this.projects.findIndex(function (proj) { return proj.UserID == id; });
                    if (projIndex != -1) {
                        _this.projects.splice(projIndex, 1);
                    }
                }
            });
        }
    };
    AddProjectComponent.prototype.edit = function (id) {
        var _this = this;
        console.log("id");
        console.log(id);
        this.FormRequestType = "Update";
        console.log("edit id");
        console.log(id);
        this.projectService.getProject(id)
            .subscribe(function (project) {
            console.log(project);
            _this.projectData.ProjectName = project.ProjectName;
            _this.projectData.Priority = project.Priority;
            _this.projectData.StartDate = _this.datePipe.transform(project.StartDate, "yyyy-MM-dd");
            _this.projectData.EndDate = _this.datePipe.transform(project.EndDate, "yyyy-MM-dd");
            _this.projectData.UserID = project.UserID;
            _this.isEdit = true;
            _this.projectId = id;
        });
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/_components/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/_components/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/_components/add-task/add-task.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_components/add-task/add-task.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FkZC10YXNrL2FkZC10YXNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/add-task/add-task.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/add-task/add-task.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #taskForm=\"ngForm\" (ngSubmit)=\"submit(taskForm)\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">{{FormRequestType}} Task</div>\n        <div class=\"panel-body\">\n\n          <div class=\"form-group\" [class.has-error]=\"TXTtaskName.touched && TXTtaskName.invalid\">\n            <label for=\"lblTaskName\" class=\"control-label\">Task:</label>\n            <input type=\"text\" class=\"form-control\" id=\"tasName\" name=\"TaskName\" [(ngModel)]=\"task.TaskName\" #TXTtaskName=\"ngModel\" required>\n            <div *ngIf=\"TXTtaskName.touched && TXTtaskName.invalid\">\n              <span class=\"error\" *ngIf=\"TXTtaskName.errors?.required\">Name is required</span>\n            </div>\n          </div>\n          <!-- priority Slider -->\n          <div class=\"form-group\">\n            <label for=\"txtlblPriorityName\" class=\"control-label\">Priority:{{taskPriority.value}}</label>\n            <input required type=\"range\" class=\"form-control\" id=\"txtPrioritySlider\" name=\"Priority\" min=\"0\" max=\"50\" #taskPriority=\"ngModel\"\n              [(ngModel)]=\"task.Priority\" required>\n              <p>0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50</p>\n              <div *ngIf=\"taskPriority.touched && taskPriority.invalid\">\n                <span class=\"error1\" *ngIf=\"taskPriority.errors?.required\">Range is required</span>\n              </div>\n          </div>\n          <!-- Parent Task -->\n          <div class=\"form-group\" [class.has-error]=\"ddltaskId.touched && ddltaskId.invalid\">\n            <label for=\"lblParentTsk\" class=\"control-label\">Parent Task: </label>\n            <!--<select name=\"ParentID\" id=\"ddlParentTask\" class=\"form-control\" #ddltaskId=\"ngModel\" [(ngModel)]=\"ddltaskId.TaskID\" required>-->\n            <select name=\"ParentID\" id=\"ddlParentTask\" class=\"form-control\" #ddltaskId=\"ngModel\" [(ngModel)]=\"task.ParentID\">\n              <option [ngValue]=\"null\">select</option>\n               <option *ngFor=\"let item of tasks\" [value]=\"item.TaskID\" [selected]=\"task.ParentID\" >{{item.TaskName}}</option>\n              </select>\n\n          </div>\n\n          <!-- Start Date -->\n          <div class=\"form-group\">\n            <label for=\"txtlblStartDateName\" class=\"control-label\">Start Date:</label>\n            <input required class=\"form-control\" type=\"date\" value=\"\" id=\"example-date-input\" #StartDate=\"ngModel\" name=\"StartDate\" [(ngModel)]=\"task.StartDate\">\n            <div *ngIf=\"StartDate.touched && StartDate.invalid\">\n              <span class=\"error\" *ngIf=\"StartDate.errors?.required\">Please select start date</span>\n            </div>\n          </div>\n          <!--  -->\n\n          <!-- End Date -->\n          <div class=\"form-group\">\n            <label for=\"txtlblEndDateName\" class=\"control-label\">End Date:</label>\n            <input required class=\"form-control\" type=\"date\" value=\"\" id=\"example-date-input\" name=\"EndDate\" #EndDate=\"ngModel\" [(ngModel)]=\"task.EndDate\">\n            <div *ngIf=\"EndDate.touched && EndDate.invalid\">\n              <span class=\"error\" *ngIf=\"EndDate.errors?.required\">Please select a End Date</span>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [class.has-error]=\"ddltaskId.touched && ddltaskId.invalid\">\n            <label for=\"lblParentTsk\" class=\"control-label\">Add User: </label>\n            <!--<select name=\"ParentID\" id=\"ddlParentTask\" class=\"form-control\" #ddltaskId=\"ngModel\" [(ngModel)]=\"ddltaskId.TaskID\" required>-->\n            <select name=\"UserID\" id=\"ddlParentTask\" class=\"form-control\" #ddltaskId=\"ngModel\" [(ngModel)]=\"userData.UserID\">\n              <option [ngValue]=\"null\">select</option>\n               <option *ngFor=\"let item of users\" [value]=\"item.UserID\" [selected]=\"task.UserID\" >{{item.FirstName}}</option>\n              </select>\n          </div>\n\n          <div class=\"form-group\" [class.has-error]=\"ddltaskId.touched && ddltaskId.invalid\">\n            <label for=\"lblProjectTsk\" class=\"control-label\">Add Project: </label>\n            <!--<select name=\"ParentID\" id=\"ddlParentTask\" class=\"form-control\" #ddltaskId=\"ngModel\" [(ngModel)]=\"ddltaskId.TaskID\" required>-->\n            <select name=\"ProjectID\" id=\"ddlParentTask\" class=\"form-control\" #ddltaskId=\"ngModel\" [(ngModel)]=\"projectData.ProjectID\">\n              <option [ngValue]=\"null\">select</option>\n               <option *ngFor=\"let item of projects\" [value]=\"item.ProjectID\" [selected]=\"task.ProjectID\" >{{item.ProjectName}}</option>\n              </select>\n          </div>\n\n          \n\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"pull-right\">\n            <button class=\"btn btn-md btn-primary\" [disabled]=\"taskForm.invalid\">{{FormRequestType}}</button> &nbsp;\n            <button type=\"reset\" class=\"btn btn-success\">Reset</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/_components/add-task/add-task.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/add-task/add-task.component.ts ***!
  \************************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_services/task.service */ "./src/app/_services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(userService, projectService, taskService, router, datePipe, route) {
        this.userService = userService;
        this.projectService = projectService;
        this.taskService = taskService;
        this.router = router;
        this.datePipe = datePipe;
        this.route = route;
        this.userData = { FirstName: '', UserID: null, LastName: '', EmployeeID: '' };
        this.projectData = { ProjectID: null,
            UserID: null,
            TaskID: null,
            ProjectName: '',
            StartDate: '',
            EndDate: '',
            Priority: null };
        // Task Model Sample
        this.task = {
            TaskID: null,
            UserID: null,
            ProjectID: null,
            TaskName: '',
            ParentID: null,
            ParentName: '',
            StartDate: '',
            EndDate: '',
            Priority: null,
            ParentTaskName: '',
            IsCompleted: false,
        };
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Verifying if URL contains params");
        this.param_tsk_id = +this.route.snapshot.params['id'];
        if (this.param_tsk_id) {
            console.log("param_tsk_id");
            console.log(this.param_tsk_id);
            this.isEdit = true;
            this.task.TaskID = this.param_tsk_id;
        }
        if (!this.isEdit) {
            this.FormRequestType = "Add";
        }
        else {
            this.FormRequestType = "Update";
            this.taskService.getTask(this.param_tsk_id)
                .subscribe(function (taskresp) {
                _this.task.TaskID = taskresp[0].TaskID;
                _this.task.TaskName = taskresp[0].TaskName;
                _this.task.Priority = taskresp[0].Priority;
                _this.task.ParentID = taskresp[0].ParentID;
                _this.task.StartDate = _this.datePipe.transform(taskresp[0].StartDate, "yyyy-MM-dd");
                _this.task.EndDate = _this.datePipe.transform(taskresp[0].EndDate, "yyyy-MM-dd");
                //this.isEdit = true;
                console.log("this.task");
                console.log(taskresp[0]);
            });
        }
        this.taskService.getTasks()
            .subscribe(function (response) {
            _this.tasks = response;
            console.log("project response in consolee");
            console.log(_this.tasks);
        });
        this.userService.getUsers()
            .subscribe(function (userresponse) {
            _this.users = userresponse;
            console.log("users response in consolee");
            console.log(_this.users);
        });
        this.projectService.getProjects()
            .subscribe(function (projectresponse) {
            _this.projects = projectresponse;
        });
    };
    AddTaskComponent.prototype.TaskID = function () {
        return this.task.ParentID;
    };
    AddTaskComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        /* request.StartDate = this.datePipe.transform(request.StartDate, "dd-MM-yyyy");
        request.EndDate = this.datePipe.transform(request.EndDate, "dd-MM-yyyy");
    */
        console.log("form value from   submit(form: FormGroup)");
        console.log(request);
        if (!this.isEdit) {
            ;
            this.taskService.addTask(request)
                .subscribe(function (response) {
                _this.tasks.push(response);
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            this.test = form.value;
            this.test.TaskID = this.param_tsk_id;
            this.taskService.updateTask(this.param_tsk_id, request)
                .subscribe(function (responses) {
                _this.taskService.getTasks()
                    .subscribe(function (response) {
                    _this.tasks = response;
                    console.log("task response in consolee");
                    console.log(_this.tasks);
                }, function (error) {
                    for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                        var key = _a[_i];
                        for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                            var err = _c[_b];
                            alert(err);
                        }
                    }
                }, function () {
                    form.reset();
                    _this.isEdit = false;
                });
                _this.router.navigate(['/ViewTask']);
            });
        }
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/_components/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/_components/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/_components/add-user/add-user.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_components/add-user/add-user.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/add-user/add-user.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/add-user/add-user.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #projectForm=\"ngForm\" (ngSubmit)=\"submit(projectForm)\">\n    <div class=\"col-md-6\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Add User</div>\n        <div class=\"panel-body\">\n          \n          <div class=\"form-group\" [class.has-error]=\"userFName.touched && userFName.invalid\">\n            <label for=\"txtuserFName\" class=\"control-label\">First Name:</label>\n            <input type=\"text\" class=\"form-control\" id=\"txtuserFName\" name=\"FirstName\" [(ngModel)]=\"userData.FirstName\" #userFName=\"ngModel\" required>\n            <div *ngIf=\"userFName.touched && userFName.invalid\">\n            <span class=\"error\" *ngIf=\"userFName.errors?.required\">First Name is required</span>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [class.has-error]=\"userLName.touched && userLName.invalid\">\n            <label for=\"txtuserLName\" class=\"control-label\">Last Name:</label>\n            <input type=\"text\" class=\"form-control\" id=\"txtuserLName\" name=\"LastName\" [(ngModel)]=\"userData.LastName\" #userLName=\"ngModel\" required >\n            <div *ngIf=\"userLName.touched && userLName.invalid\">\n            <span class=\"error\" *ngIf=\"userLName.errors?.required\">Last Name is required</span>\n            </div>\n          </div>\n        <div class=\"form-group\" [class.has-error]=\"userEmpID.touched && userEmpID.invalid\">\n            <label for=\"txtuserEmpID\" class=\"control-label\">Employee ID:</label>\n            <input type=\"text\" class=\"form-control\" id=\"txtuserEmpID\" name=\"EmployeeID\" [(ngModel)]=\"userData.EmployeeID\"\n               #userEmpID=\"ngModel\" required>\n                <div *ngIf=\"userEmpID.touched && userEmpID.invalid\">\n            <span class=\"error\" *ngIf=\"userEmpID.errors?.required\">Employee ID is required</span>\n            </div>\n          </div>\n        <div class=\"panel-footer\">\n          <div class=\"pull-right\">\n            <button class=\"btn btn-md btn-primary\" >{{FormRequestType}} User</button>\n            &nbsp;\n            <button type=\"reset\" class=\"btn btn-success\">Reset</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n         </div>\n         </div>\n         </div>\n  </form>\n\n  <table class=\"table table-striped table-hover table-bordered\">\n   \n    <thead>\n      <tr>\n         <th (click)=\"sort('name')\">First Name\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Last Name\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Employee ID\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th colspan=\"2\"><b>\n            Search First Name:\n            <input class=\"form-control\" type=\"text\" name=\"FirstName\"  style=\"box-sizing:border-box;display:block;width:100%;background-color: lightgrey\">\n            </b></th>\n        </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let userr of users \">\n         <td>{{userr.FirstName}}</td>\n        <td>{{userr.LastName}}</td>\n         <td>{{userr.EmployeeID}}</td>\n        <td colspan=\"2\">\n          <button class=\"btn btn-sm btn-primary\" (click)=\"edit(userr.UserID)\">\n            <span class=\"glyphicon glyphicon-pencil\">&nbsp;Edit</span>\n          </button>\n          &nbsp;&nbsp;&nbsp;\n          <button class=\"btn btn-sm btn-danger\" (click)=\"delete(userr.UserID)\">\n            <span class=\"glyphicon glyphicon-trash\">&nbsp;Delete</span>\n          </button>\n         \n          \n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/_components/add-user/add-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/add-user/add-user.component.ts ***!
  \************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // User Data
        this.key = 'name'; //set default
        this.reverse = false;
        this.userData = { FirstName: '', UserID: null, LastName: '', EmployeeID: '' };
        this.FormRequestType = "";
    }
    AddUserComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.FormRequestType = "Add";
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
            console.log(_this.users);
        });
    };
    AddUserComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        if (!this.isEdit) {
            this.userService.addUser(request)
                .subscribe(function (response) {
                _this.users.push(response);
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            this.updateuserreq = request;
            this.updateuserreq.UserID = this.userId;
            console.log("Inside update");
            console.log(this.updateuserreq);
            this.userService.updateUser(this.userId, this.updateuserreq)
                /* working
                .subscribe(project => {
                  var projIndex = this.projects.findIndex(proj => proj.UserID == this.projectId);
                  console.log("projIndex");
                  console.log(projIndex);
        
                  if (projIndex != -1) {
                   this.userService.getUsers()
              .subscribe(response => {
                this.projects = response;
                console.log( this.projects)
              })
                  }
                  */
                .subscribe(function (project) {
                _this.userService.getUsers()
                    .subscribe(function (response) {
                    _this.users = response;
                    console.log(_this.users);
                    _this.FormRequestType = "Submit";
                });
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    AddUserComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to delete the User?');
        if (isDelete) {
            this.userService.deleteUser(id)
                .subscribe(function (response) {
                if (response) {
                    var projIndex = _this.users.findIndex(function (proj) { return proj.UserID == id; });
                    if (projIndex != -1) {
                        console.log("spliced");
                        _this.users.splice(projIndex, 1);
                    }
                }
            });
        }
    };
    AddUserComponent.prototype.edit = function (id) {
        var _this = this;
        this.FormRequestType = "Update";
        console.log("edit id");
        console.log(id);
        this.userService.getUser(id)
            .subscribe(function (user) {
            _this.userData.FirstName = user.FirstName;
            _this.userData.LastName = user.LastName;
            _this.userData.EmployeeID = user.EmployeeID;
            _this.isEdit = true;
            _this.userId = id;
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/_components/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/_components/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/_components/nav/nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/_components/nav/nav.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/nav/nav.component.html":
/*!****************************************************!*\
  !*** ./src/app/_components/nav/nav.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\"[routerLink]=\"['/']\">Task Manager</a>\n    </div>\n -->\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n         <li routerLinkActive=\"active\"><a [routerLink]=\"['/AddProject']\">Add Project</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/AddTask']\">Add Task</a></li>\n        \n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/AddUser']\">Add User</a></li>\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['/ViewTask']\">View Task</a></li>\n         <!--<li routerLinkActive=\"active\"><a [routerLink]=\"['/testTask']\">Test Task</a></li>-->\n        </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/_components/nav/nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/_components/nav/nav.component.ts ***!
  \**************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/_components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/_components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/_components/view-task/view-task.component.css":
/*!***************************************************************!*\
  !*** ./src/app/_components/view-task/view-task.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disabled{\n cursor: not-allowed;\n background-color: lightgray\n}\n\nthead>tr>th {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbXBvbmVudHMvdmlldy10YXNrL3ZpZXctdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msb0JBQW9CO0NBQ3BCLDJCQUEyQjtDQUMzQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL19jb21wb25lbnRzL3ZpZXctdGFzay92aWV3LXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxlZHtcbiBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheVxufVxuXG50aGVhZD50cj50aCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/_components/view-task/view-task.component.html":
/*!****************************************************************!*\
  !*** ./src/app/_components/view-task/view-task.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"table table-striped table-hover table-bordered\">\n    <tr>\n      <td>Task:</td>\n      <td colspan=\"3\"><input class=\"form-control\" type=\"text\" name=\"TaskName\" style=\"box-sizing:border-box;display:block;width:100%;background-color: lightgrey\"></td>\n      <td>Parent Task:</td>\n      <td colspan=\"3\"> <input type=\"text\" style=\"box-sizing:border-box;display:block;width:100%;background-color: lightgrey\"   name=\"ParentTaskName\" ></td>\n    </tr>\n    <tr>\n      <td>Priority From:</td>\n      <td> <input type=\"text\" style=\"background-color: lightgrey\"  name=\"Priority\" ></td>\n      <td>Priority To:</td>\n      <td> <input type=\"text\"  style=\"background-color: lightgrey\" name=\"Priority\" ></td>\n       <td>Start Date:</td>\n      <input class=\"form-control\"  type=\"date\" value=\"\" style=\"background-color: lightgrey\"  name=\"StartDate\" >\n      <td>End Date:</td>\n      <input class=\"form-control\"  type=\"date\" value=\"\" style=\"background-color: lightgrey\" name=\"EndDate\">\n    </tr>\n    <tr>\n      <td colspan=\"8\"> <button class=\"btn btn-sm btn-primary\">Clear</button></td>\n    </tr>\n  </table>\n  <hr >\n  <table class=\"table table-striped table-hover table-bordered\">\n     <thead> \n      <tr>\n         <th (click)=\"sort('name')\">TaskName\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Parent\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Priority\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">Start\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th (click)=\"sort('name')\">End\n         <span class=\"glyphicon sort-icon\" *ngIf=\"key =='name'\" [ngClass]=\"{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}\"></span></th>\n          <th colspan=\"2\"><b>Actions</b></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let task of tasks; let i = index\" [attr.data-index]=\"i\">\n        <td  [ngClass]=\"{'disabled': task.IsCompleted}\">{{task.TaskName}}</td>\n        <td  [ngClass]=\"{'disabled': task.IsCompleted}\">{{task.ParentTaskName}}</td>\n        <td [ngClass]=\"{'disabled': task.IsCompleted}\">{{task.Priority}}</td>\n        <td [ngClass]=\"{'disabled': task.IsCompleted}\">{{task.StartDate | date:'dd/MM/yyyy'}}</td>\n        <td [ngClass]=\"{'disabled': task.IsCompleted}\">{{task.EndDate | date:'dd/MM/yyyy'}}</td>\n        <td [ngClass]=\"{'disabled': task.IsCompleted}\">{{task.IsCompleted}}</td>\n        <td [ngClass]=\"{'disabled': task.IsCompleted}\">\n          <button class=\"btn btn-sm btn-primary\" (click)=\"edit(task.TaskID)\" [disabled]=\"task.IsCompleted\">\n          Edit\n          </button> &nbsp;&nbsp;&nbsp;\n          <button class=\"btn btn-sm btn-danger\" (click)=\"delete(task.TaskID)\" [disabled]=\"task.IsCompleted\">\n           End Task\n          </button> &nbsp;&nbsp;&nbsp;\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n"

/***/ }),

/***/ "./src/app/_components/view-task/view-task.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_components/view-task/view-task.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../_services/task.service */ "./src/app/_services/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(route, taskService, projectService, router) {
        this.route = route;
        this.taskService = taskService;
        this.projectService = projectService;
        this.router = router;
        this.key = 'name'; //set default
        this.reverse = false;
        this.rerender = false;
    }
    ViewTaskComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ViewTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        var TaskID = +this.route.snapshot.params['id'];
        this.taskService.getTasks()
            .subscribe(function (response) {
            _this.tasks = response;
            console.log("task response in consolee");
            console.log(_this.tasks);
        });
    };
    ViewTaskComponent.prototype.edit = function (TaskID) {
        //this.router.navigate(['/projects', id]);
        this.router.navigate(['/EditTask', TaskID]);
    };
    ViewTaskComponent.prototype.delete = function (TaskID) {
        var _this = this;
        var isDelete = confirm('Do you wish to delete the Task?');
        if (isDelete) {
            this.taskService.deleteTask(TaskID)
                .subscribe(function (project) {
                _this.taskService.getTasks()
                    .subscribe(function (response) {
                    _this.tasks = response;
                    //console.log( this.projects)
                });
            });
        }
    };
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/_components/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/_components/view-task/view-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/_services/project.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/project.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5005/api/Project';
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.apiUrl);
    };
    //
    //Add Project
    ProjectService.prototype.addProject = function (request) {
        return this.http.post(this.apiUrl, request);
    };
    //get Project
    ProjectService.prototype.getProject = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    //update Project
    ProjectService.prototype.updateProject = function (id, request) {
        return this.http.put(this.apiUrl + '/' + id, request);
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.delete(this.apiUrl + '/' + id);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/_services/task.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/task.service.ts ***!
  \*******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5005/api/Task';
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.apiUrl);
    };
    //
    //Add Test
    TaskService.prototype.addTask = function (request) {
        return this.http.post(this.apiUrl, request);
    };
    //get task
    TaskService.prototype.getTask = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    //update task
    TaskService.prototype.updateTask = function (id, request) {
        return this.http.put(this.apiUrl + '/' + id, request);
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(this.apiUrl + '/' + id);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5005/api/User';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl);
    };
    //
    //Add Users
    UserService.prototype.addUser = function (request) {
        return this.http.post(this.apiUrl, request);
    };
    //get User
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    //update User
    UserService.prototype.updateUser = function (id, request) {
        return this.http.put(this.apiUrl + '/' + id, request);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.apiUrl + '/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disabled{\n cursor: not-allowed;\n background-color: lightgray\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7Q0FDcEIsMkJBQTJCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWR7XG4gY3Vyc29yOiBub3QtYWxsb3dlZDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXlcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center;font-size: 20px; \">Task Manager</h1>\n<app-nav></app-nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TaskManager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_components/nav/nav.component */ "./src/app/_components/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_components/add-task/add-task.component */ "./src/app/_components/add-task/add-task.component.ts");
/* harmony import */ var _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/view-task/view-task.component */ "./src/app/_components/view-task/view-task.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_components/add-user/add-user.component */ "./src/app/_components/add-user/add-user.component.ts");
/* harmony import */ var _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_components/add-project/add-project.component */ "./src/app/_components/add-project/add-project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










 //importing the module



 // <-- import the module
var routes = [
    { path: '', component: _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_8__["ViewTaskComponent"] },
    { path: 'ViewTask', component: _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_8__["ViewTaskComponent"] },
    { path: 'AddTask', component: _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"] },
    { path: 'EditTask/:id', component: _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"] },
    { path: 'AddUser', component: _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"] },
    { path: 'AddProject', component: _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_14__["AddProjectComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"],
                _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_8__["ViewTaskComponent"],
                _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"],
                _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_14__["AddProjectComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_10__["Ng2OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\TaskManagerFSE\SPA-NgNO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map