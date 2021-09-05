const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
searchBtn.addEventListener('click', getMealList);

function getMealList(){
    let searchInput=document.getElementById('search-input').value.trim();
    console.log(searchInput);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <figure class = "figure" data-id = "${meal.idMeal}">
                        
                            <img src = "${meal.strMealThumb}" alt = "food">
                    
                        <figcaption class="figure-caption">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </figcaption>
                    </figure>
                `;
            });
            mealList.classList.remove('notFound');
        }else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }
        mealList.innerHTML = html;
    });
}