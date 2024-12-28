// document.getElementById("demo").style.fontFamily = "Mons sans ,Helvetica Neue, Helvetica, Arial, sans-serif";
const popularButton = document.getElementById('popular-btn');
const dropdownMenuItem = document.getElementById('dropdown-btn');


popularButton.addEventListener('click', () => {
    if (dropdownMenuItem.style.display === 'block') {
        dropdownMenuItem.style.display = 'none';
    } else {
        dropdownMenuItem.style.display = 'block';
    }
});


document.addEventListener('click', (event) => {
    if (!popularButton.contains(event.target) && !dropdownMenuItem.contains(event.target)) {
        dropdownMenuItem.style.display = 'none';
    }
});


    const cards=[
        {
            "id":1,
            "cardimage":"img/cardiconimg1.png",
            "cardname":"Project management dashboard | Business Analytics App",
            "cardnameicon":"img/cardicon1.png",
            "cardnameheading":"Dipa Inhouse",
            "teamname":"Mobile",
            "likes":573,
            "noviews":"253k"
        },
        {
            "id":2,
            "cardimage":"img/cardiconimg2.png",
            "cardname":"Customer Journey CRM Dashboard",
            "cardnameicon":"img/cardicon2.png",
            "cardnameheading":"RonDesignLab",
            "teamname":"Animation",
            "likes":797,
            "noviews":"392k"
        },
        {
            "id":3,
            "cardimage":"img/cardiconimg3.png",
            "cardname":"InsightHub - KPI & Project Management Dashboard",
            "cardnameicon":"img/cardicon3.png",
            "cardnameheading":"Plainthing Studio",
            "teamname":"Animation",
            "likes":1000,
            "noviews":"301k"
        },
        {
            "id":4,
            "cardimage":"img/cardiconimg4.png",
            "cardname":"AI Travel Web Dashboard",
            "cardnameicon":"img/cardicon4.png",
            "cardnameheading":"RonDesignLab ⭐️",
            "teamname":"Mobile",
            "likes":753,
            "noviews":"312k"
        },
        {
            "id":5,
            "cardimage":"img/cardiconimg5.png",
            "cardname":"Team Management Dashboard",
            "cardnameicon":"img/cardicon5.png",
            "cardnameheading":"Shakuro",
            "teamname":"Team",
            "likes":573,
            "noviews":"438k"
        },
        {
            "id":6,
            "cardimage":"img/cardiconimg6.png",
            "cardname":"Sales Tracking SRM Dashboard UI/UX Design",
            "cardnameicon":"img/cardicon6.png",
            "cardnameheading":"Shakuro",
            "teamname":"Mobile",
            "likes":596,
            "noviews":"295k"
        },
        {
            "id":7,
            "cardimage":"img/cardiconimg7.png",
            "cardname":"Campaigns Dashboard",
            "cardnameicon":"img/cardicon7.png",
            "cardnameheading":"lonut Zamfir",
            "teamname":"Print",
            "likes":765,
            "noviews":"270k"
        },
        {
            "id":8,
            "cardimage":"img/cardiconimg8.png",
            "cardname":"Finomic-Financial Dashboard",
            "cardnameicon":"img/cardicon8.png",
            "cardnameheading":"Dipa Inhouse",
            "teamname":"Mobile",
            "likes":"1k",
            "noviews":"434k"
        },
        {
            "id":9,
            "cardimage":"img/cardiconimg9.png",
            "cardname":"BordUp - HR Dashboard Components",
            "cardnameicon":"img/cardicon10.png",
            "cardnameheading":"QClay",
            "teamname":"Illustration",
            "likes":917,
            "noviews":"364k"
        },
        {
            "id":10,
            "cardimage":"img/cardiconimg10.png",
            "cardname":"Project Dashboard",
            "cardnameicon":"img/cardicon11.png",
            "cardnameheading":"Fireart Studio",
            "teamname":"Print",
            "likes":826,
            "noviews":"283k"
        },
        {
            "id":11,
            "cardimage":"img/cardiconimg11.png",
            "cardname":"Sales Dashboard",
            "cardnameicon":"img/cardicon12.png",
            "cardnameheading":"Shakuro",
            "teamname":"Product Design",
            "likes":"1.1k",
            "noviews":"380k"
        },
        {
            "id":12,
            "cardimage":"img/cardiconimg12.png",
            "cardname":"Sales Tracking SRM Dashboard UI/UX Design",
            "cardnameicon":"img/cardicon13.png",
            "cardnameheading":"Dipa Inhouse",
            "teamname":"Illustration",
            "likes":724,
            "noviews":"294k"
        },
        {
            "id":13,
            "cardimage":"img/cardiconimg13.png",
            "cardname":"Sequence - Financial Dashboard",
            "cardnameicon":"img/cardicon14.png",
            "cardnameheading":"Dipa Inhouse",
            "teamname":"Mobile",
            "likes":568,
            "noviews":"234k"
        },
        {
            "id":14,
            "cardimage":"img/cardiconimg14.png",
            "cardname":"Nexus - Saas Marketing Dashboard",
            "cardnameicon":"img/cardicon15.png",
            "cardnameheading":"Outcrowd",
            "teamname":"Print",
            "likes":"1.5k",
            "noviews":"253k"
        },
        {
            "id":15,
            "cardimage":"img/cardiconimg15.png",
            "cardname":"Product",
            "cardnameicon":"img/cardicon16.png",
            "cardnameheading":"Orix Creativee",
            "teamname":"Branding",
            "likes":634,
            "noviews":"253k"
        },
        {
            "id":16,
            "cardimage":"img/cardiconimg16.png",
            "cardname":"Dashboard Design",
            "cardnameicon":"img/cardicon1.png",
            "cardnameheading":"CHALO LAB",
            "teamname":"Product Design",
            "likes":543,
            "noviews":"253k"
        },
        {
            "id":17,
            "cardimage":"img/cardiconimg18.png",
            "cardname":"Logip Admin Dashboard: Analytics UX",
            "cardnameicon":"img/cardicon2.png",
            "cardnameheading":"Dipa Inhouse",
            "teamname":"Illustration",
            "likes":549,
            "noviews":"226k"
        },
    {
        "id":18,
        "cardimage":"img/cardiconimg19.png",
        "cardname":"Cyclops - Campaign Dashboard",
        "cardnameicon":"img/cardicon3.png",
        "cardnameheading":"Odama",
        "teamname":"Web Design",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":19,
        "cardimage":"img/cardiconimg20.png",
        "cardname":"Syncrowave - CRM Dashboard",
        "cardnameicon":"img/cardicon4.png",
        "cardnameheading":"Outcrowd",
        "teamname":"Branding",
        "likes":773,
        "noviews":"383k"
    },
    {
        "id":20,
        "cardimage":"img/cardiconimg14.png",
       
        "cardname":"Fitonist - Admin analytical dashboard ",
        "cardnameicon":"img/cardicon5.png",
        "cardnameheading":"Ronas IT I UI/UX Team",
        "teamname":"Product Design",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":21,
        "cardimage":"img/cardiconimg22.png",
        "cardname":"Dashboard for a Management Product",
        "cardnameicon":"img/cardicon6.png",
        "cardnameheading":"Nixtio",
        "teamname":"Web Design",
        "likes":53,
        "noviews":"408k"
    },
    {
        "id":22,
        "cardimage":"img/cardiconimg1.png",
        "cardname":"BordUp - HR Recruitment Dashboard",
        "cardnameicon":"img/cardicon7.png",
        "cardnameheading":"CHALO LAB",
        "teamname":"Branding",
        "likes":543,
        "noviews":"753k"
    },
    {
        "id":23,
        "cardimage":"img/cardiconimg2.png",
        "cardname":"Finance Management Dashboard",
        "cardnameicon":"img/cardicon8.png",
        "cardnameheading":"RonDesignLab ⭐️",
        "teamname":"Web Design",
        "likes":1573,
        "noviews":"553k"
    },
    {
        "id":24,
        "cardimage":"img/cardiconimg3.png",
        "cardname":"Sales Marketing Dashboard",
        "cardnameicon":"img/cardicon9.png",
        "cardnameheading":"Bato",
        "teamname":"Product Design",
        "likes":873,
        "noviews":"953k"
    }
      
]



