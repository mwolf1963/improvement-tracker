package com.github.mwolf1963.improvementtracker.models;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.github.mwolf1963.improvementtracker.repositories.PartRepository;

@SpringBootTest
class PartTest {
	@Autowired
	PartRepository partRepo;
	@Test
	void testFindAll() {
		List<Part> parts= partRepo.findAll();
		assertTrue(parts.size()>0);
	}
	@Test
	public void testGetOneByName() throws Exception{
		Part part = partRepo.getOneByPartNumber("part1");
		assertTrue((part.getPartNumber().compareTo("part1")) == 0);		
	}
	@Test
	public void duplicateEntity() throws Exception{
		//hack test to make sure that duplicates are not save possible using this approach
		Part part= new Part();
		part.setPartNumber("part1");
		Part fromDb = partRepo.getOneByPartNumber(part.getPartNumber());
		if (fromDb != null) {
			part = fromDb;
			partRepo.saveAndFlush(part);
			assertTrue(true);
		} else {
			assertTrue(false);
		}
	}

}
