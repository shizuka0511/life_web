const menu =document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('bdoy')

// dispay mobelie menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')

}

menu.addEventListener('click',mobileMenu)

// animation 

// meal choice
const meat = document.querySelector("#anything");
const diets = document.querySelectorAll(".diet");

const result = document.querySelector(".m_result");
const noResult = document.querySelector(".no-result");

diets.forEach(diet => {
    diet.addEventListener("click", () => {
        document.querySelector(".diet.selected")?.classList.remove("selected")
        diet.classList.toggle("selected");
    })
})

// cal
const caloriesInput = document.querySelector("#calories");

// foods

const apple = {
    food: "apple",
    calories: 95,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>apple(1) - 95cal</figcaption>
    </figure>`
};

const avocado = {
    food: "avocado",
    calories: 320,
    displayResult: `<figure class="result-list">
    <figcaption>avocado(1) - 320cal</figcaption>
    </figure>`
};

const banana = {
    food: "banana",
    calories: 111,
    displayResult: `<figure class="result-list">
   
    <figcaption>banana(1) - 111cal</figcaption>
    </figure>`
};

const fruitSalad = {
    food: "fruit salad",
    calories: 125,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>fruit salad(249g) - 125cal</figcaption>
    </figure>`
};

const fishAndChips = {
    food: "fish and chips",
    calories: 585,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>fish and chips(300g) - 585cal</figcaption>
    </figure>`
};

const friedRice = {
    food: "fried rice",
    calories: 662,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>fried rice(356g) - 662cal</figcaption>
    </figure>`
};

const instantNoodle = {
    food: "instant noodle",
    calories: 380,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>instant noodle(85g) - 380cal</figcaption>
    </figure>`
};

const lettuce = {
    food: "lettuce",
    calories: 90,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>lettuce(600g) - 90cal</figcaption>
    </figure>`
};

const potato = {
    food: "potato",
    calories: 164,
    displayResult: ` <figure class="result-list">
    <img src="" alt="">
    <figcaption>potato(213g) - 164cal</figcaption>
    </figure>`
    
};

const hotChocolate = {
    food: "hot chocolate",
    calories: 237,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>hot chocolate(266g) - 237cal</figcaption>
    </figure>`
};

const milk = {
    food: "milk",
    calories: 149,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>milk(244g) - 149cal</figcaption>
    </figure>`
};

const oatmeal = {
    food: "oatmeal",
    calories: 636,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>oatmeal(175g) - 656cal</figcaption>
    </figure>`
};

const cherryTomato = {
    food: "cherry tomato",
    calories: 200,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>cherry tomato(10) - 200cal</figcaption>
    </figure>`
};

const mushroom = {
    food: "mushroom",
    calories: 20,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>mushroom(100g) - 20cal</figcaption>
    </figure>`
};

const beefRibs = {
    food: "beef ribs",
    calories: 200,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>beef ribs(225g) - 536cal</figcaption>
    </figure>`
};

