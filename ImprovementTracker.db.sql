BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "customers" (
	"customer_id"	integer NOT NULL,
	"customer_name"	varchar(255),
	PRIMARY KEY("customer_id")
);
CREATE TABLE IF NOT EXISTS "departments" (
	"department_id"	integer NOT NULL,
	"name"	varchar(255),
	PRIMARY KEY("department_id")
);
CREATE TABLE IF NOT EXISTS "hibernate_sequence" (
	"next_val"	bigint
);
CREATE TABLE IF NOT EXISTS "images" (
	"id"	integer NOT NULL,
	"url"	varchar(255),
	"improvement_id"	integer NOT NULL,
	"image_id"	integer,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "improvements" (
	"improvement_id"	integer NOT NULL,
	"description"	varchar(255),
	"result"	varchar(255),
	"solution"	varchar(255),
	"customer_id"	integer NOT NULL,
	"department_id"	integer NOT NULL,
	"improvement_type_id"	integer NOT NULL,
	"id"	integer NOT NULL,
	PRIMARY KEY("improvement_id")
);
CREATE TABLE IF NOT EXISTS "improvement_types" (
	"improvement_type_id"	integer NOT NULL,
	"improvement_type"	varchar(255),
	PRIMARY KEY("improvement_type_id")
);
CREATE TABLE IF NOT EXISTS "materials" (
	"material_id"	integer NOT NULL,
	"material_type"	varchar(255),
	PRIMARY KEY("material_id")
);
CREATE TABLE IF NOT EXISTS "parts" (
	"part_id"	integer NOT NULL,
	"part_number"	varchar(255),
	"material_id"	integer NOT NULL,
	PRIMARY KEY("part_id")
);
INSERT INTO "customers" ("customer_id","customer_name") VALUES (1,'Customer 1');
INSERT INTO "customers" ("customer_id","customer_name") VALUES (2,'Customer 3');
INSERT INTO "customers" ("customer_id","customer_name") VALUES (3,'Customer 4');
INSERT INTO "customers" ("customer_id","customer_name") VALUES (4,'Customer 5');
INSERT INTO "customers" ("customer_id","customer_name") VALUES (19,'Customer 6');
INSERT INTO "departments" ("department_id","name") VALUES (6,'department1');
INSERT INTO "departments" ("department_id","name") VALUES (7,'department2');
INSERT INTO "departments" ("department_id","name") VALUES (8,'department3');
INSERT INTO "departments" ("department_id","name") VALUES (9,'department4');
INSERT INTO "departments" ("department_id","name") VALUES (10,'department5');
INSERT INTO "hibernate_sequence" ("next_val") VALUES (1);
INSERT INTO "hibernate_sequence" ("next_val") VALUES (20);
INSERT INTO "improvement_types" ("improvement_type_id","improvement_type") VALUES (16,'"type 1"');
INSERT INTO "improvement_types" ("improvement_type_id","improvement_type") VALUES (17,'"type 2"');
INSERT INTO "materials" ("material_id","material_type") VALUES (1,'material123');
INSERT INTO "materials" ("material_id","material_type") VALUES (2,'material124');
INSERT INTO "materials" ("material_id","material_type") VALUES (3,'material1135');
INSERT INTO "materials" ("material_id","material_type") VALUES (4,'material1100');
INSERT INTO "materials" ("material_id","material_type") VALUES (5,'material11290');
COMMIT;
