package com.Project.Smoothies.entities;

import java.util.List;

public class RecipeDto {
    private String title;
    private String description;
    private Integer cookTime;
    private Integer servings;
    private Integer calories;
    private Integer carbs;
    private Integer fat;
    private Integer protein;
    private Integer totalSugars;
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

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Integer getCarbs() {
        return carbs;
    }

    public void setCarbs(Integer carbs) {
        this.carbs = carbs;
    }

    public Integer getFat() {
        return fat;
    }

    public void setFat(Integer fat) {
        this.fat = fat;
    }

    public Integer getProtein() {
        return protein;
    }

    public void setProtein(Integer protein) {
        this.protein = protein;
    }

    public Integer getTotalSugars() {
        return totalSugars;
    }

    public void setTotalSugars(Integer totalSugars) {
        this.totalSugars = totalSugars;
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
}