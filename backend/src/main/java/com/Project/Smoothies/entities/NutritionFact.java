package com.Project.Smoothies.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "nutrition_fact")
public class NutritionFact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // Only one nutrition fact entry per recipe
    @OneToOne(mappedBy = "nutritionFact")
    @JoinColumn(name = "recipe_id", nullable = false)
    @JsonIgnore
    private Recipe recipe;

    private Integer calories;
    private Integer fat;
    private Integer carbs;
    private Integer protein;
    private Integer totalSugars;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

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
}
