document.addEventListener("DOMContentLoaded", function() {
    function createElementWithAttributes(tag, attributes, content) {
        const element = document.createElement(tag);
        if (attributes) {
            for (const key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }
        if (content) {
            element.textContent = content;
        }
        return element;
    }

    const headerDiv = createElementWithAttributes("div", {class: "main-content"});
    const leftHeaderDiv = createElementWithAttributes("div", {class: "divencabezadohijoizquierdo"});
    const logoImg = createElementWithAttributes("img", {class: "imagenindivudual", src: "recursos/imagenes/a.png", alt: ""});
    leftHeaderDiv.appendChild(logoImg);

    const rightHeaderDiv = createElementWithAttributes("div", {class: "divencabezadohijoderecho"});
    const navList = document.createElement("ul");
    const navItems = ["HOME|", "SERVICES|", "EVENTS|", "ABOUT US|", "CONTACT"];
    navItems.forEach(item => {
        const listItem = document.createElement("li");
        const link = createElementWithAttributes("a", {href: "#"});
        link.textContent = item;
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
    rightHeaderDiv.appendChild(navList);

    headerDiv.appendChild(leftHeaderDiv);
    headerDiv.appendChild(rightHeaderDiv);

    const backgroundDiv = createElementWithAttributes("div", {class: "divfondoimagen"});
    const flexVerticalDiv = createElementWithAttributes("div", {class: "flexContenedorvertical colordivpadre flexContenedor2", id: "veniceInfo"});
    const priceHeading = createElementWithAttributes("h2", {class: "rojo"}, "$8,450");
    const destinationHeading = createElementWithAttributes("h2", null, "Venice, Italy");
    const infoParagraph = createElementWithAttributes("p", {class: "p3"}, "travel is free responsive template by templacemo all image used in this template are from");
    const link = createElementWithAttributes("a", {href: "#"});
    link.textContent = "unsples";
    infoParagraph.appendChild(link);
    const bookButton = createElementWithAttributes("button", {class: "flexContenedor", id: "book_now_italy"}, "PRE-BOOKING");

    flexVerticalDiv.appendChild(priceHeading);
    flexVerticalDiv.appendChild(destinationHeading);
    flexVerticalDiv.appendChild(infoParagraph);
    flexVerticalDiv.appendChild(bookButton);
    backgroundDiv.appendChild(flexVerticalDiv);

    const destinationSection = createElementWithAttributes("section", {class: "destination-section"});
    const hotelListDiv = createElementWithAttributes("div", {class: "flexContenedor", id: "hotelList"});
    destinationSection.appendChild(hotelListDiv);

    const hotelsData = [
        { country: "ITALY", imgSrc: "recursos/imagenes/country-train.jpg", description1: "Rome, milan, Naples", description2: "SILVER HOTEL, 4 NIGHTS 5 STARS", price: "$1,800" },
        { country: "FRANCE", imgSrc: "recursos/imagenes/1.png", description1: "Paris, Marvelle, Lyon", description2: "NEW PALACE, 5 NIGHTS, 5 STARS", price: "$2,300" },
        { country: "GERMANY", imgSrc: "recursos/imagenes/2.png", description1: "Belin, Hamburg, Munich", description2: "LUXE HOTEL 5 NIGHTS, 6 STARS", price: "$3,100" },
        { country: "SPAIN", imgSrc: "recursos/imagenes/3.png", description1: "Madrid, Barcelona, Valencia", description2: "GOOD HOTEL, 4 NIGHTS, 6 STARS", price: "$4,800" }
    ];

    hotelsData.forEach(hotel => {
        const hotelContainer = document.createElement("div");
        hotelContainer.classList.add("hotel");

        const title = createElementWithAttributes("h2", { class: "h2" }, hotel.country);
        hotelContainer.appendChild(title);

        const img = createElementWithAttributes("img", { src: hotel.imgSrc, alt: "" });
        hotelContainer.appendChild(img);

        const description1 = createElementWithAttributes("p", { class: "p1" }, hotel.description1);
        hotelContainer.appendChild(description1);

        const description2 = createElementWithAttributes("p", { class: "p2" }, hotel.description2);
        hotelContainer.appendChild(description2);

        const button = createElementWithAttributes("button", { class: "flexContenedor" }, hotel.price + " BOOK NOW");
        hotelContainer.appendChild(button);

        hotelListDiv.appendChild(hotelContainer);
    });

    const imagesDiv = createElementWithAttributes("div", {class: "flexContenedor"});
    const imageSources = [
        "recursos/imagenes/B.png",
        "recursos/imagenes/C.png",
        "recursos/imagenes/D.png",
        "recursos/imagenes/B.png",
        "recursos/imagenes/C.png",
        "recursos/imagenes/D.png"
        
    ];
    imageSources.forEach(src => {
        const img = createElementWithAttributes("img", {border: "1", class: "imagenindivudual", src: src, alt: ""});
        imagesDiv.appendChild(img);
    });

    const footerDiv = createElementWithAttributes("div", {class: "divencabezadohijoizquierdo"});
    const footerLogoImg = createElementWithAttributes("img", {class: "imagenindivudual", src: "recursos/imagenes/a.png", alt: ""});
    const copyrightPara = createElementWithAttributes("p", null, "Copyright C 2084 ");
    const companyLink = createElementWithAttributes("a", {href: "#"}, "CompanyName-Travel");
    const byLink = createElementWithAttributes("a", {href: "#"}, "templatemo");
    copyrightPara.appendChild(companyLink);
    copyrightPara.textContent += " by ";
    copyrightPara.appendChild(byLink);
    const socialMediaDiv = createElementWithAttributes("div", {class: "divencabezadohijoderecho"});
    const socialMediaImages = [
        "recursos/imagenes/logo chiquito facebook.png",
        "recursos/imagenes/twi.png",
        "recursos/imagenes/in.png",
        "recursos/imagenes/mens.png",
        "recursos/imagenes/wif.png"
    ];
    socialMediaImages.forEach(src => {
        const img = createElementWithAttributes("img", {class: "imagenindivudual2", src: src, alt: "#"});
        socialMediaDiv.appendChild(img);
    });

    footerDiv.appendChild(footerLogoImg);
    footerDiv.appendChild(copyrightPara);
    footerDiv.appendChild(socialMediaDiv);

    document.body.appendChild(headerDiv);
    document.body.appendChild(backgroundDiv);
    document.body.appendChild(destinationSection);
    document.body.appendChild(imagesDiv);
    document.body.appendChild(footerDiv);

    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
});
