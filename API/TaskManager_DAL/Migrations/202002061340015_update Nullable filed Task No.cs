namespace TaskManager_DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateNullablefiledTaskNo : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Project", "TaskNo", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Project", "TaskNo", c => c.Int(nullable: false));
        }
    }
}