const chickenDrumstick = {
    food: "chicken drumstick",
    calories: 360,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>chicken drumstick(200g) - 360cal</figcaption>
    </figure>`
};

const groundBeef = {
    food: "ground beef",
    calories: 172,
    displayResult: `<figure class="result-list">
    <img src="" alt="">
    <figcaption>ground beef(70g) - 172cal</figcaption>
    </figure>`
};

const threeBeanSalad = {
    food: "three-bean salad",
    calories: 90,
    displayResult: `<figure class="result-list">
<figcaption>three-bean salad (1/2 cup) - 90cal</figcaption>
</figure>`
}
const lampChop = {
    food: "lamb chop",
    calories: 128,
    displayResult: `<figure class="result-list">
    <figcaption>lamb chop(28g) - 128cal</figcaption>
    </figure>`
};
const Salmon = {
    food: "salmon",
    calories: 50,
    displayResult: `<figure class="result-list">
    <figcaption>salmon(28g) - 50cal</figcaption>
    </figure>`
};
const porkChop = {
    food: "pork chop",
    calories: 75,
    displayResult: `<figure class="result-list">
    <figcaption>pork chop(28g) - 75cal</figcaption>
    </figure>`
};
const turkeyHotdog = {
    food: "turkey hotdog",
    calories: 45,
    displayResult: `<figure class="result-list">
    <figcaption>turky hotdog(28g) - 45cal</figcaption>
    </figure>`
};
const shrimps= {
    food: "shrimps",
    calories: 30,
    displayResult: `<figure class="result-list">
    <figcaption>shrimps(28g) - 30cal</figcaption>
    </figure>`
};
const caviar = {
    food: "caviar",
    calories: 72,
    displayResult: `<figure class="result-list">
    <figcaption>caviar(28g) - 72cal</figcaption>
    </figure>`
};
const lobster = {
    food: "lobster",
    calories: 33,
    displayResult: `<figure class="result-list">
    <figcaption>lobster(28g) - 33cal</figcaption>
    </figure>`
};
const rawOyster = {
    food: "raw oyster",
    calories: 8,
    displayResult: `<figure class="result-list">
    <figcaption>raw oyster(55g) - 8cal</figcaption>
    </figure>`
};
const redpepper = {
    food: "red pepper",
    calories: 39,
    displayResult: `<figure class="result-list">
    <figcaption>red pepper(55g) - 39cal</figcaption>
    </figure>`
};
const greenpepper = {
    food: "green pepper",
    calories: 17,
    displayResult: `<figure class="result-list">
    <figcaption>green pepper(55g) - 17cal</figcaption>
    </figure>`
};
const cannedGreenBean = {
    food: "canned green bean",
    calories: 46,
    displayResult: `<figure class="result-list">
    <figcaption>canned green bean(91g) - 172cal</figcaption>
    </figure>`
};
const beetroot = {
    food: "beetroot",
    calories: 60,
    displayResult: `<figure class="result-list">
    <figcaption>beetroot(91g) - 60cal</figcaption>
    </figure>`
};
const tomato= {
    food: "tomato",
    calories: 26,
    displayResult: `<figure class="result-list">
    <figcaption>tomato(55g) - 26cal</figcaption>
    </figure>`
};

const anythingList = [groundBeef, chickenDrumstick, beefRibs, mushroom, oatmeal, milk, potato, 
    lettuce, instantNoodle, friedRice, fishAndChips, fruitSalad, banana, avocado, apple, threeBeanSalad, tomato, beetroot, cannedGreenBean, 
    greenpepper, redpepper, rawOyster, caviar, shrimps, porkChop, Salmon, lampChop];

 

 // cal anyting 

 const calAny = (desiredCal) => {
    let calBk = 0;
    let calL = 0;
    let calD =0;
    let index, randomFood;
    while (calBk < desiredCal*(2/10) - 100) {
        index = Math.floor(Math.random() * anythingList.length);
        randomFood = anythingList[index];
        document.querySelector(".result-list-container-breakfast").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calBk += randomFood.calories;
    }
    while (calL < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * anythingList.length);
        randomFood = anythingList[index];
        document.querySelector(".result-list-container-lunch").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calL += randomFood.calories;
    }
    while (calD < desiredCal*(3/10) - 100) {
        index = Math.floor(Math.random() * anythingList.length);
        randomFood = anythingList[index];
        document.querySelector(".result-list-container-dinner").insertAdjacentHTML("beforeend", randomFood.displayResult);
        calD += randomFood.calories;
    }
    let cal = calBk + calL + calD;
    document.querySelector(".breakfast-calories").textContent = calBk;
    document.querySelector(".lunch-calories").textContent = calL;
    document.querySelector(".dinner-calories").textContent = calD;
    document.querySelector(".total-calories").textContent = cal;
    if (calBk + calD + calL != 0) {
        noResult.innerHTML = "";
    } 
    
}


// start and reset
document.querySelector(".start").addEventListener("click", () => {
    if (meat.classList.contains("selected")) {
        calAny(caloriesInput.value);
        document.querySelector(".start").classList.add("hide");
    }

}
)


document.querySelector(".reset").addEventListener("click", () => {
    location.reload();
})