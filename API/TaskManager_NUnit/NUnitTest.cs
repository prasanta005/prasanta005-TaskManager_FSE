using System;
using TaskManager.RESTAPI.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Http;
using System.Web.Http.Results;
using TaskManager.DAL.DataContext;
using TaskManager.DAL;
using TaskManager.BAL;
using TaskManager.RESTAPI;

namespace TaskManager_NUnit
{
    [TestClass]
    public class NUnitTest
    {
        [TestMethod]
        public void GetAllUsers()
        {
            UserController allUsers = new UserController();
            var getResult = allUsers.GetDB_User();
            Assert.IsNotNull(getResult);

        }
        [TestMethod]
        public void GetSingleUser()
        {
            UserController SingleUser = new UserController();
            var getResult = SingleUser.GetModel_User(1);
            Assert.IsNotNull(getResult);

        }

        [TestMethod]
        public void PostUser()
        {
             
            UserController PostUser = new UserController();
            var getResult = PostUser.PostModel_User( new Model_User { UserID = 2, FirstName = "First 2", LastName = "Last 2", EmployeeID = "123456" });
            Assert.IsNotNull(getResult);

        }

        [TestMethod]
        public void PutUser()
        {
            UserController PutUser = new UserController();
            var getResult = PutUser.PutModel_User(2,new Model_User { UserID=2,FirstName = "First 2", LastName = "Last 2", EmployeeID = "123456" });
            Assert.IsNotNull(getResult);

        }

        [TestMethod]
        public void DeleteUser()
        {
            UserController DeleteUser = new UserController();
            var getResult = DeleteUser.DeleteModel_User(16);
            Assert.IsNotNull(getResult);

        }


        [TestMethod]
        public void GetAllProjects()
        {
            ProjectController allProjects = new ProjectController();
            var getResult = allProjects.Get();
            Assert.IsNotNull(getResult);

        }

        [TestMethod]
        public void GetSingleProject()
        {
            ProjectController SingleProject = new ProjectController();
            var getResult = SingleProject.GetModel_Project(5);
            Assert.IsNotNull(getResult);

        }

        [TestMethod]
        public void PostProject()
        {
            ProjectController PostProject = new ProjectController();
            var getResult = PostProject.PostModel_Project(new Model_Project
            {
                UserID = 6,
                ProjectName = "Project 1",
                StartDate = DateTime.Today,
                EndDate = DateTime.Today,
                Priority = 16,
                TaskNo=null
            });
            Assert.IsNotNull(getResult);
        }

        [TestMethod]
        public void UpdateProject()
        {
            ProjectController UpdateProject = new ProjectController();
            var getResult = UpdateProject.PutModel_Project(6,new Model_Project
            {
                ProjectID=6,
                UserID = 6,
                ProjectName = "Project 2",
                StartDate = DateTime.Today,
                EndDate = DateTime.Today,
                Priority = 16,
                TaskNo = null
            });
            Assert.IsNotNull(getResult);
        }

        [TestMethod]
        public void DeleteProject()
        {
            ProjectController DeleteProject = new ProjectController();
            var getResult = DeleteProject.DeleteModel_Project(6);
            Assert.IsNotNull(getResult);
        }

        [TestMethod]        
        public void GetAllTasks()
        {
            TaskController allTasks = new TaskController();
            var getResult = allTasks.Get();
            Assert.IsNotNull(getResult);

        }

        [TestMethod]
        public void GetSingleTask()
        {
            TaskController SingleTask = new TaskController();
            var getResult = SingleTask.Get(2);
            Assert.IsNotNull(getResult);

        }


       
    }
}
