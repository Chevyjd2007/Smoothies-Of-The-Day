package com.Project.Smoothies.dto;

public class NutritionFactDto {

    private Integer calories;
    private Integer fat;
    private Integer carbs;
    private Integer Protein;
    private Integer totalSugars;

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Integer getFat() {
        return fat;
    }

    public void setFat(Integer fat) {
        this.fat = fat;
    }

    public Integer getCarbs() {
        return carbs;
    }

    public void setCarbs(Integer carbs) {
        this.carbs = carbs;
    }

    public Integer getProtein() {
        return Protein;
    }

    public void setProtein(Integer protein) {
        Protein = protein;
    }

    public Integer getTotalSugars() {
        return totalSugars;
    }

    public void setTotalSugars(Integer totalSugars) {
        this.totalSugars = totalSugars;
    }
}
