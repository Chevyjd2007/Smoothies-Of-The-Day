package com.Project.Smoothies.repositories;

import com.Project.Smoothies.entities.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientsRepo extends JpaRepository<Ingredients, Long> {
}
