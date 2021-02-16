package com.github.mwolf1963.improvementtracker.repositories;

import com.github.mwolf1963.improvementtracker.models.ImprovementType;
import com.github.mwolf1963.improvementtracker.models.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImprovementTypeRepository extends JpaRepository<ImprovementType, Integer> {
	ImprovementType getOneByImprovementType(String type);
}
