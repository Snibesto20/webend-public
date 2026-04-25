import website_1 from "../images/portfolio/website_1.png"
import logo_1 from "../images/portfolio/logo_1.png"
import logo_2 from "../images/portfolio/logo_2.png"
import logo_3 from "../images/portfolio/logo_3.png"
import logo_4 from "../images/portfolio/logo_4.png"
import logo_5 from "../images/portfolio/logo_5.png"

export const projectData = {
  websites: [
    { 
      title: "Vedainis - inžineriniai sprendimai jūsų namams.", 
      category: "Prestižiškumas • Efektyvumas • Patikimumas", 
      img: website_1, 
      isSquare: false, 
      url: "https://vedainis.lt" 
    },
  ],
  logos: [
    { title: "Vedainis", category: "Prestižiškumas, patikimumas", img: logo_1, isSquare: true },
    { title: "Nemuno kepyklėlė", category: "Rankų darbas, kokybė", img: logo_2, isSquare: true },
    { title: "Blykšt", category: "Elegantiškumas, meniškumas", img: logo_5, isSquare: true },
    { title: "Saulėlydžio veislynas", category: "Šiltumas, minimalizmas", img: logo_3, isSquare: true },
    { title: "Žibukas", category: "Ryškumas, profesionalumas", img: logo_4, isSquare: true },
  ],
};