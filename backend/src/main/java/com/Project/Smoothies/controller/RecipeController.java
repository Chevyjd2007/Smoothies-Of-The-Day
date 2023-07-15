package com.Project.Smoothies.controller;


import com.Project.Smoothies.entities.Recipe;
import com.Project.Smoothies.service.RecipeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService){
        this.recipeService = recipeService;
    }

    // Create a new recipe object to be inputted into the database
    @PostMapping
    public ResponseEntity<Recipe> createRecipe(@RequestBody Recipe recipe) {
        return new ResponseEntity<>(recipeService.saveOrUpdateRecipe(recipe), HttpStatus.CREATED);
    }

    // API to get the specified recipe
    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipe(@PathVariable Long id) {
        // Handling the case where the recipe isn't found
        Optional<Recipe> recipe = recipeService.getRecipe(id);
        if (recipe.isPresent()) {
            return new ResponseEntity<>(recipe.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }
}
