package com.Project.Smoothies.repositories;

import com.Project.Smoothies.entities.NutritionFact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NutritionFactRepo extends JpaRepository<NutritionFact, Long> {
}
