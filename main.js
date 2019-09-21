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
    memberJoinDate: 'January 1999',
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
        <div class="card albumCard">
        <div class="row">
            <div class="col-4">
            <img src="${thisObject.albumImage}" class="img-thumbnail">
            </div>
            <div class="col-8">
            <div class="card-body">
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
    printToDom('albumContainer', domString);
};



const discoButtonListener = () => {
        document.getElementById('discography').addEventListener('click', (e) => {
        //when i click the button the following should happen:

        //1. the current content should be hidden
        memberSection.style.display = 'none';
        timelineSec.style.display = 'none';
        //2. the album array should print below the photo and about us section
        albumPrinter(albumArr);
        //3. if time change the button to display "click to view members and timeline"

        //4. then when the button is clicked again, hide albums and unhide the members and timeline sections.
    });
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
    if(document.URL.includes('merchandise')){
        productBuilder(SoreThroatProducts);
    } else if(document.URL.includes('bio')){
      bandMemberPrinter(bandMemberArr);
      discoButtonListener();
    } else if(document.URL.includes('index')) {
        printTourDates(tourDates);
    } else if(document.URL.includes('news')) {
            writeCards(newsCards);
    }
}
  init();

