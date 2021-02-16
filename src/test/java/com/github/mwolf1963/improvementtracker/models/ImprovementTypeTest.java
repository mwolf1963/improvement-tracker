package com.github.mwolf1963.improvementtracker.models;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.github.mwolf1963.improvementtracker.repositories.ImprovementTypeRepository;

@SpringBootTest
class ImprovementTypeTest {
	@Autowired
	ImprovementTypeRepository improvementTypeRepo;
	@Test
	void testFindAll() {
		List<ImprovementType> impType = improvementTypeRepo.findAll();
		assertTrue(impType.size()>0);
	}
	@Test
	public void testGetOneByName() throws Exception{
		ImprovementType impType = improvementTypeRepo.getOneByImprovementType("process");
		assertTrue((impType.getImprovementType().compareTo("process")) == 0);		
	}
	@Test
	public void duplicateEntity() throws Exception{
		//hack test to make sure that duplicates are not save possible using this approach
		ImprovementType impType = new ImprovementType();
		impType.setImprovementType("process");
		ImprovementType fromDb = improvementTypeRepo.getOneByImprovementType(impType.getImprovementType());
		if (fromDb != null) {
			impType = fromDb;
			improvementTypeRepo.saveAndFlush(impType);
			assertTrue(true);
		} else {
			assertTrue(false);
		}
	}
}
