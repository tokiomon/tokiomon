// Translation object
const translations = {
    en: {
        title: "Tokiomon's World",
        intro: "Welcome to my creative hub! Connect with me on socials below:",
        discord: "Join My Discord",
        instagram: "Follow on Instagram",
        youtube: "Subscribe on YouTube",
        grok: "Chat with Grok"
    },
    ka: {
        title: "ტოკიომონის სამყარო",
        intro: "კეთილი იყოს თქვენი მობრძანება ჩემს შემოქმედებით სივრცეში! დაუკავშირდით ჩემთან ქვემოთ მოცემული სოციალური ქსელებით:",
        discord: "შემოუერთდი ჩემს Discord-ს",
        instagram: "გამომყევი Instagram-ზე",
        youtube: "გამოიწერე YouTube-ზე",
        grok: "ისაუბრე Grok-თან"
    },
    ru: {
        title: "Мир Токиомона",
        intro: "Добро пожаловать в мой творческий центр! Свяжитесь со мной через соцсети ниже:",
        discord: "Присоединяйтесь к моему Discord",
        instagram: "Подписывайтесь в Instagram",
        youtube: "Подпишитесь на YouTube",
        grok: "Поболтай с Grok"
    }
};

// Function to update text based on selected language
function changeLanguage() {
    const selectedLang = document.getElementById('language').value;
    document.getElementById('title').textContent = translations[selectedLang].title;
    document.getElementById('intro').textContent = translations[selectedLang].intro;
    document.getElementById('discord-text').textContent = translations[selectedLang].discord;
    document.getElementById('instagram-text').textContent = translations[selectedLang].instagram;
    document.getElementById('youtube-text').textContent = translations[selectedLang].youtube;
    document.getElementById('grok-text').textContent = translations[selectedLang].grok;
}

// Initialize with English
changeLanguage();

// Log clicks for debugging or analytics
document.querySelectorAll('.social-icon').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(`Clicked ${link.classList[1]} link`);
    });
});