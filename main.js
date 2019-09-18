

// ****************************************
// Home Page
// ****************************************






// *****************************************
// Bio Page
// *****************************************






// *****************************************
// Merchandise Page
// *****************************************

// document.getElementById("dropdownMenu2").addEventListener(click,(event) =>{
// console.log(event)
// });





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

writeCards(newsCards)