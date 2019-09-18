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

bandMemberPrinter(bandMemberArr);

// *****************************************
// Merchandise Page
// *****************************************







// *****************************************
// Newsletter Page
// *****************************************
