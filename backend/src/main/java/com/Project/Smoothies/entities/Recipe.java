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

    @ElementCollection
    private List<String> nutritionProfile = new ArrayList<>();

    // one to many relationship with ingredients, steps and one to one with nutrition facts
    @ElementCollection
    private List<String> ingredients;

    private String steps;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "nutrition_fact_id", referencedColumnName = "id")
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

    public List<String> getNutritionProfile() {
        return nutritionProfile;
    }

    public void setNutritionProfile(List<String> nutritionProfile) {
        this.nutritionProfile = nutritionProfile;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public String getSteps() {
        return steps;
    }

    public void setSteps(String steps) {
        this.steps = steps;
    }

    public NutritionFact getNutritionFact() {
        return nutritionFact;
    }

    public void setNutritionFact(NutritionFact nutritionFact) {
        this.nutritionFact = nutritionFact;
    }
}
