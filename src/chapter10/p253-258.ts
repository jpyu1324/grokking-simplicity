interface Food {}
interface Dish {}

declare function cook(food: Food);
declare function eat(food: Food);
declare function wash(dish: Dish);
declare function dry(dish: Dish);
declare function putAway(dish: Dish);

function cookAndEatFoods(foods: Food[]) {
  foods.forEach((food) => {
    cook(food);
    eat(food);
  });
}

function cleanDishes(dishes: Dish[]) {
  dishes.forEach((dish) => {
    wash(dish);
    dry(dish);
    putAway(dish);
  });
}

////////////////////////////////////////

function forEach<T>(array: T[], f: (t: T) => void) {
  array.forEach(f);
}

function cookAndEat(food: Food) {
  cook(food);
  eat(food);
}

function clean(dish: Dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

forEach(new Array<Food>(), cookAndEat);
forEach(new Array<Dish>(), clean);

////////////////////////////////////////

forEach(new Array<Food>(), function (food: Food) {
  cook(food);
  eat(food);
});

forEach(new Array<Dish>(), function (dish: Dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
});

export default {};
