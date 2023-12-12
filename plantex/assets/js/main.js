

    // Data for navigation items
    const navData = [
      { text: "Home", link: "#home", active: true },
      { text: "About", link: "#about", active: false },
      { text: "Products", link: "#products", active: false },
      { text: "FAQs", link: "#faqs", active: false },
      { text: "Contact Us", link: "#contact", active: false },
      { text: "Author", link: "author.html", active: false }
  ];

  // Create the navigation list dynamically
  const navList = document.createElement("ul");
  navList.classList.add("nav__list");

  navData.forEach(item => {
      const navItem = document.createElement("li");
      navItem.classList.add("nav__item");

      const navLink = document.createElement("a");
      navLink.href = item.link;
      navLink.classList.add("nav__link");
      if (item.active) {
          navLink.classList.add("active-link");
      }
      navLink.textContent = item.text;

      navItem.appendChild(navLink);
      navList.appendChild(navItem);
  });

  // Append the generated navigation to the container
  const navContainer = document.getElementById("nav-menu");
  navContainer.appendChild(navList);

  // nav author

// Home - social network

// Data for social links
const socialLinksData = [
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100017969461650', iconClass: 'ri-facebook-fill' },
  { platform: 'Instagram', url: 'https://www.instagram.com/nikola_vujetic_/', iconClass: 'ri-instagram-line' },
  { platform: 'Whatsapp', url: 'https://wa.me/381601309495', iconClass: 'ri-whatsapp-line' }
];

// Create the social links dynamically
const homeSocialContainer = document.querySelector('.home__social');

const socialContainer = document.createElement('div');
socialContainer.classList.add('home__social-links');

socialLinksData.forEach(link => {
  const socialLink = document.createElement('a');
  socialLink.href = link.url;
  socialLink.target = '_blank';
  socialLink.classList.add('home__social-link');

  const icon = document.createElement('i');
  icon.classList.add(link.iconClass);

  socialLink.appendChild(icon);
  socialContainer.appendChild(socialLink);
});

// Create the "Follow Us" span element
const followUsSpan = document.createElement('span');
followUsSpan.classList.add('home__social-follow');
followUsSpan.textContent = 'Follow Us';

// Append the "Follow Us" span and social links to the container
homeSocialContainer.appendChild(followUsSpan);
homeSocialContainer.appendChild(socialContainer);

// STEPS


// Create the steps dynamically
const stepsData = [
  { number: '01', title: 'Choose Plant', description: 'We have several varieties of plants you can choose from.' },
  { number: '02', title: 'Place an Order', description: 'Once your order is set, we move to the next step which is shipping.' },
  { number: '03', title: 'Get Plants Delivered', description: 'Our delivery process is easy, you receive the plant directly to your door.' }
];

// Create the steps dynamically
const stepsSection = document.getElementById('steps');
stepsSection.classList.add('steps', 'section', 'container');

const stepsBg = document.createElement('div');
stepsBg.classList.add('steps__bg');

const stepsTitle = document.createElement('h2');
stepsTitle.classList.add('section__title-center', 'steps__title');
stepsTitle.innerHTML = 'Steps to start your <br> plants off right';

const stepsCardsContainer = document.createElement('div');
stepsCardsContainer.classList.add('steps__container', 'grid');

stepsData.forEach(step => {
  const stepsCard = document.createElement('div');
  stepsCard.classList.add('steps__card');

  const stepsCardNumber = document.createElement('div');
  stepsCardNumber.classList.add('steps__card-number');
  stepsCardNumber.textContent = step.number;

  const stepsCardTitle = document.createElement('h3');
  stepsCardTitle.classList.add('steps__card-title');
  stepsCardTitle.textContent = step.title;

  const stepsCardDescription = document.createElement('p');
  stepsCardDescription.classList.add('steps__card-description');
  stepsCardDescription.textContent = step.description;

  stepsCard.appendChild(stepsCardNumber);
  stepsCard.appendChild(stepsCardTitle);
  stepsCard.appendChild(stepsCardDescription);

  stepsCardsContainer.appendChild(stepsCard);
});

