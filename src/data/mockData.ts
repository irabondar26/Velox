import rocket from "../assets/rocket.svg";
import wallet from "../assets/wallet.svg";
import brain from "../assets/brain.svg";
import Blooming from "../assets/Blooming.svg";
import BuildRight from "../assets/BuildRight.svg";
import Flowbot from "../assets/Flowbot.svg";
import Expor from "../assets/Expor.svg";
import Redo from "../assets/Redo.svg";
import emptyCreditcard from "../assets/emptyCreditcard.jpg";
import article from "../assets/article.jpg";
import blueWallet from "../assets/blueWallet.svg";
import secure from "../assets/secure.svg";
import family from "../assets/family.svg";
import blueCoffeeCup from "../assets/blueCoffeeCup.svg";

export const offerings = [
    { id: 1, name: "Instant Productivity", icon: rocket, href: "#productivity" },
    { id: 2, name: "Expense Management", icon: wallet, href: "#expense" },
    { id: 3, name: "Advanced Technology", icon: brain, href: "#technology" },
];

export const info = [
    { id: 1, name: "Contact", href: "#social-links" },
    { id: 2, name: "Social", href: "#social-links" },
    { id: 4, name: "Legal Terms", href: "#legal" },
];

export const companies = [
    { id: 1, name: "Blooming", src: Blooming },
    { id: 2, name: "BuildRight", src: BuildRight },
    { id: 3, name: "Flowbot", src: Flowbot },
    { id: 4, name: "Expor", src: Expor },
    { id: 5, name: "Redo", src: Redo },
];

export const articles = [
    {
        id: 1,
        title: "Scale Your Team, Not Your Card Expenses",
        description: "Issue virtual and physical cards at no additional cost to support teams of any size.",
        imgSrc: emptyCreditcard,
        imgName: "emptyCreditcard"
    },

    {
        id: 2,
        title: "Effortless Paper Tracking, Mobile Convenience",
        description: "Get precise control—at scale—with the ability to lock any card and restrict any type of spend.",
        imgSrc: article,
        imgName: "article"
    },
];

export const cards = [
    { id: 1, name: "Safe Storage", img: blueWallet },
    { id: 2, name: "Secure", img: secure },
    { id: 3, name: "Earn Interest", img: blueCoffeeCup },
    { id: 4, name: "Family Plans", img: family },
];