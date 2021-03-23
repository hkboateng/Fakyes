create  table "electionApp".login_user (
 "login_user_id" SERIAL primary key,
 "username" varchar(15) not null,
 "password" varchar(255) not null,
 "accountLocked" Boolean not null default false,
 "accountExpired" Boolean not null default false,
 "passwordExpired" Boolean not null default false,
 "dateCreated" timestamp,
 "dateUpdated" timestamp,
 "createdBy" varchar(15) not null,
 "updatedBy" varchar(15) not null
)

create table "electionApp".role(
 "role_id" serial primary key,
 "role_name" varchar(50),
 "active" Boolean,
 "dateCreated" timestamp,
 "dateUpdated" timestamp,
 "createdBy" varchar(15) not null,
 "updatedBy" varchar(15) not null
)

create table "electionApp".user_role(
 "user_role_id" serial primary key,
 "login_user_id" integer not null,
 "role_id" integer not null,
 "active" Boolean,
 "dateCreated" timestamp,
 "dateUpdated" timestamp,
 "createdBy" varchar(15) not null,
 "updatedBy" varchar(15) not null
)

create table "electionApp".user_authorise(
 "user_authorise_id" serial primary key,
 "username" varchar(15) not null,
 "access_key" varchar(8) not null,
 "active" Boolean,
 "dateCreated" timestamp,
 "dateUpdated" timestamp,
 "createdBy" varchar(15) not null,
 "updatedBy" varchar(15) not null
)



