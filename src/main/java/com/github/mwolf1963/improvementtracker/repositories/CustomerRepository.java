package com.github.mwolf1963.improvementtracker.repositories;

import com.github.mwolf1963.improvementtracker.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}
