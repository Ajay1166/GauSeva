document.addEventListener('DOMContentLoaded', () => {
    const programs = [
      {
        id: "sanctuary",
        title: "Cow Sanctuary",
        image: "ps.webp",
        description: "Our sanctuary provides a safe haven for abandoned, sick, and elderly cows, ensuring they live with dignity and care.",
        features: [
          "24/7 veterinary care",
          "Spacious, clean shelters",
          "Natural grazing areas",
          "Specialized diets for elderly cows"
        ]
      },
      {
        id: "farming",
        title: "Organic Farming",
        image: "organic.webp",
        description: "Using traditional methods and cow-based inputs, we produce nutritious food while maintaining soil health and biodiversity.",
        features: [
          "Cow dung-based fertilizers",
          "Traditional seed preservation",
          "Natural pest management",
          "Crop rotation systems"
        ]
      },
      {
        id: "education",
        title: "Educational Workshops",
        image: "pw.jpg",
        description: "Learn about cow protection, traditional farming, and sustainable living through our hands-on workshops and seminars.",
        features: [
          "School educational tours",
          "Hands-on farming workshops",
          "Cow care training",
          "Traditional crafts using cow products"
        ]
      },
      {
        id: "products",
        title: "Cow Products",
        image: "pp.webp",
        description: "Ethically sourced cow products including milk, ghee, and cow-dung based items that support our protection efforts.",
        features: [
          "A2 milk and dairy products",
          "Handmade cow dung crafts",
          "Panchagavya preparations",
          "Organic fertilizers"
        ]
      },
      {
        id: "adoption",
        title: "Cow Adoption",
        image: "Cow adoption ceremony.jpg",
        description: "Support a specific cow through our adoption program, receiving updates and the opportunity to visit your adopted cow.",
        features: [
          "Monthly updates about your cow",
          "Personalized adoption certificate",
          "Scheduled visits to meet your cow",
          "Special festival celebration invitations"
        ]
      },
      {
        id: "volunteer",
        title: "Volunteer Program",
        image: "pv.webp",
        description: "Join our community of dedicated volunteers who help with daily cow care, farm maintenance, and special events.",
        features: [
          "Short and long-term volunteering options",
          "Training provided for all roles",
          "International volunteer opportunities",
          "Community living experience"
        ]
      }
    ];

    const programsList = document.getElementById('programs-list');

    programs.forEach((program, index) => {
      const programElement = document.createElement('div');
      programElement.classList.add('program');

      const programSide = index % 2 === 0 ? 'program-left' : 'program-right';

      const featureHTML = program.features.map((feature, i) => {
        const positionClass = i % 2 === 0 ? 'left' : 'right';
        return `<li class="feature-${positionClass}">${feature}</li>`;
      }).join('');

      programElement.innerHTML = `
        <div class="${programSide}">
          <img src="${program.image}" alt="${program.title}">
          <div class="program-content">
            <h2>${program.title}</h2>
            <p>${program.description}</p>
            <h3>Key Features:</h3>
            <ul class="features-grid">${featureHTML}</ul>
            <a href="donation/donate.html" class="cta-button">Get Involved</a>
          </div>
        </div>
      `;
      programsList.appendChild(programElement);
    });
  });

  
  