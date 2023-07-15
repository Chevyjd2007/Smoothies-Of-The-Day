package com.Project.Smoothies.repositories;

import com.Project.Smoothies.entities.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepo extends JpaRepository<Recipe, Long> {
}