const savedCards = [];
const favoriteCards = [];


const displayCards = (filteredCards) => {
    const container = document.getElementById("card");
    container.innerHTML = ""; 
    filteredCards.forEach((element) => {
        const value = `
            <div class="cardnumbers">
                <div class="card-image" style="background-image: url(${element.cardimage})">
                    <div class="add">
                        <div class="name-add">
                            <p>
                                <a href="card-details.html?id=${element.id}">${element.cardname}</a>
                            </p>
                        </div>
                        <div class="add-cart">
                            <div class="add-hoverfav">
                                <img src="img/sveimage.png" alt="" class="add-hoverfav-img" onclick="saveCard(${element.id})">
                            </div>
                            <div class="add-hoverlike">
                                <img src="img/free-heart-icon-3510-thumb.png" alt="" class="add-hoverlike-img" onclick="favoriteCard(${element.id})">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-details">
                    <div class="cardname">
                        <div class="cardname-img"><img src=${element.cardnameicon} alt="" class="cardicon"></div>
                        <div class="cardname-heading"><p>${element.cardnameheading}</p></div>
                        <div class="team">
                            <div class="team-name"><p>${element.teamname}</p></div>
                        </div>
                    </div>
                    <div class="cardlikes">
                        <div class="nolikes">
                            <div class="heart-img"><img src="img/heart.png" alt="" class="heart-img"></div>
                            <div class="likes"><p>${element.likes}</p></div>
                        </div>
                        <div class="views">
                            <div class="view-img"><img src="img/eye.png" alt="" class="view-img"></div>
                            <div class="noviews"><p>${element.noviews}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += value;
    });
};



const saveCard = (cardId) => {
    const card = cards.find((c) => c.id === cardId);
    if (card && !savedCards.some((c) => c.id === cardId)) {
        savedCards.push(card);
        alert(`Card "${card.cardname}" saved!`);
    }
};


const favoriteCard = (cardId) => {
    const card = cards.find((c) => c.id === cardId);
    if (card && !favoriteCards.some((c) => c.id === cardId)) {
        favoriteCards.push(card);
        alert(`Card "${card.cardname}" added to favorites!`);
    }
};


const displaySavedCards = () => {
    displayCards(savedCards);
};

const displayFavoriteCards = () => {
    displayCards(favoriteCards);
};


displayCards(cards);


const searchInputs = document.querySelectorAll("#search, #search-bar"); 

searchInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredCards = cards.filter((card) =>
            card.cardnameheading.toLowerCase().includes(searchText)
        );
        displayCards(filteredCards); 
    });
});

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');

    sidebar.classList.toggle('open');
    hamburger.classList.toggle('open');
}













  const sliderData = [
    { "image": "img/slide1.png", "alt": "Typography", "text": "Typography" },
    { "image": "img/slide2.png", "alt": "Branding", "text": "Branding" },
    { "image": "img/slide3.png", "alt": "Animation", "text": "Animation" },
    { "image": "img/slide4.png", "alt": "Illustration", "text": "Illustration" },
    { "image": "img/slide5.png", "alt": "Product Design", "text": "Product Design" },
    { "image": "img/slide6.png", "alt": "Web Design", "text": "Web Design" },
    { "image": "img/slide1.png", "alt": "Typography", "text": "Typography" },
    { "image": "img/slide2.png", "alt": "Branding", "text": "Branding" },
    { "image": "img/slide3.png", "alt": "Animation", "text": "Animation" },
    { "image": "img/slide4.png", "alt": "Illustration", "text": "Illustration" },
    { "image": "img/slide5.png", "alt": "Product Design", "text": "Product Design" },
    { "image": "img/slide6.png", "alt": "Web Design", "text": "Web Design" }
  ];

  
  const slider = document.getElementById("slider");

  sliderData.forEach(item => {
   
    const sliderCard = document.createElement("div");
    sliderCard.classList.add("slider-card");

    
    sliderCard.innerHTML = `
      <div class="animation">
        <img src="${item.image}" alt="${item.alt}" class="anima-img">
      </div>
      <div class="animation-name">
        <p>${item.text}</p>
      </div>
    `;

   
    slider.appendChild(sliderCard);
  });

 
  const sliderCards = Array.from(slider.children);
  sliderCards.forEach(card => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
  });






const categoryLinks = document.querySelectorAll('.pop-style a');

categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        
        const selectedTeamName = link.getAttribute('data-teamname');
        
        
        const filteredCards = cards.filter(card => card.teamname === selectedTeamName);
        
        
        displayCards(filteredCards);
    });
});

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');

    sidebar.classList.toggle('open');
    hamburger.classList.toggle('open');
}
