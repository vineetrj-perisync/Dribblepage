
const urlParams = new URLSearchParams(window.location.search);
const cardId = urlParams.get('id');


const cards = [
    {
        "id":1,
        "title":"Project management dashboard | Business Analytics App",
        "cardimage":"img/image1.png",
        "cardimage2":"img/image2.png",
        "cardimage3":"img/image3.png",
        "cardimage4":"img/image4.png",
        "cardimage5":"img/fireart.png",
        "cardname":"Project management dashboard | Business Analytics App",
        "cardnameicon":"img/cardicon1.png",
        "cardnameheading":"Dipa Inhouse",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
        
    },
    {
        "id":2,
        "cardimage":"img/sub-image1.png",
        "cardimage2":"img/sub-image2.png",
        "title":"Customer Journey CRM Dashboard",
        "cardname":"Customer Journey CRM Dashboard",
        "cardnameicon":"img/cardicon2.png",
        "cardnameheading":"RonDesignLab",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":3,
        "cardimage":"img/sub-image3.png",
        "cardimage2":"img/sub-image2.png",
        "title":"InsightHub - KPI & Project Management Dashboard",
        "cardname":"InsightHub - KPI & Project Management Dashboard",
        "cardnameicon":"img/cardicon3.png",
        "cardnameheading":"Plainthing Studio",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":4,
        "cardimage":"img/sub-image4.png",
        "cardimage2":"img/sub-image1.png",
        "title":"AI Travel Web Dashboard",
        "cardname":"AI Travel Web Dashboard",
        "cardnameicon":"img/cardicon4.png",
        "cardnameheading":"RonDesignLab ⭐️",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":5,
        "cardimage":"img/sub-image5.png",
        "cardimage2":"img/sub-image2.png",
        "title":"Team Management Dashboard",
        "cardname":"Team Management Dashboard",
        "cardnameicon":"img/cardicon5.png",
        "cardnameheading":"Shakuro",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":6,
        "cardimage":"img/sub-image6.png",
        "cardimage2":"img/sub-image1.png",
        "title":"Sales Tracking SRM Dashboard UI/UX Design",
        "cardname":"Sales Tracking SRM Dashboard UI/UX Design",
        "cardnameicon":"img/cardicon6.png",
        "cardnameheading":"Shakuro",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":7,
       "cardimage":"img/sub-image7.png",
        "cardimage2":"img/sub-image2.png",
        "title":"Campaigns Dashboard",
        "cardname":"Campaigns Dashboard",
        "cardnameicon":"img/cardicon7.png",
        "cardnameheading":"lonut Zamfir",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":8,
       "cardimage":"img/sub-image8.png",
        "cardimage2":"img/sub-image4.png",
        "title":"Finomic-Financial Dashboard",
        "cardname":"Finomic-Financial Dashboard",
        "cardnameicon":"img/cardicon8.png",
        "cardnameheading":"Dipa Inhouse",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":9,
        "cardimage":"img/sub-image9.png",
        "cardimage2":"img/sub-image16.png",
        "title":"BordUp - HR Dashboard Components",
        "title":"BordUp - HR Dashboard Components",
        "cardname":"BordUp - HR Dashboard Components",
        "cardnameicon":"img/cardicon10.png",
        "cardnameheading":"QClay",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":10,
        "cardimage":"img/cardiconimg10.png",
        "cardimage2":"img/sub-image14.png",
        "title":"Project Dashboard",
        "cardname":"Project Dashboard",
        "cardnameicon":"img/cardicon11.png",
        "cardnameheading":"Fireart Studio",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":11,
        "cardimage":"img/cardiconimg11.png",
        "cardimage2":"img/sub-image5.png",
        "title":"Sales Dashboard",
        "cardname":"Sales Dashboard",
        "cardnameicon":"img/cardicon12.png",
        "cardnameheading":"Shakuro",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":12,
        "cardimage":"img/cardiconimg12.png",
        "cardimage2":"img/sub-image4.png",
        "title":"Sales Tracking SRM Dashboard UI/UX Design",
        "cardname":"Sales Tracking SRM Dashboard UI/UX Design",
        "cardnameicon":"img/cardicon13.png",
        "cardnameheading":"Dipa Inhouse",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":13,
        "cardimage":"img/cardiconimg13.png",
        "cardimage2":"img/sub-image11.png",
        "title":"Sequence - Financial Dashboard",
        "cardname":"Sequence - Financial Dashboard",
        "cardnameicon":"img/cardicon14.png",
        "cardnameheading":"Dipa Inhouse",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":14,
        "cardimage":"img/cardiconimg14.png",
        "cardimage2":"img/sub-image1.png",
        "title":"Nexus - Saas Marketing Dashboard",
        "cardname":"Nexus - Saas Marketing Dashboard",
        "cardnameicon":"img/cardicon15.png",
        "cardnameheading":"Outcrowd",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":15,
        "cardimage":"img/cardiconimg15.png",
        "cardimage2":"img/sub-image2.png",
        "title":"Product",
        "cardname":"Product",
        "cardnameicon":"img/cardicon16.png",
        "cardnameheading":"Orix Creativee",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":16,
        "cardimage":"img/cardiconimg16.png",
        "cardimage2":"img/sub-image3.png",
        "title":"Dashboard Design",
        "cardname":"Dashboard Design",
        "cardnameicon":"img/cardicon1.png",
        "cardnameheading":"CHALO LAB",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
    {
        "id":17,
        "cardimage":"img/cardiconimg18.png",
        "cardimage2":"img/sub-image3.png",
        "title":"Logip Admin Dashboard: Analytics UX",
        "cardname":"Logip Admin Dashboard: Analytics UX",
        "cardnameicon":"img/cardicon2.png",
        "cardnameheading":"Dipa Inhouse",
        "teamname":"Team",
        "likes":573,
        "noviews":"253k"
    },
{
    "id":18,
    "cardimage":"img/cardiconimg19.png",
    "cardimage2":"img/sub-image5.png",
    "title":"Cyclops - Campaign Dashboard",
    "cardname":"Cyclops - Campaign Dashboard",
    "cardnameicon":"img/cardicon3.png",
    "cardnameheading":"Odama",
    "teamname":"Team",
    "likes":573,
    "noviews":"253k"
},
{
    "id":19,
    "cardimage":"img/cardiconimg20.png",
    "cardimage2":"img/sub-image6.png",
    "title":"Syncrowave - CRM Dashboard",
    "cardname":"Syncrowave - CRM Dashboard",
    "cardnameicon":"img/cardicon4.png",
    "cardnameheading":"Outcrowd",
    "teamname":"Team",
    "likes":573,
    "noviews":"253k"
},
{
    "id":20,
    "cardimage":"img/cardiconimg14.png",
    "cardimage2":"img/sub-image7.png",
   "title":"Fitonist - Admin analytical dashboard ",
    "cardname":"Fitonist - Admin analytical dashboard ",
    "cardnameicon":"img/cardicon5.png",
    "cardnameheading":"Ronas IT I UI/UX Team",
    "teamname":"Team",
    "likes":573,
    "noviews":"253k"
},
{
    "id":21,
    "cardimage":"img/cardiconimg22.png",
    "cardimage2":"img/sub-image5.png",
    "title":"Dashboard for a Management Product",
    "cardname":"Dashboard for a Management Product",
    "cardnameicon":"img/cardicon6.png",
    "cardnameheading":"Nixtio",
    "teamname":"Team",
    "likes":573,
    "noviews":"253k"
},
{
    "id":22,
    "cardimage":"img/cardiconimg1.png",
    "cardimage2":"img/sub-image12.png",
    "title":"BordUp - HR Recruitment Dashboard",
    "cardname":"BordUp - HR Recruitment Dashboard",
    "cardnameicon":"img/cardicon7.png",
    "cardnameheading":"CHALO LAB",
    "teamname":"Team",
    "likes":573,
    "noviews":"253k"
},
{
    "id":23,
    "cardimage":"img/cardiconimg2.png",
    "cardimage2":"img/sub-image13.png",
    "title":"Finance Management Dashboard",
    "cardname":"Finance Management Dashboard",
    "cardnameicon":"img/cardicon8.png",
    "cardnameheading":"RonDesignLab ⭐️",
    "teamname":"Team",
    "likes":573,
    "noviews":"253k"
},
{
    "id":24,
    "cardimage":"img/cardiconimg3.png",
    "cardimage2":"img/sub-image14.png",
    "title":"Sales Marketing Dashboard",
    "cardname":"Sales Marketing Dashboard",
    "cardnameicon":"img/cardicon9.png",
    "cardnameheading":"Bato",
    "teamname":"Team",
    "likes":573,
    "noviews":"253k"
}
];


const card = cards.find(card => card.id == cardId);


if (card) {
    document.getElementById('title').innerText = card.title;
    document.getElementById('card-name').innerText = card.cardname;
    document.getElementById('card-image').src = card.cardimage;
    document.getElementById('card-image2').src = card.cardimage2;
   
    document.getElementById('card-name-icon').src = card.cardnameicon;
    document.getElementById('card-heading').innerText = card.cardnameheading;
    document.getElementById('team-name').innerText = card.teamname;
    document.getElementById('likes').innerText = card.likes;
    document.getElementById('views').innerText = card.noviews;
} else {
    document.getElementById('dashboard').innerHTML = '<p>Card not found!</p>';
}
