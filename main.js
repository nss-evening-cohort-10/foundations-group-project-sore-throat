const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
};
const printToDom2 = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
};

// ****************************************
// Home Page
// ****************************************
const tourDates = [
    {Venue: 'GRAND OLE OPRY',
    Location: 'NASHVILLE, TN',
    Date: '09/28/2019'},
    {Venue:'MERCEDES BENZ STADIUM',
    Location: 'ATLANTA, GA',
    Date: '10/04/2019'},
    {Venue: 'BASS CONCERT HALL',
    Location: 'AUSTIN, TX',
    Date: '10/10/2019' },
    {Venue: 'RED ROCKS AMPHITHEATRE',
    Location: 'MORRISON, CO',
    Date: '10/17/2019'},
    {Venue: 'HOLLYWOOD BOWL',
    Location: 'LOS ANGELES, CA',
    Date: '10/28/2019'},
    {Venue: 'CENTURYLINK FIELD',
    Location: 'SEATTLE, WA',
    Date: '11/05/2019'},
    {Venue: 'RADIO CITY MUSIC HALL',
    Location: 'NEW YORK, NY',
    Date: '11/13/2019'},
    {Venue: 'FENWAY PARK',
    Location: 'BOSTON, MA',
    Date: '11/24/2019'} 
];

const printTourDates = (datesArray) => {
    let domString = ``
    for (i = 0; i < datesArray.length; i++) {
        let concert = datesArray[i]
        domString += `
        <p><div class="row ">
        <div class="col-3 location">
        ${concert.Venue}
        </div>
        <div class="col-3 location">
        ${concert.Location}
        </div>
        <div class="col-2 date">
        ${concert.Date}
        </div>
        <div class="col-4">
        <button class='btn tick-btn'>Buy Tickets</button>
        </div>
        </div></p>
        `
    } printToDom('dates-holder', domString);
};
//printTourDates(tourDates);





// *****************************************
// Bio Page
// *****************************************

const bandMemberArr = [
    {
    memberImg: "https://www.syfy.com/sites/syfy/files/styles/1140x640/public/2019/05/punk_sailor_neptune_-_christina_grande.jpg",
    memberName: 'Denise Deville',
    memberRole: 'Violinist',
    memberJoinDate: 'January 1999',
    memberInfo: 'I have been playing the violin ever since I was 3 years old. I am inspired by the classics.'
    },
    {
    memberImg: "https://www.bitchmedia.org/sites/default/files/u1952/01_h.jpg",
    memberName: 'Jasmine Jamhardest',
    memberRole: 'Drummer',
    memberJoinDate: 'January 1999',
    memberInfo: 'I have been smashing around on things since I was 18 months old.  I first started drumming when I got to middle school.'
    },
    {
    memberImg: "https://52f073a67e89885d8c20-b113946b17b55222ad1df26d6703a42e.ssl.cf2.rackcdn.com/TT-16_alw.jpg",
    memberName: 'Alesha Allgood',
    memberRole: 'Pianist/Vocalist',
    memberJoinDate: 'January 1999',
    memberInfo: 'I decided when I was 13 that I would like to try picking up an instrument and fell in love with Piano.'
    },
    {
    memberImg: "https://images.megapixl.com/4095/40951439.jpg",
    memberName: 'Crystal Cantbehave',
    memberRole: 'Guitarist/Vocalist',
    memberJoinDate: 'January 1999',
    memberInfo: 'Started playing the guitar in my room after being introduced to Metallica and Nirvana.'
    },
]

const addAboutMeListener = () => {
    const allAboutMeButtons = document.querySelectorAll('.aboutMeBtn');
    for (let i = 0; i < allAboutMeButtons.length; i++) {
        allAboutMeButtons[i].addEventListener('click', (e) => {
            let target = e.target.divId;
            alert('clicked the about button');
            // const memberText = document.getElementsByClassName('card-text')
            // let domString += '';
        });
    };
};

const bandMemberPrinter = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        const thisObject = arr[i];
        domString +=
        `
        <div class="col-3">
            <div class="card bioCard">
            <img src="${thisObject.memberImg}" class="card-img-top img-fluid max-width: 100%" alt="...">
            <div class="card-body bioCard-body">
                <h5 class="card-title">${thisObject.memberName}</h5>
                <p class="card-text">${thisObject.memberRole}</p>
                <p class="card-text">${thisObject.memberJoinDate}</p>
                <button type="button" class="btn btn-secondary aboutMeBtn" id="button${i}">About Me</button>
                </div>
            </div>
        </div>
        `
    }
    printToDom('bandMemberCardHolder', domString);
    addAboutMeListener();
};

