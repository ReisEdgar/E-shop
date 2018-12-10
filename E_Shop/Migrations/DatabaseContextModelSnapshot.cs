﻿// <auto-generated />
using System;
using E_Shop.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace E_Shop.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("E_Shop.Database.Entities.Comment", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorID");

                    b.Property<DateTime>("Date");

                    b.Property<int>("PostID");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.HasKey("ID");

                    b.HasIndex("AuthorID");

                    b.HasIndex("PostID");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Conversation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("User1");

                    b.Property<string>("User2");

                    b.HasKey("Id");

                    b.ToTable("Conversations");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Forum", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CategoryID");

                    b.Property<string>("Link")
                        .IsRequired();

                    b.Property<string>("Text")
                        .HasMaxLength(50);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Forums");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Hardware", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AdditionalMessage");

                    b.Property<int>("Category");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Owner");

                    b.Property<DateTime>("StartDate");

                    b.Property<int>("Status");

                    b.HasKey("Id");

                    b.ToTable("HardwareRecords");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Konsole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorID");

                    b.Property<int>("Category");

                    b.Property<string>("Text")
                        .HasMaxLength(500);

                    b.Property<string>("model");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("AuthorID");

                    b.ToTable("Konsole");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ConversationId");

                    b.Property<int>("MessageType");

                    b.Property<bool>("Seen");

                    b.Property<string>("SenderId");

                    b.Property<DateTime>("SendingDateTime");

                    b.Property<string>("Text");

                    b.HasKey("Id");

                    b.HasIndex("ConversationId");

                    b.HasIndex("SenderId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorID")
                        .IsRequired();

                    b.Property<int>("Category");

                    b.Property<bool>("Edited");

                    b.Property<DateTime>("EditedDate");

                    b.Property<int>("ForumID");

                    b.Property<DateTime>("PublishingDate");

                    b.Property<string>("Text")
                        .HasMaxLength(500);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("AuthorID");

                    b.HasIndex("ForumID");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Email");

                    b.Property<string>("FullName");

                    b.Property<string>("Nickname");

                    b.Property<string>("Picture");

                    b.Property<int>("Role");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Zaidimai", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AuthorID");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasMaxLength(500);

                    b.Property<int>("category");

                    b.Property<string>("name");

                    b.HasKey("Id");

                    b.HasIndex("AuthorID");

                    b.ToTable("Zaidimai");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Comment", b =>
                {
                    b.HasOne("E_Shop.Database.Entities.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorID");

                    b.HasOne("E_Shop.Database.Entities.Post", "Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Konsole", b =>
                {
                    b.HasOne("E_Shop.Database.Entities.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorID");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Message", b =>
                {
                    b.HasOne("E_Shop.Database.Entities.Conversation", "Conversation")
                        .WithMany()
                        .HasForeignKey("ConversationId");

                    b.HasOne("E_Shop.Database.Entities.User", "Sender")
                        .WithMany()
                        .HasForeignKey("SenderId");
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Post", b =>
                {
                    b.HasOne("E_Shop.Database.Entities.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorID")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("E_Shop.Database.Entities.Forum", "Forum")
                        .WithMany("Posts")
                        .HasForeignKey("ForumID")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("E_Shop.Database.Entities.Zaidimai", b =>
                {
                    b.HasOne("E_Shop.Database.Entities.User", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorID");
                });
#pragma warning restore 612, 618
        }
    }
}
