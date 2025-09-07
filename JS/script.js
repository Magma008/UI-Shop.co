const upperClose = document.querySelector(".upperClose")
const upper = document.querySelector(".upper")
const miniBar = document.querySelector(".miniBar")
const menuOpener = document.querySelector("#menuOpener")
const closeInput = document.querySelector("#closeInput")
const navSearch = document.querySelector(".navSearch")
const miniSearchBar = document.querySelector(".miniForm")
const cardGrid = document.querySelector(".cardGroup")
const cardGrid1 = document.querySelector(".cardGroup1")



// @ Closes the upper bar.
const closeUpper = () => {
    upper.style.display = "none"
}

// @ Mini Navbar Opener
const isOpen = () => {
    miniBar.classList.toggle("opener")
    menuOpener.classList.toggle("rotated")
}

// @ Mini Searchbar Opener and Closer
const miniInput = (request) => {
    if (request == "open") {
        miniSearchBar.style.top = "60px"
    } else if (request == "close") {
        miniSearchBar.style.top = "-150px"
    }
}


// @ Mapping Cards
const cardLoader = (datas, parentElem) => {
    datas.map((info, i) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <div  class="card">
            <div class="cardImage">
                <img src="${info.thumbnail}" alt="card-image-${i}">
            </div>
            <div class="cardBody">
                <h4>${info.title}</h4>
                <div class="stars">
                    ${info.stars}
                    <span>${info.starsNum}/5</span>
                </div>
                <div class="cardPrice">
                    <p>$${!info.onDiscount ? info.price : info.discountedPrice}</p>
                    <p class="dsPrice ${!info.onDiscount ? "hidden" : ""}">$${info.price}</p>
                    <p class="dsPercent ${!info.onDiscount ? "hidden" : ""}">-${info.discount}%</p>
                </div>
                <div class="cardButton">
                    <button>Add to cart 🛒</button>
                </div>
            </div>
        </div>
        `
        parentElem.appendChild(card)
    })
}

cardGrid.innerHTML = ""
cardLoader(newArrivals, cardGrid)
cardLoader(topSelling, cardGrid1)

// ! Swiper JS Code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    },
    autoHeight: true,
  });