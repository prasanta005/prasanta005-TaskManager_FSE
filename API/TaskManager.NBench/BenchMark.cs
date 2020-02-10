using NBench;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.RESTAPI.Controllers;

namespace TaskManager.NBench
{
    public class BenchMark
    {

        [PerfBenchmark(NumberOfIterations = 1, RunMode = RunMode.Throughput, TestMode = TestMode.Test, SkipWarmups = true)]
        [ElapsedTimeAssertion(MaxTimeMilliseconds = 5000)]
        public void Benchmark_Performance_ElaspedTime()
        {

            ProjectController objProject = new ProjectController();
            UserController objUser = new UserController();
            TaskController  objTask = new TaskController();
            int ProjCount = objProject.Get().Count();
            int UserCount = objUser.GetDB_User().Count(); 
        }



        [PerfBenchmark(RunMode = RunMode.Iterations, TestMode = TestMode.Measurement)]
        [GcMeasurement(GcMetric.TotalCollections, GcGeneration.AllGc)]
        public void Benchmark_Performance_GC()
        {
            ProjectController objProject = new ProjectController();
            UserController objUser = new UserController();
            TaskController objTask = new TaskController();
            int ProjCount = objProject.Get().Count();
            int UserCount = objUser.GetDB_User().Count();
        }

        [PerfBenchmark(Description = "Project Manager Task Memory Allocation Testing",
        NumberOfIterations = 5, RunMode = RunMode.Throughput, RunTimeMilliseconds = 2500, TestMode = TestMode.Test)]
        [MemoryAssertion(MemoryMetric.TotalBytesAllocated, MustBe.LessThanOrEqualTo, ByteConstants.SixtyFourKb)]
        public void Benchmark_Performance_Memory()
        {
            ProjectController objProject = new ProjectController();
            UserController objUser = new UserController();
            TaskController objTask = new TaskController();
            int ProjCount = objProject.Get().Count();
            int UserCount = objUser.GetDB_User().Count();
        }



        [PerfCleanup]
        public void Cleanup()
        {
            // does nothing
        }
    }

}
