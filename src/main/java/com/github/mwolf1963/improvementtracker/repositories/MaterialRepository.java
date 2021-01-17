package com.github.mwolf1963.improvementtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.mwolf1963.improvementtracker.models.Material;

public interface MaterialRepository extends JpaRepository<Material, Long> {

}
