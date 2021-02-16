package com.github.mwolf1963.improvementtracker.models;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.github.mwolf1963.improvementtracker.models.Customer;
import com.github.mwolf1963.improvementtracker.repositories.CustomerRepository;

@SpringBootTest
class CustomerTest {

	@Autowired
	private CustomerRepository customerRepo;
	
	@Test
	public void testFindAll() throws Exception{
		List<Customer> customers = customerRepo.findAll();
		assertTrue(customers.size() >0);
	}
	@Test
	public void testGetOneByName() throws Exception{
		Customer customer = customerRepo.getOneByCustomerName("customer1");
		System.out.println("customer retrieved is : " + customer.getCustomerName());
		assertTrue((customer.getCustomerName().compareTo("customer1")) == 0);		
	}

}
