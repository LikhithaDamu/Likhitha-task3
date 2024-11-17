// JavaScript for the Image Carousel
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    const newTransform = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransform}%)`;
}

// Fetch Data from API (mock API for Saree details)
document.addEventListener('DOMContentLoaded', () => {
    fetchSareeData();
});

async function fetchSareeData() {
    // Mock API Response for Saree Details
    const sareeData = [
        { name: "Silk Saree", description: "A luxurious silk saree with intricate patterns.", image: "https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/2023/Aug/JACQUARD-WOVEN-WORK-BANARASI-SILK-SAREE-WITH-BLOUSE-In-Green-Colour-SR01352519-A.jpg" },
        { name: "Cotton Saree", description: "Comfortable cotton saree perfect for daily wear.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9ScqtUV_oDjWICbN3qHefEs9lLdkVdYxEw&s" },
        { name: "Chiffon Saree", description: "Elegant chiffon saree for evening parties.", image: "https://assets.ajio.com/medias/sys_master/root/20230916/SXq5/6505d873ddf7791519df85d9/-473Wx593H-466569505-blue-MODEL.jpg" },
        { name: "Georgette Saree", description: "Flowy georgette saree with beautiful embroidery.", image: "https://static.wixstatic.com/media/4594f8_ff7347cb7afc43cf909da1d7669e0f1c~mv2.jpg/v1/fill/w_480,h_644,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4594f8_ff7347cb7afc43cf909da1d7669e0f1c~mv2.jpg" }
    ];

    const sareeItemsContainer = document.getElementById('saree-items');
    sareeData.forEach(item => {
        const sareeElement = document.createElement('div');
        sareeElement.classList.add('saree-item');
        sareeElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        sareeItemsContainer.appendChild(sareeElement);
    });
}