// Append elements to the body
stepsSection.appendChild(stepsBg);
stepsBg.appendChild(stepsTitle);
stepsBg.appendChild(stepsCardsContainer);


// PRODUCTS

const productsData = [
  { imgSrc: 'assets/img/product1.png', title: 'Cacti Plant', price: '$19.99' },
  { imgSrc: 'assets/img/product2.png', title: 'Cactus Plant', price: '$11.99' },
  { imgSrc: 'assets/img/product3.png', title: 'Aloe Vera Plant', price: '$7.99' },
  { imgSrc: 'assets/img/product4.png', title: 'Succulent Plant', price: '$5.99' },
  { imgSrc: 'assets/img/product5.png', title: 'Succulent Plant', price: '$10.99' },
  { imgSrc: 'assets/img/product6.png', title: 'Green Plant', price: '$8.99' },
];

// Create the product section dynamically
const productSection = document.getElementById('products');
productSection.classList.add('product', 'section', 'container');

const productContainer = document.createElement('div');
productContainer.classList.add('product__container', 'grid');

productsData.forEach(product => {
  const productCard = document.createElement('article');
  productCard.classList.add('product__card');

  const productCircle = document.createElement('div');
  productCircle.classList.add('product__circle');

  const productImg = document.createElement('img');
  productImg.src = product.imgSrc;
  productImg.alt = '';
  productImg.classList.add('product__img');

  const productTitle = document.createElement('h3');
  productTitle.classList.add('product__title');
  productTitle.textContent = product.title;

  const productPrice = document.createElement('span');
  productPrice.classList.add('product__price');
  productPrice.textContent = product.price;

  const productButton = document.createElement('button');
  productButton.classList.add('button--flex', 'product__button');

  const productIcon = document.createElement('i');
  productIcon.classList.add('ri-shopping-bag-line');

  // Append elements to the product card
  productButton.appendChild(productIcon);
  productCard.appendChild(productCircle);
  productCard.appendChild(productImg);
  productCard.appendChild(productTitle);
  productCard.appendChild(productPrice);
  productCard.appendChild(productButton);

  // Append the product card to the container
  productContainer.appendChild(productCard);
});

// Append elements to the body
productSection.appendChild(productContainer);


// FAQ

const faqsData = [
  { title: 'My flowers are falling off or dying?', description: 'Plants are an easy way to add color energy and transform your space, but choosing the right plant is essential. Make sure to provide proper care and consider factors like sunlight, water, and soil.' },
  { title: 'What causes leaves to become pale?', description: 'Plants can have pale leaves due to various factors such as nutrient deficiencies, insufficient light, or improper watering. Identify the specific needs of your plant and adjust care accordingly.' },
  { title: 'What causes brown crispy leaves?', description: 'Brown crispy leaves can be a sign of underwatering, overwatering, or environmental stress. Check the soil moisture, adjust watering, and ensure the plant is in suitable conditions.' },
  { title: 'How do I choose a plant?', description: 'Choosing a plant depends on factors like your location, available sunlight, and the level of care you can provide. Research different plant species and consider their specific requirements before making a selection.' },
  { title: 'How do I change the pots?', description: 'When changing pots, choose a container with drainage holes, use well-draining soil, and carefully transplant the plant. Be gentle to avoid damaging the roots, and water the plant after repotting.' },
  { title: 'Why are gnats flying around my plant?', description: 'Gnats around plants may indicate overwatering or damp soil. Allow the soil to dry out between waterings, and consider using sticky traps to capture the gnats. Maintain good hygiene to prevent infestations.' },
];

// Create the FAQ section dynamically
const faqSection = document.getElementById('faqs');
faqSection.classList.add('questions', 'section');

const faqContainer = document.createElement('div');
faqContainer.classList.add('questions__container', 'container', 'grid');

