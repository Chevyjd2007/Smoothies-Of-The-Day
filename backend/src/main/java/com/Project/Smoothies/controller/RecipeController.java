package com.Project.Smoothies.controller;


import com.Project.Smoothies.entities.NutritionFact;
import com.Project.Smoothies.entities.Recipe;
import com.Project.Smoothies.entities.RecipeDto;
import com.Project.Smoothies.service.RecipeService;
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

    @Autowired
    public RecipeController(RecipeService recipeService){
        this.recipeService = recipeService;
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Recipe> createRecipe(@RequestBody RecipeDto recipeDto) {
        Recipe recipe = new Recipe();
        // assuming these setters based on your form fields
        recipe.setTitle(recipeDto.getTitle());
        recipe.setDescription(recipeDto.getDescription());
        recipe.setCookTime(recipeDto.getCookTime());
        recipe.setServings(recipeDto.getServings());

        NutritionFact nutritionFact = new NutritionFact();
        nutritionFact.setCalories(recipeDto.getCalories());
        nutritionFact.setCarbs(recipeDto.getCarbs());
        nutritionFact.setFat(recipeDto.getFat());
        nutritionFact.setProtein(recipeDto.getProtein());
        nutritionFact.setTotalSugars(recipeDto.getTotalSugars());

        recipe.setNutritionFact(nutritionFact);

        // assuming you get ingredients as a list of strings
        List<String> ingredientsList = new ArrayList<>();
        for(String ingredient: recipeDto.getIngredients()){
            Ingredients ingredientObj = new Ingredients();
            ingredientObj.setIngredient(ingredient);
            ingredientsList.add(ingredientObj);
        }
        recipe.setIngredients(ingredientsList);

        // assuming you get nutrition profiles as a list of strings
        List<NutritionProfile> nutritionProfileList = new ArrayList<>();
        for(String profile: recipeDto.getNutritionProfile()){
            NutritionProfile profileObj = new NutritionProfile();
            profileObj.setProfile(profile);
            nutritionProfileList.add(profileObj);
        }
        recipe.setNutritionProfile(nutritionProfileList);

        return new ResponseEntity<>(recipeService.saveOrUpdateRecipe(recipe), HttpStatus.CREATED);
    }

    // API to get the specified recipe
    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
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
