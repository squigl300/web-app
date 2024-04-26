import React, { useState } from 'react';

// CreateNutritionPlan component
const CreateNutritionPlan = ({ clientId }) => {
  // State variables for form fields
  const [recommendedCalories, setRecommendedCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [fat, setFat] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/clients/${clientId}/nutrition-plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
        body: JSON.stringify({ recommendedCalories, protein, carbohydrates, fat }),
      });
      // Clear form fields after successful submission
      setRecommendedCalories('');
      setProtein('');
      setCarbohydrates('');
      setFat('');
    } catch (error) {
      console.error('Error creating nutrition plan:', error);
    }
  };

  // Render the create nutrition plan form
  return (
    <div>
      <h2>Create Nutrition Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Recommended Calories"
          value={recommendedCalories}
          onChange={(e) => setRecommendedCalories(e.target.value)}
        />
        <input
          type="number"
          placeholder="Protein (g)"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
        <input
          type="number"
          placeholder="Carbohydrates (g)"
          value={carbohydrates}
          onChange={(e) => setCarbohydrates(e.target.value)}
        />
        <input
          type="number"
          placeholder="Fat (g)"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
        <button type="submit">Create Nutrition Plan</button>
      </form>
    </div>
  );
};

export default CreateNutritionPlan;