// Create FAQ groups dynamically
const faqGroups = faqsData.reduce((groups, faq, index) => {
  const groupIndex = Math.floor(index / 3);

  if (!groups[groupIndex]) {
      groups[groupIndex] = document.createElement('div');
      groups[groupIndex].classList.add('questions__group');
  }

  const faqItem = document.createElement('div');
  faqItem.classList.add('questions__item');

  const faqHeader = document.createElement('header');
  faqHeader.classList.add('questions__header');

  const faqIcon = document.createElement('i');
  faqIcon.classList.add('ri-add-line', 'questions__icon');

  const faqTitle = document.createElement('h3');
  faqTitle.classList.add('questions__item-title');
  faqTitle.textContent = faq.title;

  const faqContent = document.createElement('div');
  faqContent.classList.add('questions__content');

  const faqDescription = document.createElement('p');
  faqDescription.classList.add('questions__description');
  faqDescription.textContent = faq.description;

  // Append elements to the FAQ item
  faqHeader.appendChild(faqIcon);
  faqHeader.appendChild(faqTitle);
  faqContent.appendChild(faqDescription);
  faqItem.appendChild(faqHeader);
  faqItem.appendChild(faqContent);

  // Append the FAQ item to the group
  groups[groupIndex].appendChild(faqItem);

  return groups;
}, []);

// Append FAQ groups to the container
faqGroups.forEach(group => {
  faqContainer.appendChild(group);
});

// Append elements to the body
faqSection.appendChild(faqContainer);

// CONTACT

// Create the contact section dynamically
const contactSection = document.getElementById('contact');
contactSection.classList.add('contact', 'section', 'container');

// Create the contact container dynamically
const contactContainer = document.createElement('div');
contactContainer.classList.add('contact__container', 'grid');

// Create the contact box dynamically
const contactBox = document.createElement('div');
contactBox.classList.add('contact__box');

// Create the contact title dynamically
const contactTitle = document.createElement('h2');
contactTitle.classList.add('section__title');
contactTitle.innerHTML = 'Reach out to us today <br> via any of the given <br> information';

// Create the contact data dynamically
const contactData = document.createElement('div');
contactData.classList.add('contact__data');

// Create the contact information dynamically
const contactInformation1 = createContactInformation('Call us for instant support', '+380 130 9444', 'ri-phone-line');
const contactInformation2 = createContactInformation('Write us by mail', 'nikola.vujetic.17.20@gmail.com', 'ri-mail-line');

// Append the contact information to the contact data
contactData.appendChild(contactInformation1);
contactData.appendChild(contactInformation2);

// Append the contact title and data to the contact box
contactBox.appendChild(contactTitle);
contactBox.appendChild(contactData);

// Create the contact form dynamically
const contactForm = document.createElement('form');
contactForm.action = '';
contactForm.classList.add('contact__form');

// Create the contact inputs dynamically
const contactInputs = document.createElement('div');
contactInputs.classList.add('contact__inputs');

// Create contact input fields dynamically
createContactInput('text', ' ', 'First name', 'fname');
createContactInput('text', ' ', 'Last name', 'lname');
createRadioButton('male', 'Male', 'male');
createRadioButton('female', 'Female', 'female');
createContactInput('email', ' ', 'Email', 'email');
createContactInput('text', ' ', 'Subject');

// Create the contact area dynamically
const contactArea = document.createElement('div');
contactArea.classList.add('contact__content', 'contact__area');

const contactTextarea = document.createElement('textarea');
contactTextarea.name = 'message';
contactTextarea.placeholder = ' ';
contactTextarea.classList.add('contact__input');

const contactLabelTextarea = document.createElement('label');
contactLabelTextarea.for = '';
contactLabelTextarea.classList.add('contact__label');
contactLabelTextarea.textContent = 'Message';

