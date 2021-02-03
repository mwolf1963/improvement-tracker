package com.github.mwolf1963.improvementtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.github.mwolf1963.improvementtracker.models.Department;



@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
}
