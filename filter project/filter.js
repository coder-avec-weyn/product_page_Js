//jshint esversion :6
const data= [
    {
        id:1,
        name: "Anime Chibi Nartuo Design",
        img:"https://m.media-amazon.com/images/I/81Lx3cD6HQL._SY450_.jpg",
        price: 74,
        cat : "Naruto",

    },
    {
        id:11,
        name: "Kakashi Hatake Wall Poster",
        img:"https://m.media-amazon.com/images/I/81wnU235geL._SY450_.jpg",
        price: 74,
        cat : "Naruto",

    },
    {
        id:2,
        name: "Fourth Hokage Poster",
        img:"https://m.media-amazon.com/images/I/61O4NR5hi6L._SY679_.jpg",
        price: 40,
        cat : "Sport",

    },
    {
        id:3,
        name: "Blue lock volume 1 ebook poster",
        img:"https://m.media-amazon.com/images/I/51jMLFs0YBL.jpg",
        price: 200,
        cat : "Blue Lock",

    },
    {
        id:4,
        name: "Blue lock volume 11 poster",
        img:"https://m.media-amazon.com/images/I/51YqGhQtuWL.jpg",
        price: 16,
        cat : "Blue Lock",

    },
    {
        id:5,
        name: "Dabi Blue Flames poster",
        img:"https://m.media-amazon.com/images/I/61Ol+r+EGIL._SY606_.jpg",
        price: 74,
        cat : "My Hero Academia",

    },

    {
        id:6,
        name: "Ayanokoji Decorative Painting",
        img:"https://images-cdn.ubuy.co.in/634e443d239beb197f3febd3-gsjj-ayanokoji-classroom-of-the-elite.jpg",
        price: 74,
        cat : "Classroom of the elite",

    }

    
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(
        (product) =>
        ` 
            <div class="product">
            <img src=${product.img}  alt="">
            <span class="name">${product.name}</span>
            <span class="price">$${product.price}</span>
            </div> 
        `
    ).join("");
};
displayProducts(data);

searchInput.addEventListener("keyup",(e)=>
{
    const value = e.target.value.toLowerCase();
    if(value)
    {
        displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value)!== -1))
    }
    else{
        displayProducts(data);
    }
});

const setCategories = () => {
    const allCats = data.map(item => item.cat);
 const categories =  ["All",
    ...allCats.filter((item,i)=>{
        return allCats.indexOf(item)==i
    }),
    ];
    categoriesContainer.innerHTML = categories.map(cat=>
        `
        <span class="cat">${cat}</span>
        `).join("");

    categoriesContainer.addEventListener("click",(e)=>{
        const selectedCategory= e.target.textContent;
        selectedCategory === "All" 
        ? displayProducts(data) 
        : displayProducts(data.filter(item=> item.cat === selectedCategory))
    })
}

const setPrices = () =>{
    const priceList = data.map(item => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$"+maxPrice;

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "$"+ e.target.value;
        displayProducts(data.filter(item=>item.price <= e.target.value));

    });
};
setPrices();
setCategories(data);