// Append textarea elements to the contact area
contactArea.appendChild(contactTextarea);
contactArea.appendChild(contactLabelTextarea);

// Append the contact area to the inputs container
contactInputs.appendChild(contactArea);

// Create the send button dynamically
const sendButton = document.createElement('button');
sendButton.classList.add('button', 'button--flex',);
sendButton.id = "buttonS";
 

const sendButtonText = document.createTextNode('Send Message');
const sendButtonIcon = document.createElement('i');
sendButtonIcon.classList.add('ri-arrow-right-up-line', 'button__icon');

// Append text and icon to the send button
sendButton.appendChild(sendButtonText);
sendButton.appendChild(sendButtonIcon);

// Append elements to the form
contactForm.appendChild(contactInputs);
contactForm.appendChild(sendButton);

// Append contact box and form to the contact container
contactContainer.appendChild(contactBox);
contactContainer.appendChild(contactForm);

// Append contact container to the contact section
contactSection.appendChild(contactContainer);

// Append section to the body

// Function to create contact information dynamically
function createContactInformation(subtitle, description, iconClass) {
  const contactInformation = document.createElement('div');
  contactInformation.classList.add('contact__information');

  const contactSubtitle = document.createElement('h3');
  contactSubtitle.classList.add('contact__subtitle');
  contactSubtitle.textContent = subtitle;

  const contactDescription = document.createElement('span');
  contactDescription.classList.add('contact__description');
  const icon = document.createElement('i');
  icon.classList.add(iconClass, 'contact__icon');
  contactDescription.appendChild(icon);
  contactDescription.innerHTML += description;

  // Append elements to the contact information
  contactInformation.appendChild(contactSubtitle);
  contactInformation.appendChild(contactDescription);

  return contactInformation;
}

// Function to create contact input field
function createContactInput(type, placeholder, labelText, id) {
  const contactContent = document.createElement('div');
  contactContent.classList.add('contact__content');

  const contactInput = document.createElement('input');
  contactInput.type = type;
  contactInput.placeholder = ' ';
  contactInput.setAttribute('id', id);
  contactInput.classList.add('contact__input');
  
  const contactLabel = document.createElement('label');
  contactLabel.for = '';
  contactLabel.classList.add('contact__label');
  contactLabel.textContent = labelText;

if(labelText === "First name" || labelText === "Last name" || labelText === "Email" || labelText == "Female"){
  const divMessage = document.createElement('div');
  divMessage.classList.add('vMessage')
}

  // Append elements to the contact content
  contactContent.appendChild(contactInput);
  contactContent.appendChild(contactLabel);

  // Append the contact content to the inputs container
  contactInputs.appendChild(contactContent);
  
}


// Function to create radio button dynamically
function createRadioButton(id, label, value) {
  const radioDiv = document.createElement('div');
  radioDiv.classList.add("rDiv");

  const radioInput = document.createElement('input');
  radioInput.type = 'radio';
  radioInput.id = id;
  radioInput.classList.add('radioB');
  radioInput.name = 'gender';
  radioInput.value = value;

  const radioLabel = document.createElement('label');
  radioLabel.classList.add('radioLabel');
  radioLabel.for = id;
  radioLabel.textContent = label;

  // Append radio elements to the inputs container
  
  radioDiv.appendChild(radioInput);
  radioDiv.appendChild(radioLabel);
  contactInputs.appendChild(radioDiv);
}

// SUBSCRIBE BUTTON validation
function validateSubscribe() {
  const emailInput = document.getElementById('emailInput');
  const messageDiv = document.getElementById('message');
  const sub = document.querySelector('.footer__subscribe');
  const email = emailInput.value;

  if (isValidEmail(email)) {
    sub.nextElementSibling.innerHTML = "Successfully subscribed!";
    sub.nextElementSibling.classList.remove("mistake");
    sub.nextElementSibling.classList.add("correct");
  } else {
      sub.nextElementSibling.classList.remove("correct");
      sub.nextElementSibling.classList.add("mistake");
      sub.nextElementSibling.innerHTML = `Invalid address!<br/>Format: example.example@example.eg`;
  }
  setTimeout(() => {
    messageDiv.style.opacity = 0;
    setTimeout(() => {
      sub.nextElementSibling.innerHTML = '';
      sub.nextElementSibling.innerHTML = '';
      messageDiv.style.opacity = 1;
    }, 500); 
  }, 3000);
}