const albumArr = [
    {
    albumName: 'Huh? Say what?',
    releaseDate: 'March 2010',
    songList: ['You Can Do Better', 'Earwax', 'Smashing Drums', 'Whatever', 'Mmmmhmmmmm'],
    albumImage: "https://f4.bcbits.com/img/0010866236_10.jpg"
    },
    {
    albumName: 'Itchy & Scratchy',
    releaseDate: 'June 2005',
    songList: ['Tastes like cotton', 'Try That One More Time', 'Just Another Song', 'Dogs Are Howling', 'Scream On'],
    albumImage: "https://i.etsystatic.com/5142834/r/il/72b7ad/1637278124/il_794xN.1637278124_f1o3.jpg"
    },
    {
    albumName: 'Kleenex is My Best Friend',
    releaseDate: 'July 2019',
    songList: ['Achoooo...', 'Sniff', 'Blow That Horn', 'Puffs Sux', 'Dry it Up!'],
    albumImage: "https://i.pinimg.com/originals/28/54/ce/2854ce6a5efda39b79d43f13d16107be.jpg"
    },
    {
    albumName: 'Cough Drop Dark Side',
    releaseDate: 'October 2018',
    songList: ['Ludens for Everyone', 'Ricola', 'Halls are for Sissies', 'Bring on the Robitussin', 'Mutiny of Mucinex'],
    albumImage: "https://scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-08.jpg"
    },
    {
    albumName: 'Not Dead Yet',
    releaseDate: 'May 2008',
    songList: ['Crazy World', 'Live It Up', 'Yet Another Song', 'Believe It', 'Crackling Voices'],
    albumImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeChAzwhhEPECztK62NJ0v-f9sDtVdpWmxd8rPMqTzJBDYDYL9Qg"
    }
];

const memberSection = document.getElementById('bandMemberSection');
const timelineSec = document.getElementById('timelineSection');

const albumPrinter = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        const thisObject = arr[i];
        domString +=
        `        
        <div class="bioCard albumCard">
        <div class="row">
            <div class="col-4">
            <img src="${thisObject.albumImage}" class="img-thumbnail">
            </div>
            <div class="col-8">
            <div class="bioCard-body">
                <h5 class="card-title">${thisObject.albumName}</h5>
                <ol class="card-text">
                `
                const songs = thisObject.songList;
                for (let j = 0; j < songs.length; j++) {
                    const thisSong = songs[j];
                    domString += 
                    `<li>${thisSong}</li>`
                }
                domString +=
                `            </ol>
                        </div>
                        </div>
                    </div>
                    </div>`
    }
    printToDom2('albumContainer', domString);
};



