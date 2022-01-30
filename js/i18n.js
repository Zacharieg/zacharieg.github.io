import i18next from 'i18next';

i18next.init({
  lng: navigator.language,
  debug: true,
  resources: {
    en: {
      translation: {
        //Section
        "Qui suis-je ?": "Who am I ?",
        "Mon parcours": "My journey",
        "Mes compétences": "My skills", 
        "Mes expériences": "My experiences",

        //Qui suis-je
        "Je suis en formation d'ingénieur en informatique": "I am studying computer engineering",
        "Passionné": "Passionate",
        "J'aime m'investir à fond dans mes projets et mes idées, sans parfois voir le temps passer.": "I like to invest myself thoroughly in my projects and my ideas, sometimes without seeing the time pass.",
        "Créatif": "Creative",
        "Inventer est ma principale occupation. Même si je n'arrive parfois pas à les réaliser, j'ai des idées plein la tête et ça me permet de ne jamais être à court d'inspiration." : "My head is full of ideas and it am never short of inspiration",
        "Curieux" : "Curious",
        "Mes études dans l'informatique sont en grande partie causée par ma curiosité. Comment cela fonctionne ? Peut-on l'améliorer ? J'adore découvrir de nouveaux horizons et me mettre à l'épreuve dans ceux ci." : "My studies in computer science are largely caused by my curiosity. How does it work ? Can we improve it?",
        "Polyvalent" : "Versatile",
        "Dû à ma curiosité, j'ai exploré beaucoup de domaines et de technologies différents, et aujourd'hui je peux profiter des maitrises diverses que j'ai acquises.": "Due to my curiosity, I explored many different fields and technologies, and today I can take advantage of the various skills I acquired.",

        //Mon parcours
        "BAC S": "Secondary school diploma, specialization in science ",
        "Obtenu mention très bien":"With first class honors",
        "DUT Informatique": "A two-year technical degree in Computer Science",
        "A l'IUT de Nantes": "IUT of Nantes, France",
        "avril 2020": "april 2020",
        "août 2020": "august 2020",
        "Stage chez Piwigo" : "Internship at Piwigo",
        "Polytech" : "Polytech",
        "Cursus ingénieur informatique à Nantes" : "Computer engineering school in Nantes, France",

        //Mes Compétences
        "Web" : "Web",
        "<b>Front end</b> HTML, CSS, JavaScript, React" : "<b>Front end</b> HTML, CSS, JavaScript, React",
        "<b>Back end</b> PHP, Node" : "<b>Back end</b> PHP, Node",
        "<b>Base de donnée</b> SQL, mySQL, Oracle" : "<b>Database</b> SQL, mySQL, Oracle",
        "Système d'exploitation" : "Operating system",
        "<b>Linux</b> Bash, programmation en C" : "<b>Linux</b> Bash, C programing",
        "<b>Windows</b>" : "<b>Windows</b>",
        "Design" : "Design",
        "<b>Illustration, Maquette Web</b> Figma Inkscape" : "<b>Illustration, Web mockup</b> Figma Inkscape",
        "Réseau" : "Network",
        "<b>Réseau sur Unix IPv4/v6</b> Routage, Proxy et Socket" : "<b>Network on Unix IPv4/v6</b> Routing, Proxy and Socket",
        "Gestion des entreprises" : "Business Management",
        "<b>Comptabilité</b>" : "<b>Accounting</b>",
        "<b>Management d'équipe</b>" : "<b>Team management</b>",
        "<b>Marketing</b>" : "<b>Marketing</b>",
        "Social" : "Social",
        "<b>Français</b>" : "<b>French</b> (native)",
        "<b>Anglais</b> 920 au TOEIC, voyage en Angleterre" : "<b>English</b> 920 on TOEIC, trip to England",
        "<b>Bon sens de la communication</b>" : "Good communication skills",
 
        //Mes projets
        "Piwigo est un CMS open source developpé en PHP et JS. Durant mes stages ainsi que sous le statut de freelance, j'ai aidé à developper la partie administration du CMS." : "Piwigo is an open source CMS developed in PHP and JS. During my internships and as a freelancer, I helped to develop the administration part of the CMS.",
        'Je suis aussi à l\'origine de la création du plugin "Tag Recognition", ainsi que des mises à jour conséquente du plugin "User Collections".' : 'I am also responsible for the creation of the "Tag Recognition" plugin, as well as the consequent updates of the "User Collections" plugin.',
        "Au sein d'une petite équipe en télé-travail, j'ai sû m'intégrer et collaborer pour developper le projet." : "Within a small tele-working team, I was able to integrate and collaborate to develop the project.",
        "La Nantarena" : "The Nantarena",
        "Faisant partie de l'association Rézo du BDE de Polytech Nantes, j'ai aidé à l'organisation de la Nantarena." : "As a member of the Rézo association of the BDE of Polytech Nantes, I helped to organize the Nantarena.",
        "La Nantarena est une LAN (compétition de jeux vidéo) organisé deux fois l'année." : "",
        "J'ai fait partie des pôles Web (developpement du site web recevant les inscription des joueurs) ainsi que du pôle Design (création de l'affiche ainsi que des différents visuels de la LAN)." : "I was part of the Web pole (development of the website receiving the registration of the players) as well as the Design pole (creation of the poster as well as the various visuals of the LAN).",
        "Ce site" : "This Website",
        "J'ai designé, puis implémenté ce site avec NodeJs, express et le template engine Nunjucks. Il est hébergé sur GitHub Pages." : "I designed and implemented this site with NodeJs, express and the Nunjucks template engine. It is hosted on GitHub Pages.",
        "Ce site est la deuxième version de mon site personnel, j'ai effectué un redesign complet et ajouté de nombreuses effets visuels." : "This site is the second version of my personal site, I made a complete redesign and added many visual effects.",
        "Jeux vidéos" : "Video games",
        "Ayant une passion pour le Game Design et le Game developpment, j'ai participé à une game jam (la Ludum dare 47) et developpé un party game nommé Round Foot." : "Having a passion for game design and game development, I participated in a game jam (Ludum dare 47) and developed a party game called Round Foot.",
        "Lors d'un projet de 6 mois et avec deux autres étudiants, nous réalisons un réseau social dont le but est de communiquer autour de projet personnels" : "During a 6 months project and with two other students, we realized a social network whose goal is to communicate around personal projects.",
        "Cette application est réalisée en ReactNative et possède une API REST, elle est herbergée sur GitHub." : "This application is made in ReactNative and has a REST API, it is hosted on GitHub.",
        "En autodidacte j'ai acquis des compétences en design sur Inkscape ou Figma." : "By learning on my own I acquired design skills on Inkscape or Figma.",
        "J'ai réalisé le DailyLogoChallenge, un challenge consistant à faire un logo par jour pendant 50 jours." : "I did the DailyLogoChallenge, a challenge to make one logo a day for 50 days.",
        "Lors de mon travail, de mes projets d'écoles ou de club, j'utilise souvent Figma pour faire des maquettes web ou mobile." : "During my work, school or club projects, I often use Figma to make web or mobile models.",

        //Menu 
        "Copié dans le presse papier" : "Copied to the clipboard",
        "Contactez Moi !" : "Contact Me !",
        "Mon CV" : "My resume",
        // "" : "",


        "Développeur freelance": "Freelance developer",
      }
    }
  }
});

export default () => {
    document.querySelectorAll('.i18n, p, h2').forEach(el => el.innerHTML = i18next.t(el.innerHTML));
    document.querySelectorAll('.section').forEach(el => el.setAttribute('data-title', i18next.t(el.getAttribute('data-title'))))
}