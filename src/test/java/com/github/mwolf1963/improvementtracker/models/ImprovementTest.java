package com.github.mwolf1963.improvementtracker.models;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.github.mwolf1963.improvementtracker.repositories.ImprovementRepository;
@SpringBootTest
class ImprovementTest {
	@Autowired
	ImprovementRepository improvementRepo;
	@Test
	void testFindAll() {
		List<Improvement> improvement= improvementRepo.findAll();
		assertTrue(improvement.size()>0);
	}
	@Test
	public void testFindAllByCustomer() throws Exception{
		Customer cust = new Customer();
		cust.setCustomer_id(1);
		List<Improvement> improvements= improvementRepo.findAllByCustomer(cust);
		assertTrue(improvements.size()>0);		
	}
	@Test
	public void testFindAllByImprovementType() throws Exception{
		ImprovementType impType = new ImprovementType();
		impType.setImprovement_id(5);
		List<Improvement> improvements= improvementRepo.findAllByImprovementType(impType);
		assertTrue(improvements.size()>0);		
	}
	@Test
	public void testFindAllByDepartment() throws Exception{
		Department department= new Department();
		department.setDepartment_id(3);
		List<Improvement> improvements= improvementRepo.findAllByDepartment(department);
		assertTrue(improvements.size()>0);		
	}
}
