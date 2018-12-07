using Microsoft.EntityFrameworkCore.Migrations;

namespace E_Shop.Migrations
{
    public partial class changesInPosts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Forums_ForumId",
                table: "Posts");

            migrationBuilder.RenameColumn(
                name: "ForumId",
                table: "Posts",
                newName: "ForumID");

            migrationBuilder.RenameIndex(
                name: "IX_Posts_ForumId",
                table: "Posts",
                newName: "IX_Posts_ForumID");

            migrationBuilder.AlterColumn<int>(
                name: "ForumID",
                table: "Posts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Forums_ForumID",
                table: "Posts",
                column: "ForumID",
                principalTable: "Forums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Forums_ForumID",
                table: "Posts");

            migrationBuilder.RenameColumn(
                name: "ForumID",
                table: "Posts",
                newName: "ForumId");

            migrationBuilder.RenameIndex(
                name: "IX_Posts_ForumID",
                table: "Posts",
                newName: "IX_Posts_ForumId");

            migrationBuilder.AlterColumn<int>(
                name: "ForumId",
                table: "Posts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Forums_ForumId",
                table: "Posts",
                column: "ForumId",
                principalTable: "Forums",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
