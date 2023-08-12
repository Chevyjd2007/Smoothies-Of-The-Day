package com.Project.Smoothies.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "recipe_day_index")
public class RecipeDayIndex {

    @Id
    private Long id;

    @Column(name = "recipe_index")
    private int recipeIndex;

    public RecipeDayIndex() {
    }

    public RecipeDayIndex(Long id, int recipeIndex) {
        this.id = id;
        this.recipeIndex = recipeIndex;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getRecipeIndex() {
        return recipeIndex;
    }

    public void setRecipeIndex(int recipeIndex) {
        this.recipeIndex = recipeIndex;
    }
}