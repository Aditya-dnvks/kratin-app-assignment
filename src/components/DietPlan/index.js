import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const DietPlan = () => {
  const today = new Date();
  const dayNumber = today.getDay();
  let theDayIs = "";
  switch (dayNumber) {
    case 0:
      theDayIs = "Sunday";
      break;
    case 1:
      theDayIs = "Monday";
      break;
    case 2:
      theDayIs = "Tuesday";
      break;
    case 3:
      theDayIs = "Wednesday";
      break;
    case 4:
      theDayIs = "Thursday";
      break;
    case 5:
      theDayIs = "Friday";
      break;
    default:
      theDayIs = "Saturday";
      break;
  }

  return (
    <div>
      <Header />
      <div className="diet-plan-container">
        <h1 className="main-heading"> Your Weekly Diet Chart</h1>
        <p className="diet-plan-description">
          {" "}
          Hi Sunita, We have prepared a Weekly Diabetic diet plan after
          analyzing your health parameters of previous week like BMI, Blood
          Glucose and Blood Pressure. <br />
          We recommend you to follow this diet plan for better health and
          fitness
        </p>
        <p className="today">Today is "{theDayIs}"</p>
        <div className="chart-container">
          <div className="day-plan">
            <p className="day-name"> Sunday </p>
            <p className="food-description">
              <span> Empty Stomach: </span> <br /> 1 glass of overnight soaked
              1tsp methi dana seeds water (You may consume the seeds or may
              consume them during the day as sprouts too). 1 tsp of sunflower
              seeds and pumpkin seeds 6 to 8 almonds, 2 whole walnuts
            </p>
            <p className="food-description">
              <span> Breakfast: </span> <br />2 small vegetable oats uttapam
              (oats, capsicum, onion, tomato). 1 cup of green tea or 1 glass of
              buttermilk.
            </p>
            <p className="food-description">
              <span>Lunch: </span> <br />
              Salad (vegetables)- 1 quarter plate OR Chicken salad (no
              mayonnaise base dressing) Chapati ( whole wheat flour with wheat
              bran): 2 numbers Vegetable-1 cup Mix dal-1 cup Low-fat curd
              (vegetable raita)- 1 cup/ 1 glass
            </p>
            <p className="food-description">
              <span>Snack: </span> <br /> Roasted channa and murmura-1 cup
            </p>
            <p className="food-description">
              <span> Dinner: </span> <br /> Tomato shorba - 1 cup Salad - 1
              quater plate Brown Rice - 3/4th cup OR Egg vegetable rice (brown
              rice) Soya bean curry - 1 cup Green Leafy Vegetable - 1 cup
            </p>
          </div>
          <div className="day-plan">
            <p className="day-name"> Monday </p>
            <p className="food-description">
              <span> Empty Stomach: </span> <br />
              Soaked Methi seeds water - 1 glass Cinnamon water - 1/2 teaspoon
              cinnamon + 1 glass warm water Sunflower seeds and pumpkin seeds -
              1 tsp 6 to 8 almonds, 2 whole walnuts
            </p>
            <p className="food-description">
              <span> Breakfast: </span> <br /> 2 medium-sized ragi, urad dal and
              oats dosa with vegetable stuffing with sambhar (add lots of
              vegetables) and peanut chutney. Non-veg option: Chicken vegetable
              sourdough sandwich – 1 Coffee (No sugar) - 1 cup
            </p>
            <p className="food-description">
              <span>Lunch: </span> <br /> Salad - 1 quarter plate Misi roti
              (channa atta added) 2 (medium size) Green leafy vegetable (gajar
              methi) 1 cup Matar paneer gravy- 1 cup OR Kadhai chicken (less
              oil) add capsicums, tomatoes and onions
            </p>
            <p className="food-description">
              <span>Snack: </span> <br /> Soya granules poha (1 cup) OR chicken
              soup
            </p>
            <p className="food-description">
              <span> Dinner: </span> <br /> Salad - 1 quater plate Mix veg soup
              - 1 bowl 1 cup multigrain daliya with dal and vegetables
            </p>
            <div> </div>
          </div>
          <div className="day-plan">
            <p className="day-name"> Tuesday </p>
            <p className="food-description">
              <span> Empty Stomach: </span> <br /> 1/2 teaspoon cinnamon + 1
              glass warm water 1 glass of soaked methi seeds water Almonds 6-8
              Walnuts 2 full
            </p>
            <p className="food-description">
              <span> Breakfast: </span> <br /> 2 small besan cheela stuffed with
              vegetables (capsicum, onion, tomato) Green Tea (no honey) 1 cup
            </p>
            <p className="food-description">
              <span>Lunch: </span> <br /> Salad-1 quarter plate 2 Cauliflower
              stuffed whole wheat chapatti (wheat bran added) Brinjal bharta - 1
              cup Kala chana gravy - 1cup Buttermilk - 1 glass
            </p>
            <p className="food-description">
              <span>Snack: </span> <br /> A handfull of roasted soya nuts;
              coconut water with chia seeds
            </p>
            <p className="food-description">
              <span> Dinner: </span> <br /> Salad - 1 quarter plate full
              Mushroom soup - 1 bowl OR Lemon coriander chicken soup - 1 bowl
              Foxtail millet khichdi (Foxtailmillets +moongdal+vegetables)- 1
              cup
            </p>
          </div>
          <div className="day-plan">
            <p className="day-name"> Wednesday </p>
            <p className="food-description">
              <span> Empty Stomach: </span> <br /> Cinnamon water: 1/2 teaspoon
              cinnamon powder + 1 glass warm water Soaked Methi seeds water - 1
              glass Sunflower and pumpkin seeds - 1 tsp 6-8 almonds 2 walnuts
            </p>
            <p className="food-description">
              <span> Breakfast: </span> <br /> Cottage cheese sourdough bread
              vegetable sandwich: 2 slices with coriander chutney
            </p>
            <p className="food-description">
              <span>Lunch: </span> <br /> Vegetable salad - 1 quarter plate
              Brown rice - 1/2 cup Bhindi - 1 cup Rajma curry - 1 cup Veg raita
              - 1 glass
            </p>
            <p className="food-description">
              <span>Snack: </span> <br /> Green Tea (no honey) 1 cup Chana dal
              kebabs (pan-roasted) with mint chutney: 2 or Soya granules poha (1
              cup)
            </p>
            <p className="food-description">
              <span> Dinner: </span> <br /> Green Salad with feta cheese - 1
              quarter plate Lentil soup - 1 bowl Barley (jau) Millet khichdi
              (barley +vegetables) - 1cup Ghia raita - 1 cup
            </p>
          </div>
          <div className="day-plan">
            <p className="day-name"> Thursday </p>
            <p className="food-description">
              <span> Empty Stomach: </span> <br /> 1 tsp Chia seeds soaked in 2
              glasses of water Soaked methi seeds water -1 glass Sunflower and
              pumpkin seeds - 1tsp 2 walnuts 5-6 unsalted pista
            </p>
            <p className="food-description">
              <span> Breakfast: </span> <br /> Vegetable Poha (Brown Rice Poha),
              add roasted peanuts and sprouts
            </p>
            <p className="food-description">
              <span>Lunch: </span> <br /> Sauté vegetables with tofu (bell
              peppers + zucchini + broccoli + beans) - 1 quarter plate
            </p>
            <p className="food-description">
              <span>Snack: </span> <br /> Smoothie - 1 glass Make it with 2
              slices of green apple with peel + 2 slices pineapple + baby
              spinach + goose berry + celery
            </p>
            <p className="food-description">
              <span> Dinner: </span> <br /> Bottle gourd soup - 1 cup Whole
              wheat pasta with vegetables in arrabbiata sauce
            </p>
          </div>
          <div className="day-plan">
            <p className="day-name"> Friday </p>
            <p className="food-description">
              <span> Empty Stomach: </span> <br /> Chia seeds soaked in water
              1tsp amla juice Soaked methi seeds water - 1glass Nuts and seeds
              as mentioned above
            </p>
            <p className="food-description">
              <span> Breakfast: </span> <br /> 2 Adai dosa with coconut chutney
              and sambhar (add vegetables)
            </p>
            <p className="food-description">
              <span>Lunch: </span> <br /> Dry moong dal salad (Green moong dal
              boiled and vegetables) - 1 cup
            </p>
            <p className="food-description">
              <span>Snack: </span> <br /> Roasted Makhana and peanuts mix - a
              handful
            </p>
            <p className="food-description">
              <span> Dinner: </span> <br /> Tomato soup - 1 cup Sweet corn,
              avocado, and vegetable salad -1 quarter plate Mexican brown rice
              with beans and sauté vegetables - 1 cup
            </p>
          </div>
          <div className="day-plan">
            <p className="day-name"> Saturday </p>
            <p className="food-description">
              <span> Empty Stomach: </span> <br /> Cinnamon water - 1 glass
              Soaked Methi seeds water - 1 glass Nuts and seeds (as mentioned
              above)
            </p>
            <p className="food-description">
              <span> Breakfast: </span> <br /> Besan /moong dal dhokla
            </p>
            <p className="food-description">
              <span>Lunch: </span> <br /> Salad - 1 cup Jowar roti - 2 (medium
              size) Sarson saag / green vegetables - 1 cup Arhar dal - 1 cup
              Curd - 1 cup
            </p>
            <p className="food-description">
              <span>Snack: </span> <br /> Sugar-free yogurt: 1 cup
            </p>
            <p className="food-description">
              <span> Dinner: </span> <br /> Lemon coriander soup - 1 bowl
              Multigrain dosa or millet dosa - 2 small Coconut chutney - 2
              tablespoons Sambhar - 1 cup
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DietPlan;
