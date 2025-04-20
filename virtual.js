// const modelViewer = document.querySelector("#viewer");
// const infoBox = document.getElementById("info-box");


// const plantData = {
//     "NEEM": { name: "NEEM", desc: "A beautiful red rose .jdcsicsjsjnvjsvvjkvnsdvkjdvjovjdvsovjdsovjsdvpjivjvnjvnivnsjdvnsjdvnspdvhdjvhsdivj" },
//     "ALOE": { name: "ALOE", desc: "A tall sunflower that loves sunlight.jsdvsvhsjdvhsdivjhsdvjidhvjidvhjsdvjihvjdvhshdpvhdiphfeufhiuefheifhi" },
//     "TULSI": { name: "TULSI", desc: "A small tree with artistic pruning.iehfuieiheudifheuifhewuifhewfuiehfuewfhewuiphguweefhuwefhwuhfwu9e[hweufh" },
//     "NIMBU": { name: "NIMBU", desc: "A small tree with artistic pruning.i0er8irjfwijgiefj0igjgigjrighjirejfwifjiejffjkjfksjksds;lalkmdksaksacms,a" }

// };


// modelViewer.addEventListener('click', async (event) => {
//     const hit = await modelViewer.positionAndNormalFromPoint(event.clientX, event.clientY);
//     if (!hit) return;

    
//     const detectedPlant = Object.keys(plantData)[Math.floor(Math.random() * Object.keys(plantData).length)];

//     if (detectedPlant) {
        
//         document.getElementById("plant-name").innerText = plantData[detectedPlant].name;
//         document.getElementById("plant-desc").innerText = plantData[detectedPlant].desc;

        
//         infoBox.style.left = `${event.clientX}px`;
//         infoBox.style.top = `${event.clientY}px`;
//         infoBox.classList.remove("hidden");
//     }
// });


// document.addEventListener('click', (event) => {
//     if (!modelViewer.contains(event.target) && !infoBox.contains(event.target)) {
//         hideInfo();
//     }
// });


// function hideInfo() {
//     infoBox.classList.add("hidden");
// }


























// const modelViewer = document.querySelector("#viewer");
// const infoBox = document.getElementById("info-box");

// const plantData = {
//     "NEEM": { name: "NEEM", desc: "Neem is known for its medicinal properties and is commonly found in tropical regions." },
//     "ALOE": { name: "ALOE", desc: "Aloe Vera is a succulent plant used for skincare and healing burns." },
//     "TULSI": { name: "TULSI", desc: "Tulsi is a sacred herb in India known for its healing and purifying properties." },
//     "NIMBU": { name: "NIMBU", desc: "Nimbu (Lemon) is a citrus fruit used for its juice and vitamin C." }
// };

// modelViewer.addEventListener('click', async (event) => {
//     const hit = await modelViewer.positionAndNormalFromPoint(event.clientX, event.clientY);
//     if (!hit) return;

//     // 👇 Yahan actual logic lag sakta hai hit ke basis pe. Abhi static example:
//     const detectedPlant = "TULSI"; // Replace with logic if you use hotspots or raycast

//     if (plantData[detectedPlant]) {
//         document.getElementById("plant-name").innerText = plantData[detectedPlant].name;
//         document.getElementById("plant-desc").innerText = plantData[detectedPlant].desc;

//         // 👇 Info box ko screen ke bahar jaane se rokna
//         positionInfoBox(event.clientX, event.clientY);

//         infoBox.classList.remove("hidden");
//     }
// });

// function positionInfoBox(x, y) {
//     const boxWidth = infoBox.offsetWidth || 200;
//     const boxHeight = infoBox.offsetHeight || 150;
//     const pageWidth = window.innerWidth;
//     const pageHeight = window.innerHeight;

//     let left = x;
//     let top = y;

//     if (left + boxWidth > pageWidth) {
//         left = pageWidth - boxWidth - 10;
//     }
//     if (top + boxHeight > pageHeight) {
//         top = pageHeight - boxHeight - 10;
//     }

//     infoBox.style.left = `${left}px`;
//     infoBox.style.top = `${top}px`;
// }

// // Hide info box on outside click
// document.addEventListener('click', (event) => {
//     if (!modelViewer.contains(event.target) && !infoBox.contains(event.target)) {
//         hideInfo();
//     }
// });

// function hideInfo() {
//     infoBox.classList.add("hidden");
// }

// // Optional: close button inside the info box
// const closeBtn = document.getElementById("close-info");
// if (closeBtn) {
//     closeBtn.addEventListener("click", hideInfo);
// }
















const modelViewer = document.querySelector("#viewer");
const infoBox = document.getElementById("info-box");

