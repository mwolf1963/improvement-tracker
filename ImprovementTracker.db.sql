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
INSERT INTO "customers" ("customer_id","customer_name") VALUES (1,'customer1');
INSERT INTO "customers" ("customer_id","customer_name") VALUES (100,'done in sql');
INSERT INTO "departments" ("department_id","name") VALUES (3,'department1');
INSERT INTO "departments" ("department_id","name") VALUES (14,'department1');
INSERT INTO "departments" ("department_id","name") VALUES (20,'department1');
INSERT INTO "hibernate_sequence" ("next_val") VALUES (26);
INSERT INTO "improvements" ("improvement_id","description","result","solution","customer_id","department_id","improvement_type_id","id") VALUES (6,'a problem','this improvement was added using postman while trouble shooting stupid js','fixed the problem',1,3,5,4);
INSERT INTO "improvements" ("improvement_id","description","result","solution","customer_id","department_id","improvement_type_id","id") VALUES (17,'a problem','this improvement was added using postman while trouble shooting stupid js','fixed the problem',12,14,16,15);
INSERT INTO "improvements" ("improvement_id","description","result","solution","customer_id","department_id","improvement_type_id","id") VALUES (23,'a problem','this improvement was added using postman while trouble shooting stupid js','fixed the problem',18,20,22,21);
INSERT INTO "improvement_types" ("improvement_type_id","improvement_type") VALUES (5,'process');
INSERT INTO "improvement_types" ("improvement_type_id","improvement_type") VALUES (16,'process');
INSERT INTO "improvement_types" ("improvement_type_id","improvement_type") VALUES (22,'process');
INSERT INTO "materials" ("material_id","material_type") VALUES (2,'material123');
INSERT INTO "materials" ("material_id","material_type") VALUES (13,'material123');
INSERT INTO "materials" ("material_id","material_type") VALUES (19,'material123');
INSERT INTO "parts" ("part_id","part_number","material_id") VALUES (4,'part1',2);
INSERT INTO "parts" ("part_id","part_number","material_id") VALUES (15,'part1',13);
INSERT INTO "parts" ("part_id","part_number","material_id") VALUES (21,'part1',19);
CREATE TRIGGER customerExists
BEFORE INSERT ON customers
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM customers WHERE customer_name = NEW.customer_name))
BEGIN
	SELECT RAISE(ABORT,  "This customer already exsists");

END;
CREATE TRIGGER departmentExists
BEFORE INSERT ON departments
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM departments WHERE name = NEW.name))
BEGIN
	SELECT RAISE(ABORT,  "This department already exsists");

END;
CREATE TRIGGER materialExists
BEFORE INSERT ON materials
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM materials WHERE material_type = NEW.material_type))
BEGIN
	SELECT RAISE(ABORT,  "This material type already exsists");

END;
CREATE TRIGGER improvementTypeExsists
BEFORE INSERT ON improvement_types
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM improvement_types WHERE improvement_type = NEW.improvement_type))
BEGIN
	SELECT RAISE(ABORT,  "This improvement type already exsists");

END;
COMMIT;