// Function to validate email format
function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[a-z][\d\w\.]*\@[a-z]{3,}(\.[a-z]{2,4}){1,3}$/;
  return emailRegex.test(email);
}

// Add event listener to the "Subscribe" button
const subscribeButton = document.getElementById('subscribeButton');
subscribeButton.addEventListener('click', validateSubscribe);

document.getElementById('buttonS').addEventListener('click', function(event) {
  // Prevent the default form submission
  event.preventDefault();


  document.getElementById('fname').scrollIntoView({
    behavior: 'smooth'
  });
});

// FOOTER

/*document.addEventListener('DOMContentLoaded', function () {

  // Data for dynamic content
  const footerData = [
      {
          title: 'Subscribe',
          logoIcon: 'ri-leaf-line',
          logoText: 'Plantex',
          subtitle: 'Subscribe to our newsletter <br> to stay updated',
          inputId: 'emailInput',
          inputPlaceholder: 'Enter your email',
          buttonId: 'subscribeButton',
          buttonText: 'Subscribe',
          buttonIcon: 'ri-arrow-right-up-line',
          messageId: 'message'
      },
      {
          title: 'Our Address',
          information: ['Serbia', 'Ub - 14210', { text: 'Documentation', url: '#' }]
      },
      {
          title: 'Contact Us',
          information: ['+380 130 9444'],
          socialLinks: [
              { url: 'https://www.facebook.com/profile.php?id=100017969461650', iconClass: 'ri-facebook-fill' },
              { url: 'https://www.instagram.com/nikola_vujetic_/', iconClass: 'ri-instagram-line' }
          ]
      },
      {
          title: 'We accept all credit cards',
          cardImages: ['assets/img/card1.png', 'assets/img/card2.png', 'assets/img/card3.png', 'assets/img/card4.png']
      }
  ];

  // Create footer container
  const footerContainer = document.createElement('div');
  footerContainer.className = 'footer__container container grid';

  // Create Subscribe section first
  const subscribeItem = footerData.shift();
  const subscribeContent = document.createElement('div');
  subscribeContent.className = 'footer__content';

  const logoLink = document.createElement('a');
  logoLink.href = '#';
  logoLink.className = 'footer__logo';

  const logoIcon = document.createElement('i');
  logoIcon.className = `ri-leaf-line ${subscribeItem.logoIcon} footer__logo-icon`;

  logoLink.appendChild(logoIcon);
  logoLink.innerHTML += ` ${subscribeItem.logoText}`;
  subscribeContent.appendChild(logoLink);

  const title = document.createElement('h3');
  title.className = 'footer__title';
  title.innerHTML = subscribeItem.subtitle;
  subscribeContent.appendChild(title);

  const subscribeDiv = document.createElement('div');
  subscribeDiv.className = 'footer__subscribe';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = subscribeItem.inputId;
  emailInput.placeholder = subscribeItem.inputPlaceholder;
  emailInput.className = 'footer__input';

  const subscribeButton = document.createElement('button');
  subscribeButton.id = subscribeItem.buttonId;
  subscribeButton.className = 'button button--flex footer__button';
  subscribeButton.innerHTML = `${subscribeItem.buttonText} <i class="${subscribeItem.buttonIcon} button__icon"></i>`;

  subscribeDiv.appendChild(emailInput);
  subscribeDiv.appendChild(subscribeButton);
  subscribeContent.appendChild(subscribeDiv);

  const messageDiv = document.createElement('div');
  messageDiv.id = subscribeItem.messageId;
  subscribeContent.appendChild(messageDiv);

  footerContainer.appendChild(subscribeContent);

  // Loop through the rest of the data array and create elements dynamically
  footerData.forEach(item => {
      const content = document.createElement('div');
      content.className = 'footer__content';

      const title = document.createElement('h3');
      title.className = 'footer__title';
      title.textContent = item.title;
      content.appendChild(title);

      if (item.information) {
          const dataList = document.createElement('ul');
          dataList.className = 'footer__data';

          item.information.forEach(info => {
              const listItem = document.createElement('li');
              listItem.className = 'footer__information';

              if (typeof info === 'object' && info.text && info.url) {
                  const socialLink = document.createElement('a');
                  socialLink.href = info.url;
                  socialLink.className = 'footer__social-link';
                  socialLink.textContent = info.text;

                  listItem.appendChild(socialLink);
              } else {
                  listItem.textContent = info;
              }

              dataList.appendChild(listItem);
          });

          content.appendChild(dataList);
      }

      if (item.socialLinks) {
          const socialContainer = document.createElement('div');
          socialContainer.className = 'footer__social';

          item.socialLinks.forEach(link => {
              const socialLink = document.createElement('a');
              socialLink.href = link.url;
              socialLink.className = 'footer__social-link';

              const icon = document.createElement('i');
              icon.className = link.iconClass;

              socialLink.appendChild(icon);
              socialContainer.appendChild(socialLink);
          });

          content.appendChild(socialContainer);
      }

      if (item.cardImages) {
          const cardContainer = document.createElement('div');
          cardContainer.className = 'footer__cards';

          item.cardImages.forEach(src => {
              const cardImage = document.createElement('img');
              cardImage.src = src;
              cardImage.alt = '';
              cardImage.className = 'footer__card';
              cardContainer.appendChild(cardImage);
          });

          content.appendChild(cardContainer);
      }

      footerContainer.appendChild(content);
  });
  footer = document.createElement('footer');
  footer.appendChild(footerContainer);
});
*/
// FORM VALIDATION

