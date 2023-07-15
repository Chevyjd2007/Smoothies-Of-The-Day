package com.Project.Smoothies.repositories;

import com.Project.Smoothies.entities.Step;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StepRepo extends JpaRepository<Step, Long> {
}
