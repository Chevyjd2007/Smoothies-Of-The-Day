package com.Project.Smoothies.service;


import com.Project.Smoothies.entities.Recipe;
import com.Project.Smoothies.repositories.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private final RecipeRepo recipeRepo;

    @Autowired
    // Dependency injection
    public RecipeService(RecipeRepo recipeRepo){
        this.recipeRepo = recipeRepo;
    }

    // Logic to create/update a new/existing recipe
    public Recipe saveOrUpdateRecipe(Recipe recipe) {
        return recipeRepo.save(recipe);
    }

    // Find recipe by its id on the table
    public Optional<Recipe> getRecipe(Long id) {
        return recipeRepo.findById(id);
    }

    // Get all recipes from the recipe table
    public List<Recipe> getAllRecipes(){
        return recipeRepo.findAll();
    }

    // Delete specified recipe
    public void deleteRecipe(Long id) {
        recipeRepo.deleteById(id);
    }
}