try {
  // FORM REG EX

  let provera = document.querySelector("#buttonS");

  provera.addEventListener("click", proveri);

  function proveri(event) {
    event.preventDefault();

    // RegEx Ime
    let firstName = document.querySelector("#fname");
    let regFirstName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14})*$/;

    if (regFirstName.test(firstName.value)) {
      firstName.nextElementSibling.classList.remove("mistake");
      firstName.nextElementSibling.classList.add("correct");
      firstName.nextElementSibling.innerHTML = "Valid entry";
    } else {
      firstName.nextElementSibling.classList.remove("correct");
      firstName.nextElementSibling.classList.add("mistake");
      firstName.nextElementSibling.innerHTML =
        "The first letter must be uppercase and the name can only contain letters.";
    }
    firstName.addEventListener("input", () => {
      if (regFirstName.test(firstName.value)) {
        firstName.nextElementSibling.style.opacity = 0;
        setTimeout(() => {
          firstName.nextElementSibling.innerHTML = "Valid entry";
          firstName.nextElementSibling.classList.remove("mistake"); // Remove the mistake class
          firstName.nextElementSibling.classList.add("correct");
          firstName.nextElementSibling.style.opacity = 1;
        }, 2000);
      }
    });

    // RegEx Prezime
    let lastName = document.querySelector("#lname");
    let regLastName = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14})*$/;

    if (regLastName.test(lastName.value)) {
      lastName.nextElementSibling.classList.remove("mistake");
      lastName.nextElementSibling.classList.add("correct");
      lastName.nextElementSibling.innerHTML = "Valid entry";
    } else {
      lastName.nextElementSibling.classList.remove("correct");
      lastName.nextElementSibling.classList.add("mistake");
      lastName.nextElementSibling.innerHTML =
        "The first letter must be uppercase and the name can only contain letters.";
    }
    lastName.addEventListener("input", () => {
      if (regLastName.test(lastName.value)) {
        lastName.nextElementSibling.style.opacity = 0;
        setTimeout(() => {
          lastName.nextElementSibling.innerHTML = "Valid entry";
          lastName.nextElementSibling.classList.remove("mistake"); // Remove the mistake class
          lastName.nextElementSibling.classList.add("correct");
          lastName.nextElementSibling.style.opacity = 1;
        }, 2000);
      }
    });

    // RegEx Email
    let email = document.querySelector("#email");
    let regEmail = /^[a-z][\d\w\.]*\@[a-z]{3,}(\.[a-z]{2,4}){1,3}$/;

    if (regEmail.test(email.value)) {
      email.nextElementSibling.classList.remove("mistake");
      email.nextElementSibling.classList.add("correct");
      email.nextElementSibling.innerHTML = "Valid entry";
    } else {
      email.nextElementSibling.classList.remove("correct");
      email.nextElementSibling.classList.add("mistake");
      email.nextElementSibling.innerHTML = `Format: example.example@example.eg`;
    }
    email.addEventListener("input", () => {
      const emailCorrect = email.value;
      if (regEmail.test(emailCorrect)) {
        email.nextElementSibling.style.opacity = 0;
        setTimeout(() => {
          email.nextElementSibling.innerHTML = "Valid entry";
          email.nextElementSibling.classList.remove("mistake"); // Remove the mistake class
          email.nextElementSibling.classList.add("correct");
          email.nextElementSibling.style.opacity = 1;
        }, 2000);
      }
    });
  }
} catch (e) {}