const plantData = {
    "NEEM": {
        name: "Neem",
        scientificNameHeading: "Scientific Name",
        scientificName: "Azadirachta indica",
        usesHeading: "Key Uses",
        uses: [
            "Traditional medicine for various ailments",
            "Natural insecticide and pest repellent",
            "Ingredient in skincare and hair care products",
            "Used in dental hygiene products"
        ]
    },


    "SNAKE": {
        name: "Snake Plant",
        scientificNameHeading: "Scientific Name",
        scientificName: "Sansevieria trifasciata",
        usesHeading: "Key Uses",
        uses: [
            "Air purification by removing toxins",
            "Low maintenance indoor plant",
            "May help regulate humidity",
            "Produces oxygen at night"
        ]
    },
    "LAVENDER": {
        name: "Lavender",
        scientificNameHeading: "Scientific Name",
        scientificName: "Lavandula angustifolia",
        usesHeading: "Key Uses",
        uses: [
            "Aromatic plant used in aromatherapy",
            "Scented ingredient in perfumes and soaps",
            "May have calming and relaxing effects",
            "Used in culinary applications (e.g., baking, teas)"
        ]
    },
    "BANANA": { // Assuming your hotspot data-plant value for Banana Tree is "BANANA"
        name: "Banana Tree",
        scientificNameHeading: "Scientific Name",
        scientificName: "Musa spp.",
        usesHeading: "Key Uses",
        uses: [
            "Source of edible fruit (bananas)",
            "Leaves used for wrapping and cooking food",
            "Pseudostem fibers used for textiles and paper",
            "Ornamental plant in gardens"
        ]
    },
    "ALOE": {
        name: "Aloe Vera",
        scientificNameHeading: "Scientific Name",
        scientificName: "Aloe barbadensis miller",
        usesHeading: "Key Uses",
        uses: [
            "Soothes sunburns and minor burns",
            "Moisturizes skin",
            "Used in various cosmetic products",
            "May have digestive benefits"
        ]
    },
    "TULSI": {
        name: "Tulsi (Holy Basil)",
        scientificNameHeading: "Scientific Name",
        scientificName: "Ocimum tenuiflorum",
        usesHeading: "Key Uses",
        uses: [
            "Used in traditional Ayurvedic medicine",
            "Adaptogen to help manage stress",
            "Ingredient in herbal teas",
            "May have antioxidant properties"
        ]
    },
    "NIMBU": {
        name: "Lemon",
        scientificNameHeading: "Scientific Name",
        scientificName: "Citrus limon",
        usesHeading: "Key Uses",
        uses: [
            "Culinary uses in drinks and dishes",
            "Source of Vitamin C",
            "Used in cleaning products",
            "May have antiseptic properties"
        ]
    }
};
    

    
    

// 🔥 Listen for hotspot clicks only
modelViewer.addEventListener('click', (event) => {
    const target = event.target;

    // Check if a hotspot (with data-plant attribute) was clicked
    if (target && target.dataset && target.dataset.plant) {
        const plantKey = target.dataset.plant;

        if (plantData[plantKey]) {
            document.getElementById("plant-name").innerText = plantData[plantKey].name;
     document.getElementById("scientific-name").innerText = plantData[plantKey].scientificNameHeading;
     document.getElementById("scientific-name-value").innerText = plantData[plantKey].scientificName;
     document.getElementById("uses-heading").innerText = plantData[plantKey].usesHeading;
     document.getElementById("uses").innerText = plantData[plantKey].uses;
            


            // positionInfoBox(event.clientX, event.clientY);
            infoBox.classList.remove("hidden");
        }
    }
});

// function positionInfoBox(x, y) {
//     const boxWidth = infoBox.offsetWidth || 200;
//     const boxHeight = infoBox.offsetHeight || 150;
//     const pageWidth = window.innerWidth;
//     const pageHeight = window.innerHeight;

//     let left = x;
//     let top = y;

//     if (left + boxWidth > pageWidth) {
//         left = pageWidth - boxWidth - 10;
//     }
//     if (top + boxHeight > pageHeight) {
//         top = pageHeight - boxHeight - 10;
//     }

//     infoBox.style.left = `${left}px`;
//     infoBox.style.top = `${top}px`;
// }

document.addEventListener('click', (event) => {
    if (!modelViewer.contains(event.target) && !infoBox.contains(event.target)) {
        hideInfo();
    }
});

function hideInfo() {
    infoBox.classList.add("hidden");
}

const closeBtn = document.getElementById("close-info");
if (closeBtn) {
    closeBtn.addEventListener("click", hideInfo);
}





// function positionInfoBox(x, y) {
//     const boxWidth = infoBox.offsetWidth || 200;
//     const boxHeight = infoBox.offsetHeight || 150;
//     const pageWidth = window.innerWidth;
//     const pageHeight = window.innerHeight;

    // let left = x + 10; // Small offset so it doesn't sit directly under cursor
    // let top = y + 10;

    // 👇 Check right edge
//     if (left + boxWidth > pageWidth) {
//         left = x - boxWidth - 10;
//     }

//     // 👇 Check bottom edge
//     if (top + boxHeight > pageHeight) {
//         top = y - boxHeight - 10;
//     }

//     // 👇 Optional: clamp to zero to prevent negative
//     if (left < 0) left = 10;
//     if (top < 0) top = 10;

//     infoBox.style.left = `${left}px`;
//     infoBox.style.top = `${top}px`;
// }i







