DROP TRIGGER customerExists;
CREATE TRIGGER customerExists
BEFORE INSERT ON customers
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM customers WHERE customer_name = NEW.customer_name))
BEGIN
	SELECT RAISE(ABORT,  "This customer already exsists");

END;

DROP TRIGGER departmentExists;
CREATE TRIGGER departmentExists
BEFORE INSERT ON departments
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM departments WHERE name = NEW.name))
BEGIN
	SELECT RAISE(ABORT,  "This department already exsists");

END;

DROP TRIGGER materialExists;
CREATE TRIGGER materialExists
BEFORE INSERT ON materials
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM materials WHERE material_type = NEW.material_type))
BEGIN
	SELECT RAISE(ABORT,  "This material type already exsists");

END;


/*DROP TRIGGER improvementTypeExists;*/
CREATE TRIGGER improvementTypeExsists
BEFORE INSERT ON improvement_types
FOR EACH ROW
WHEN (EXISTS(SELECT * FROM improvement_types WHERE improvement_type = NEW.improvement_type))
BEGIN
	SELECT RAISE(ABORT,  "This improvement type already exsists");

END;