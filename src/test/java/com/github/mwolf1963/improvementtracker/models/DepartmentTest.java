package com.github.mwolf1963.improvementtracker.models;

import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.github.mwolf1963.improvementtracker.models.Department;
import com.github.mwolf1963.improvementtracker.repositories.DepartmentRepository;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class DepartmentTest {
	@Autowired
	DepartmentRepository departmentRepo;
	
	@Test
	public void testFindOne() throws Exception{
		List<Department> departments = departmentRepo.findAll();
		assertTrue(departments.size() >0);
	}
	@Test
	public void testGetOneByName() throws Exception{
		Department department= departmentRepo.getOneByName("department1");
		assertTrue((department.getName().compareTo("department1")) == 0);		
	}
}
