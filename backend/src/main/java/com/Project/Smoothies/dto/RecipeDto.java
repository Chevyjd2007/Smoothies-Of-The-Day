package com.Project.Smoothies.dto;



import java.util.List;

public class RecipeDto {
    private String title;
    private String description;
    private Integer cookTime;
    private Integer servings;
    private String steps;
    private NutritionFactDto nutritionFact;
    private List<String> ingredients;
    private List<String> nutritionProfile;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getCookTime() {
        return cookTime;
    }

    public void setCookTime(Integer cookTime) {
        this.cookTime = cookTime;
    }

    public Integer getServings() {
        return servings;
    }

    public void setServings(Integer servings) {
        this.servings = servings;
    }

    public NutritionFactDto getNutritionFact() {
        return nutritionFact;
    }

    public void setNutritionFact(NutritionFactDto nutritionFact) {
        this.nutritionFact = nutritionFact;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getNutritionProfile() {
        return nutritionProfile;
    }

    public void setNutritionProfile(List<String> nutritionProfile) {
        this.nutritionProfile = nutritionProfile;
    }

    public String getSteps() {
        return steps;
    }

    public void setSteps(String steps) {
        this.steps = steps;
    }
}