import { MEALS } from "../../data/dummy-data"
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState={
    meals: MEALS
    ,
    filteredMeals: MEALS
    ,
    favouriteMeals:[]
}

const mealsReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favouriteMeals.findIndex(meal=>meal.id===action.mealId)
            if(existingIndex >=0)
            {
                const updatedFavMeals = [...state.favouriteMeals]
                updatedFavMeals.splice(existingIndex,1)
                return{...state,favouriteMeals: updatedFavMeals}
            }
            else{
                return{...state,favouriteMeals:state.favouriteMeals.concat(state.meals.find(meal=>meal.id ===action.mealId))}
            }
        case SET_FILTERS:
            const appliedFilters=action.filters;
            const updatedFilteredMeals = state.meals.filter(
                meal=>{
                    if(appliedFilters.glutenFree && !meal.isGlutenFree)
                    {
                        return false
                    }
                    if(appliedFilters.lactosFree && !meal.isLactoseFree)
                    {
                        return false
                    }     
                    if(appliedFilters.veganFree && !meal.isVegan)
                    {
                        return false
                    }
                    return true
                }
            );
            return {...state,filteredMeals:updatedFilteredMeals}
        default:
            return state

    }
}

export default mealsReducer;