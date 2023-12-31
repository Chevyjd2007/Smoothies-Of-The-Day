package com.Project.Smoothies.service;

import com.Project.Smoothies.entities.RecipeDayIndex;
import com.Project.Smoothies.repositories.RecipeDayIndexRepo;
import com.Project.Smoothies.repositories.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.Random;

/*The purpose of this class is to randomize an index every day to serve a new recipe on the controller class*/
@Component
public class RecipeSchedulerService {

    private final RecipeRepo recipe;
    private final RecipeDayIndexRepo recipeDayIndexRepo;

    private long randomIndex;

    @Autowired
    public RecipeSchedulerService(RecipeRepo recipe, RecipeDayIndexRepo recipeDayIndexRepo) {
        this.recipe = recipe;
        this.recipeDayIndexRepo = recipeDayIndexRepo;
    }

    // Method that will randomize a recipe once a day at 00:00
    @Scheduled(cron = "0 0 0 * * ?")
    public void randomizeRecipe() {
        long total = recipe.count();

        // Current recipe index
        int currentIndex = getRecipeIndex();

        // Converting long id to an int type
        int totalRecipes = (int) total;

        // randomizes a new index
        Random random = new Random();
        int min = 1;
        int randomIndex = 0;

        // Randomize the index while the new index equals the current index so that the current recipe does not get picked
        do {
            randomIndex = random.nextInt(totalRecipes - min) + min;
        } while (randomIndex == currentIndex);

        long totalId = recipeDayIndexRepo.count();
        long id = totalId++;

        // Add a new random index into the database
        RecipeDayIndex recipeDayIndex = new RecipeDayIndex(id, randomIndex);

        // Saves the recipeDayIndex to the database
        recipeDayIndexRepo.save(recipeDayIndex);
    }

    // Get the latest recipe day index
    public int getRecipeIndex() {
        RecipeDayIndex recipeDayIndex = recipeDayIndexRepo.findById(1L).orElse(null);
        return recipeDayIndex != null ? recipeDayIndex.getRecipeIndex() : -1;
    }

    // Retrieve last entry of the RecipeDayIndex table
    public long getRecipeDayIndex(){
        RecipeDayIndex recipeDayIndex = recipeDayIndexRepo.findById(1L).orElseThrow();
        return recipeDayIndex.getRecipeIndex();
    }


}
