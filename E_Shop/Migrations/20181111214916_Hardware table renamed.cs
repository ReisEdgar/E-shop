using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace E_Shop.Migrations
{
    public partial class Hardwaretablerenamed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_RepairingHardware",
                table: "RepairingHardware");

            migrationBuilder.RenameTable(
                name: "RepairingHardware",
                newName: "HardwareRecords");

            migrationBuilder.AddColumn<DateTime>(
                name: "SendingDateTime",
                table: "Messages",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_HardwareRecords",
                table: "HardwareRecords",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_HardwareRecords",
                table: "HardwareRecords");

            migrationBuilder.DropColumn(
                name: "SendingDateTime",
                table: "Messages");

            migrationBuilder.RenameTable(
                name: "HardwareRecords",
                newName: "RepairingHardware");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RepairingHardware",
                table: "RepairingHardware",
                column: "Id");
        }
    }
}
