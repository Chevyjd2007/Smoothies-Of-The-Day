package com.Project.Smoothies.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "recipe_day_index")
public class RecipeDayIndex {

    @Id
    private Long id = 1L;

    @Column(name = "recipe_index")
    private Long recipeIndex;

    public RecipeDayIndex() {
    }

    public RecipeDayIndex(Long recipeIndex) {
        this.recipeIndex = recipeIndex;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRecipeIndex() {
        return recipeIndex;
    }

    public void setRecipeIndex(Long recipeIndex) {
        this.recipeIndex = recipeIndex;
    }
}