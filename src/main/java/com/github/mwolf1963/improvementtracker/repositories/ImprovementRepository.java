package com.github.mwolf1963.improvementtracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.github.mwolf1963.improvementtracker.models.*;

@Repository
public interface ImprovementRepository extends JpaRepository<Improvement, Integer> {
	List<Improvement> findAllByCustomer(Customer cust);
	List<Improvement> findAllByImprovementType(ImprovementType imp);
	List<Improvement> findAllByDepartment(Department dept);
}