const discoButtonListener = () => {
        document.getElementById('discography').addEventListener('click', (e) => {
        //when i click the button the following should happen:

        //1. the current content should be hidden
        if (document.getElementById('discography').innerHTML == 'Click for Full Discography') {
            memberSection.style.display = 'none';
            timelineSec.style.display = 'none';
            discoSection.style.display = 'block';
            document.getElementById('discography').innerHTML = 'Click to Go Back To Members';
            albumPrinter(albumArr);
            } else if (document.getElementById('discography').innerHTML == 'Click to Go Back To Members') {
            discoSection.style.display = 'none';
            memberSection.style.display = 'block';
            timelineSec.style.display = 'block';
            document.getElementById('discography').innerHTML = 'Click for Full Discography';
        };
    });
};


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
    },
    {
        product: "Album",
        description: "Tha Clash London Callin",
        detail: "London Calling",
        price: "$25.00",
        productImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrgRxb2JgiYgAr8Cz1_oNJ9d-PMMpnMMj2PvVWUpQH8vBqx1ug0Q",
    },
    {
        product: "Album",
        description: "Stay Tuned...",
        detail: "On the way...",
        price: "$0.00",
        productImg:"data:image/png;base64,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",
    },
    { 
        product: "Apparel",
        description: "Short Sleeve Sweatshirt",
        detail: "Graphic Pretty Punk",
        price: "$25.00",
        productImg: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQi2KrdsQK0tGdkFy4RoJlQ4eMnikHo_j8xds-0krKt1GpVMr-RC5eFF-F2DpYlb845tR3UIHStZKWTs2NDyZV_0hWv_uZopxIjImLL9E8ubydY3pbZiw4r&usqp=CAc",
    }, 
    ]

    const merchPrintToDom = (divId, toPrint) => {
        document.getElementById(divId).innerHTML = toPrint;
    };

    const productBuilder = (prodArrays) => {
        const prodCardSectDiv = document.getElementById('productCardSection');
       // prodCardSectDiv.style.display = 'none';
                let domString = '';
                for (i = 0; i < prodArrays.length; i++){
       //             prodCardSectDiv.style.display = 'inline-block';
                    const prodArray = prodArrays[i];
                    domString +=`
                    <div class = "col-3 ">
                    <div class="merchcard border">
                    <img src="${prodArray.productImg}" class="card-img-top border" id ="merchImgCard" alt="...">
                    <div class="card-body border">
                    <h5 class="card-title border">${prodArray.product}</h5>
                    <p class="card-text border">${prodArray.description} ${prodArray.detail}</p>
                    <a href=# class="btn btn-primary border">Price ${prodArray.price}</a>
                    </div>
                    </div>
                    </div>
                    `;
                }
            merchPrintToDom('productCardSection', domString)
        };
        
   

    const merchListener = () => {
    document.getElementById('merchProdId').addEventListener('click', (e) =>{
        const productValue = e.target.value;
    
    const selectedProducts = [];
    
    for (i = 0; i < SoreThroatProducts.length; i++){
        const soreThroatProduct = SoreThroatProducts[i];
        console.log(event)
        if (soreThroatProduct.product == productValue){
            selectedProducts.push(soreThroatProduct);
        };

    };
    
    productBuilder(selectedProducts)
});


// *****************************************
// Newsletter Page
// *****************************************





 //document.getElementById("dropdownMenu2").addEventListener(click,(event) =>{
 //console.log(event)
 //});

 //document.getElementById("dropdownMenu2").addEventListener(click,(event) =>{
 //console.log(event)
 //});






// *****************************************
// Newsletter Page
// *****************************************




const newsCards = [{
    date: 'June 25, 2019',
    title: 'World Tour Kickoff!',
    info: "Sore Throat kicks off their world tour in Boston with amazing opening act \
        'The Violent Phlegms'.  Check it out!",
     link: 'Read More',
    story: 'Sore Throat embarks on their 23rd world tour with a rocking debut in Boston. \
        THe tour will be 9 months and hit all 7 continents.  Sore Throat is thrilled to be \
        performing for their fans all over the world!'
},
{
    date: 'May 12, 2019',
    title: 'New album!',
    info: "Check out our newest album--'Hack Up A Lung'! We feel it is our best yet!",
    link: 'Read More',
    story: "'We are super stoked about our new album!,' says guitarist Crystal CantBehave.  \
        'We feel this is our best album yet!' 'Hack Up A Lung' will hit the shelves May 15th. \
        Check it out!"
},
{
    date: 'March 23, 2019',
    title: 'New album coming soon!',
    info: "Sore Throat is in the recording studio as of late wrapping\
          up their next album...", 
    link: 'Read More',
    story: 'According to violinist Denise Deville the band is wrapping up their recording sessions \
        for their upcoming album.  "We are super excited about this project!  We don\'t think it \
        will disappoint!'
},
{   
    date: 'February 10, 2019',
    title: 'Sore Throat wins a Grammy!',
    info:  'Sore Throat was thrilled to win their 15th Grammy Award for their last album \
            "Hey! Guess what? Chicken Butt!"...',
    link: 'Read More',
    story: 'Sore Throat wants to give a huge thanks to all of their fans and supporters! \
        Without you this Grammy would not have been possible.  THANK YOU!!!'
},
{
    date: 'December 25, 2018',
    title: 'Happy Holidays!',
    info: 'Sore Throat wants to wish all of our fans a happy holiday season.  You are \
        the best fans in the world!',
    link: 'Read More',
    story: 'Happy Holidays everyone!  We wish you a peaceful holiday season!'
},
{
    date: 'November 10, 2018',
    title: 'New album coming soon!',
    info: 'Sore Throat began working on a new album today. This will be their 23rd album.',
    link: 'Read More',
    story: 'Sore Throat entered the recording studio today.  Keep your ears posted for more info \
        coming soon!'
}];


const printToDomSpecial = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
}

 const submitButton = () => {
    document.getElementById('news-submit-button').addEventListener('click', (e) => {
    alert('You have been added to the mailing list. Not!');
})
 }
const writeCards = (cardArray) => {
    let cardString = '';
    for (let i = 0; i < cardArray.length; i++) {
        let cards = cardArray[i];
        cardString += `
        <div class="card-wrapper" id="flip-card">
          <div id="flip-card-inner" class="card card-rotating text-center no-border">

            <div class="face-front" id="flip-card-front">
                <div id="cardBox" class="no-pad col-sm-4">   
                    <div class="card text-white bg-dark mb-3" id="news-card" >
                        <h5 class="card-title" id="news-card-date">${cards.date}</h5>
                        <h6 id="news-card-title">${cards.title}</h6>
                        <p class="card-text" id="news-card-info">${cards.info}</p>
                        <a data-card="card-1" id="news-card-link">${cards.link}</a>
                    </div>
                </div>
            </div>
            <div class="face-back" id="flip-card-back">
              
                <div class="card text-white bg-dark mb-3" id="news-card-2" >
                    <p id="card-back-info">${cards.story}</p>
                    
                </div>

              
            </div>
    
          </div>
        </div>
        `
        
    }
    
    printToDomSpecial('news-card-div', cardString)
}



//need to add additional page functions into the init function to be called on appropriate pages//
const init = () => {
    window.onload = function() {
        printTourDates(tourDates);
    };
    if(document.URL.includes('bio')){
      bandMemberPrinter(bandMemberArr);
      discoButtonListener();
    } else if(document.URL.includes('index')) {
        printTourDates(tourDates);
    } else if(document.URL.includes('news')) {
            writeCards(newsCards);
    } else if(document.URL.includes('merchandise')) {
                merchListener();        
    }
}
  init();