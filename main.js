const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
};

// ****************************************
// Home Page
// ****************************************






// *****************************************
// Bio Page
// *****************************************

const bandMemberArr = [
    {
    memberImg: "https://www.syfy.com/sites/syfy/files/styles/1140x640/public/2019/05/punk_sailor_neptune_-_christina_grande.jpg",
    memberName: 'Denise Deville',
    memberRole: 'Violinist',
    memberJoinDate: 'January 1999'
    },
    {
    memberImg: "https://www.bitchmedia.org/sites/default/files/u1952/01_h.jpg",
    memberName: 'Jasmine Jamhardest',
    memberRole: 'Drummer',
    memberJoinDate: 'January 1999'
    },
    {
    memberImg: "https://52f073a67e89885d8c20-b113946b17b55222ad1df26d6703a42e.ssl.cf2.rackcdn.com/TT-16_alw.jpg",
    memberName: 'Alesha Allgood',
    memberRole: 'Pianist/Vocalist',
    memberJoinDate: 'January 1999'
    },
    {
    memberImg: "https://images.megapixl.com/4095/40951439.jpg",
    memberName: 'Crystal Cantbehave',
    memberRole: 'Guitarist/Vocalist',
    memberJoinDate: 'January 1999'
    },
]

const bandMemberPrinter = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        const thisObject = arr[i];
        domString +=
        `
        <div class="col-3">
            <div class="card">
            <img src="${thisObject.memberImg}" class="card-img-top img-fluid max-width: 100%" alt="...">
            <div class="card-body">
                <h5 class="card-title">${thisObject.memberName}</h5>
                <p class="card-text">${thisObject.memberRole}</p>
                <p class="card-text">${thisObject.memberJoinDate}</p>
                <a href="#" class="btn btn-secondary">About Me</a>
            </div>
            </div>
        </div>
        `
    }
    printToDom('bandMemberCardHolder', domString);
};

//bandMemberPrinter(bandMemberArr);

// *****************************************
// Merchandise Page
// *****************************************
const SoreThroatProducts = [
    {
        product: "Apparel",
        description: "Long Sleeve Shirt",
        detail: "Graphic on the front",
        price: "$45.00",
        productImg: "https://m.media-amazon.com/images/I/A1nYNISnPeL._CLa%7C2140,2000%7CA1nqcYC+woL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.UX342.png",
    },
    { 
        product: "Apparel",
        description: "Short Sleeve Shirt",
        detail: "Graphic on the front",
        price: "$25.00",
        productImg: "https://m.media-amazon.com/images/I/B1pDnrUmaHS._CLa%7C2140%2C2000%7C61bZag4o3cL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0.UL1500.png",
    }, 
    {
        product: "Accessories",
        description: "Bandana",
        detail: "Jersey material, MultiColored",
        price: "$15.00",
        productImg: "https://cdn.shopify.com/s/files/1/0971/6442/products/BAJA_GRID_FT-S1_800x.jpg?v=1502819663",
    },
    { 
        product: "Accessories",
        description: "Trucker Hat",
        detail: "Graphic on the front of lady",
        price: "$25.00",
        productImg: "https://rlv.zcache.com/rock_chick_glasses_trucker_hat-rf30f012c74ca4f32a20c7b259f7e4fb4_eahwr_8byvr_522.jpg?rvtype=content",
    }
    ]

    
 
//document.getElementById("dropdownMenu2").addEventListener('click',(event) =>{

const productBuilder = (prodArrays) => {
            
                let domString = '';
                for (i = 0; i < prodArrays.length; i++){
                    const prodArray = prodArrays[i];
                    domString +=`
                    <div class = "col-3">
                    <div class="card">
                    <img src="${prodArray.productImg}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${prodArray.product}</h5>
                    <p class="card-text">${prodArray.description} ${prodArray.detail}</p>
                    <a href=# class="btn btn-primary">Price ${prodArray.price}</a>
                    </div>
                    </div>
                    </div>
                    `;
                }
          printToDom('productCardSection', domString)
        };
        
   

document.getElementById('productsBtn').addEventListener('click', (e) =>{
    
    const productValue = e.target.value;
    //only get zoees's pies for the list of all the pies
    const selectedProducts = [];
    
    for (i = 0; i < SoreThroatProducts.length; i++){
        const soreThroatProduct = SoreThroatProducts[i];
        console.log(event)
        if (soreThroatProduct.product === productValue){
            selectedProducts.push(soreThroatProduct);
        };

    };
    //pass small list of pies back into the pie builder
    productBuilder(selectedProducts)
});
document.getElementById('productsBtn2').addEventListener('click', (e) =>{
    
    const productValue = e.target.value;
    //only get zoees's pies for the list of all the pies
    const selectedProducts = [];
    
    for (i = 0; i < SoreThroatProducts.length; i++){
        const soreThroatProduct = SoreThroatProducts[i];
        console.log(event)
        if (soreThroatProduct.product === productValue){
            selectedProducts.push(soreThroatProduct);
        };

    };
    //pass small list of pies back into the pie builder
    productBuilder(selectedProducts)
});
document.getElementById('productsBtn3').addEventListener('click', (e) =>{
    
    const productValue = e.target.value;
    //only get zoees's pies for the list of all the pies
    const selectedProducts = [];
    
    for (i = 0; i < SoreThroatProducts.length; i++){
        const soreThroatProduct = SoreThroatProducts[i];
        console.log(event)
        if (soreThroatProduct.product === productValue){
            selectedProducts.push(soreThroatProduct);
        };

    };
    //pass small list of pies back into the pie builder
    productBuilder(selectedProducts)
});

// *****************************************
// Newsletter Page
// *****************************************












// const init = () => {
//     if(document.URL.includes('merchandise')){
//         productBuilder(selectedProducts);
//     } else if(document.URL.includes('bio')){
//       cbandMemberPrinter(bandMemberArr);
//     };
//   };

//   init();

  