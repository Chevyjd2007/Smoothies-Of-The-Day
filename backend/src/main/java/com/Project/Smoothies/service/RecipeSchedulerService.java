package com.Project.Smoothies.service;

import com.Project.Smoothies.entities.RecipeDayIndex;
import com.Project.Smoothies.repositories.RecipeDayIndexRepo;
import com.Project.Smoothies.repositories.RecipeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

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

        // Converting long id to an int type
        int totalRecipes = (int) total;

        // randomizes a new index
        randomIndex = new Random().nextInt(totalRecipes);

        // Look up the current RecipeDayIndex, or create a new one if it doesn't exist
        RecipeDayIndex recipeDayIndex = recipeDayIndexRepo.findById(1L)
                .orElse(new RecipeDayIndex(1L));

        // Saves the recipeDayIndex to the database
        recipeDayIndexRepo.save(recipeDayIndex);
    }

    // Retrieve last entry of the RecipeDayIndex table
    public long getRecipeDayIndex(){
        RecipeDayIndex recipeDayIndex = recipeDayIndexRepo.findById(1L).orElseThrow();
        return recipeDayIndex.getRecipeIndex();
    }


}
