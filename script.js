var products = [
    {name:"Green Clay", headline:"Beautiful Clay Cushions", price:"900", image:"https://images.unsplash.com/photo-1712431028580-049087ee59d8?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Diamond Button", headline:"Diamond in the black", price:"7800", image:"https://images.unsplash.com/photo-1515526764876-0f3b298ee4ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Comfortable Chair", headline:"Black Chair in BlueBack", price:"1000", image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];
var popular = [
    {name:"Green Clay", headline:"Beautiful Clay Cushions", price:"900", image:"https://images.unsplash.com/photo-1712431028580-049087ee59d8?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Diamond Button", headline:"Diamond in the black", price:"7800", image:"https://images.unsplash.com/photo-1515526764876-0f3b298ee4ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Comfortable Chair", headline:"Black Chair in BlueBack", price:"1000", image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];
var cart = [];

const addPopularProducts=() =>{
    let clutter = "";
    popular.forEach((product)=>{
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">&dollar; ${product.price}</h4>
        </div>
    </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
};
const addPictures = () =>{
    let clutter = "";
    products.forEach((product, index)=>{
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
            <img class ="w-full h-full object-cover" src="${product.image}" />
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                    <h4 class="font-semibold mt-2">&dollar; ${product.price}</h4>
                </div>
                <button data-index ="${index}" class=" add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
                        data-index ="${index}" class=" add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;

};

const addToCart = () =>{
    document.querySelector(".products").addEventListener('click',(e)=>{
        if(e.target.classList.contains('add')){
            cart.push(products[e.target.dataset.index]);
        }
    })
};

const showCart = ()=>{
    document.querySelector(".carticon").addEventListener('click', function(){

        document.querySelector(".cartexpnd").style.display ="block";
        let clutter ="";
        cart.forEach((prod, index)=>{
            clutter +=`<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.image}"/>
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
        </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
        
    })
}
showCart();
addToCart();
addPictures();
addPopularProducts();