const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
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


// *****************************************
// Merchandise Page
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
        'The Violient Phlegms'.  Check it out!",
    link: 'Read More'
},
{
    date: 'May 12, 2019',
    title: 'New album!',
    info: "Check out our newest album--'Hack up a lung'! We feel it is our best yet!",
    link: 'Read More'
},
{
    date: 'March 23, 2019',
    title: 'New album coming soon!',
    info: "Sore Throat is in the recording studio as of late wrapping\
          up their next album...", 
     link: 'Read More'
},
{   
    date: 'February 10, 2019',
    title: 'Sore Throat wins a Grammy!',
    info:  'Sore Throat was thrilled to win their 15th Grammy Award for their last album \
            "Hey! Guess what? Chicken Butt!"...',
    link: 'Read More'

},
{
    date: 'December 25, 2018',
    title: 'Happy Holidays!',
    info: 'Sore Throat wants to wish all of our fans a happy holiday season.  You are \
        the best fans in the world!',
    link: 'Read More'
},
{
    date: 'November 10, 2018',
    title: 'New album coming soon!',
    info: 'Sore Throat began working on a new album today. This will be their 23rd album.',
    link: 'Read More'
}];


const printToDomSpecial = (divId, toPrint) => {
    document.getElementById(divId).innerHTML += toPrint;
}

const writeCards = (cardArray) => {
    let cardString = '';
    for (let i = 0; i < cardArray.length; i++) {
        let cards = cardArray[i];
        cardString += `
            <div id="cardBox" class="col-sm-4">   
                <div class="card text-white bg-dark mb-3" id="news-card" >
                    <h5 class="card-title" id="news-card-date">${cards.date}</h5>
                    <h6 id="news-card-title">${cards.title}</h6>
                    <p class="card-text" id="news-card-info">${cards.info}</p>
                    <a href="#" class="btn btn-primary" id="news-card-link">${cards.link}</a>
                </div>
            </div>
            `
    }
    
    printToDomSpecial('news-card-div', cardString)
}


//need to add additional page functions into the init function to be called on appropriate pages//
const init = () => {
    if(document.URL.includes('merchandise')){
        productBuilder(SoreThroatProducts);
    } else if(document.URL.includes('bio')){
      cbandMemberPrinter(bandMemberArr);
    } else if(document.URL.includes('index')) {
        printTourDates(tourDates);
    } else if(document.URL.includes('news')) {
            writeCards(newsCards);
    }
}
  init();