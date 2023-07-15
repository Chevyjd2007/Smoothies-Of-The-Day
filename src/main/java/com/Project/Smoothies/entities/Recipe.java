package com.Project.Smoothies.entities;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    @Column(name = "cook_time")
    private Integer cookTime;
    private Integer servings;
    @Column(name = "nutrition_profile")
    private String nutritionProfile;

    // one to many relationship with ingredients, steps and one to one with nutrition facts
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "recipe")
    private List<Ingredients> ingredients = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "recipe")
    private List<Step> steps = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "recipe")
    private NutritionFact nutritionFact;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getNutritionProfile() {
        return nutritionProfile;
    }

    public void setNutritionProfile(String nutritionProfile) {
        this.nutritionProfile = nutritionProfile;
    }

    public List<Ingredients> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredients> ingredients) {
        this.ingredients = ingredients;
    }

    public List<Step> getSteps() {
        return steps;
    }

    public void setSteps(List<Step> steps) {
        this.steps = steps;
    }

    public NutritionFact getNutritionFact() {
        return nutritionFact;
    }

    public void setNutritionFact(NutritionFact nutritionFact) {
        this.nutritionFact = nutritionFact;
    }
}
