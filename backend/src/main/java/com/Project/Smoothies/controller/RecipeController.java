package com.Project.Smoothies.controller;


import com.Project.Smoothies.entities.NutritionFact;
import com.Project.Smoothies.entities.Recipe;
import com.Project.Smoothies.dto.RecipeDto;
import com.Project.Smoothies.repositories.RecipeRepo;
import com.Project.Smoothies.service.RecipeSchedulerService;
import com.Project.Smoothies.service.RecipeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;
    private final ModelMapper modelMapper;
    private final RecipeRepo recipeRepo;
    private final RecipeSchedulerService scheduler;

    @Autowired
    public RecipeController(RecipeService recipeService, ModelMapper modelMapper, RecipeRepo recipeRepo, RecipeSchedulerService scheduler){
        this.recipeService = recipeService;
        this.modelMapper = modelMapper;
        this.recipeRepo = recipeRepo;
        this.scheduler = scheduler;
    }

    // Controller method to add a new recipe into the database from the static web component
    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public RecipeDto saveRecipe(@RequestBody RecipeDto recipeDto) {
        // Map recipe DTO to recipe entity
        // Maps all corresponding fields from the recipeDto to the recipeEntity i.e. title, descriptiopn, cooktime, servings
        Recipe recipeEntity = modelMapper.map(recipeDto, Recipe.class);

        // Map NutrtionFactDto to NutrtitionFact entity
        NutritionFact nutritionFactEntity = modelMapper.map(recipeDto.getNutritionFact(), NutritionFact.class);
        recipeEntity.setNutritionFact(nutritionFactEntity);

        // Handle the ingredients
        List<String> ingredientList = new ArrayList<>();
        for (String ingredient: recipeDto.getIngredients()) {
            String ingredientItem = ingredient;
            ingredientList.add(ingredientItem);
        }
        recipeEntity.setIngredients(ingredientList);

        // Handle the nutrition profile
        List<String> nutritionProfileList = new ArrayList<>();
        for (String nutritionProfile: recipeDto.getNutritionProfile()){
            String nutritionItem =  nutritionProfile;
            nutritionProfileList.add(nutritionItem);
        }
        recipeEntity.setNutritionProfile(nutritionProfileList);

        // save the recipe
        Recipe savedRecipe = recipeRepo.save(recipeEntity);

        // Map the saved entity back to a DTO
        RecipeDto savedDto = modelMapper.map(savedRecipe, RecipeDto.class);

        return savedDto;

    }

    // API sending a random recipe
    @GetMapping("/recipe-of-the-day")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Recipe> getRecipe() {

        // Provides a recipe object depending on the recipe of the day random index
        Optional<Recipe> recipe = recipeService.getRecipe(scheduler.getRecipeDayIndex());

        // Handle if that particular recipe number is available or not
        if (recipe.isPresent()) {
            return new ResponseEntity<>(recipe.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/totalnumber")
    @CrossOrigin(origins = "http://localhost:3000")
    public long getRecipeTotal() {
        return recipeService.recipesTotal();
    }
}