$("body").floatingSocialShare({
  buttons: [
    "facebook", "linkedin", "pinterest", "twitter"
  ],
  text: "share with: ",
  url: "https://github.com/ozdemirburak/jquery-floating-social-share"
});

// CART

document.addEventListener('DOMContentLoaded', function () {
  // Cart object to store selected items
  let cart = [];
  const cartList = document.getElementById('cartList');
  const totalPriceElement = document.getElementById('totalPrice');
  const resetCartButton = document.getElementById('resetCartButton');

  // Function to update the cart and UI
  function updateCart(product) {
      cart.push(product);
      renderCart();
  }

  // Function to reset the cart
  function resetCart() {
      cart = [];
      renderCart();
  }

  // Function to render the cart
  function renderCart() {
      // Clear the existing cart
      cartList.innerHTML = '';

      // Calculate and update the total price
      const totalPrice = cart.reduce((total, product) => total + product.price, 0);
      totalPriceElement.textContent = totalPrice.toFixed(2);

      // Render each item in the cart
      cart.forEach(product => {
          const listItem = document.createElement('li');
          listItem.textContent = `${product.title} - $${product.price.toFixed(2)}`;
          cartList.appendChild(listItem);
      });
  }

  // Function to handle button click
  function handleButtonClick(product) {
      updateCart(product);
  }

  // Attach click event listeners to each "Add to Cart" button
  const addToCartButtons = document.querySelectorAll('.product__button');
  addToCartButtons.forEach((button, index) => {
      const product = {
          title: document.querySelectorAll('.product__title')[index].textContent,
          price: parseFloat(document.querySelectorAll('.product__price')[index].textContent.slice(1))
      };

      button.addEventListener('click', () => handleButtonClick(product));
  });

  // Attach click event listener to the "Reset Cart" button
  resetCartButton.addEventListener('click', resetCart);
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector('.questions__header')

  accordionHeader.addEventListener('click', () =>{
      const openItem = document.querySelector('.accordion-open')

      toggleItem(item)

      if(openItem && openItem!== item){
          toggleItem(openItem)
      }
  })
})

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.questions__content')

  if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
  }else{
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
  }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chosef
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img, .contact__box`,{origin: 'left'})
sr.reveal(`.about__data, .contact__form`,{origin: 'right'})
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`,{interval: 100})
