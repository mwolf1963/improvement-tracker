package com.github.mwolf1963.improvementtracker.models;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.github.mwolf1963.improvementtracker.repositories.MaterialRepository;

@SpringBootTest
class MaterialTest {
	@Autowired
	MaterialRepository materialRepo;
	@Test
	void testFindAll() {
		List<Material> material = materialRepo.findAll();
		assertTrue(material.size()>0);
	}
	@Test
	public void testGetOneByName() throws Exception{
		Material material = materialRepo.getOneByMaterialType("material124");
		assertTrue((material.getMaterialType().compareTo("material124")) == 0);		
	}
	@Test
	public void duplicateEntity() throws Exception{
		//hack test to make sure that duplicates are not save possible using this approach
		Material  material = new Material();
		material.setMaterialType("material124");
		Material fromDb = materialRepo.getOneByMaterialType(material.getMaterialType());
		if (fromDb != null) {
			material = fromDb;
			materialRepo.saveAndFlush(material);
			assertTrue(true);
		} else {
			assertTrue(false);
		}
	}

}
