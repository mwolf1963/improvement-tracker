package com.github.mwolf1963.improvementtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.mwolf1963.improvementtracker.models.Part;

public interface PartRepository extends JpaRepository<Part, Integer> {
	Part getOneByPartNumber(String number);

}
