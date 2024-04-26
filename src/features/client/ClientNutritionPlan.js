import React, { useEffect, useState } from 'react';

// ClientNutritionPlan component
const ClientNutritionPlan = ({ clientId }) => {
  // State variable for nutrition plan data
  const [nutritionPlan, setNutritionPlan] = useState(null);

  // Fetch nutrition plan data on component mount and when clientId changes
  useEffect(() => {
    fetchNutritionPlan();
  }, [clientId]);

  // Function to fetch nutrition plan data from the server
  const fetchNutritionPlan = async () => {
    try {
      const response = await fetch(`/api/clients/${clientId}/nutrition-plan`, {
        headers: {
          'Authorization': 'Bearer <token>', // Replace <token> with the actual token
        },
      });
      const data = await response.json();
      setNutritionPlan(data);
    } catch (error) {
      console.error('Error fetching nutrition plan:', error);
    }
  };

  // Render the client nutrition plan
  return (
    <div>
      <h2>Client Nutrition Plan</h2>
      {nutritionPlan ? (
        <>
          <p>Recommended Calories: {nutritionPlan.recommendedCalories}</p>
          <p>Protein: {nutritionPlan.protein}g</p>
          <p>Carbohydrates: {nutritionPlan.carbohydrates}g</p>
          <p>Fat: {nutritionPlan.fat}g</p>
          {/* Display other nutrition plan details */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ClientNutritionPlan;