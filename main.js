

// ****************************************
// Home Page
// ****************************************






// *****************************************
// Bio Page
// *****************************************






// *****************************************
// Merchandise Page
// *****************************************
const SoreThroatProducts = [
    {
        product: "Shirt",
        description: "Long Sleeve Shirt",
        detail: "Graphic on the front",
        price: "45.00",
        productImg: "https://m.media-amazon.com/images/I/A1nYNISnPeL._CLa%7C2140,2000%7CA1nqcYC+woL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.UX342.png",
    },
    { 
        product: "Shirt",
        description: "Short Sleeve Shirt",
        detail: "Graphic on the front",
        price: "25.00",
        productImg: "https://m.media-amazon.com/images/I/B1pDnrUmaHS._CLa%7C2140%2C2000%7C61bZag4o3cL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0.UL1500.png",
    }, 
    {
        product: "Accessories",
        description: "Bandana",
        detail: "Jersey material, MultiColored",
        price: "15.00",
        productImg: "https://cdn.shopify.com/s/files/1/0971/6442/products/BAJA_GRID_FT-S1_800x.jpg?v=1502819663",
    },
    { 
        product: "Accessories",
        description: "Trucker Hat",
        detail: "Graphic on the front of lady",
        price: "25.00",
        productImg: "https://rlv.zcache.com/rock_chick_glasses_trucker_hat-rf30f012c74ca4f32a20c7b259f7e4fb4_eahwr_8byvr_522.jpg?rvtype=content",
    }
    ]


const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
    };

document.getElementById("dropdownMenu2").addEventListener('click',(event) =>{
console.log(event)
});

const productBuilder = (prodArrays) => {
    let domString = '';
    for (i = 0; i < prodArrays.length; i++){
        const prodArray = prodArrays[i];
        domString +=`
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${prodArray.product}</h5>
        <p class="card-text">${prodArray.description} ${prodArray.detail}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `
    }
    printToDom('productCardSection', domString)
}

productBuilder(SoreThroatProducts)


// *****************************************
// Newsletter Page
// *****************************************
