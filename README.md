# Exam PRO1001 - Project 
This work consists of web app promoting sustainable and local produce delivery from Treider Gård (Example famr), built with HTML5, CSS3, and JavaScript. The application showcases seasonal picks, farm information, product listings, and includes a conversational AI chatbot to assist users.

Designed with a mobile-first approach and refined to match the project's Figma prototype as close as possible but given my own tweaks, both for lack of time, and as some sort of testing new things.


## 🛠️ How to Run It
Open `index.html` in a web browser. Etc.. Add more info here later - 01.06.2025

## 🧑‍💻 Author
Daniel Portillo

## 📄 Project Brief

You have two options for your Project Assignment:

Sustainable Food Delivery Webshop

A sustainable food delivery service in Norway connects customers with fresh products from local farms. Customers can browse and order groceries online, with deliveries made directly to their homes from partner farms. The service emphasises sustainability and supporting local agriculture. Now, the company wants to enhance their online presence with a new webshop that highlights their commitment to sustainability while making the ordering process easy and intuitive for customers.

We have created a design of the solution and your task is to implement the design. To download the specification and assets (images) for the project go to this link at this link . Inside you will find a pdf with the specification and a folder containing the Images for the project. Here you can also get your copy of the Figma file.

    A main page that showcases the service and some products
    A product listing page for an overview of available products
    A contact us form users can get in touch
    Integration of a map (via an API) displaying the locations of partner farms
    An AI-powered chatbot for customer service that answers questions about the service and the partner farms

    Task: Create an interactive website for the webshop. You must implement the design provided in Figma, focusing on responsiveness, accessibility, and performance. 

## 🚀 Features
- Mobile-first responsive design with desktop support
- Toggle mobile navigation menu with animated transitions
- Product listing with scrollable cards and seasonal tags
- Informational sections such as "How It Works" and interactive farm map
- Accessible and styled contact form
- Newsletter signup section
- Dedicated chatbot page with OpenAI integration
- Floating chatbot icon and window on desktop

## Technologies Used

- HTML5 + semantic structure
- CSS3 + Flexbox + Media Queries
- Vanilla JavaScript (ES6+)
- OpenAI Chat API (GPT 3.5)
- Figma for design reference
- Leaflet.js – for the interactive map display

## How to Run the Project

1. Clone or download this repository.
    - Other option is, from Github, from the index.html page, click on raw, and simply replace 'githubusercontent' for 'githubhack' in the url.
2. Open `index.html` in your browser.
3. For chatbot functionality:
   - Insert your OpenAI API key in `chatbot.js`:
     ```js
     const API_KEY = "API-KEY";
     ```
   - Open `chat.html` or click the "Chat" link in the mobile menu.

## Accessibility & Performance

- Follows WCAG 2.1 AA guidelines
- Keyboard navigable menu and form controls
- Responsive font sizes and layouts using media queries
- Optimized images and lazy loading considered
- Uses semantic HTML elements

## 📁 File Structure & Resources

Development Tools
    Visual Studio Code or another code editor of your choice for writing HTML, CSS, and JavaScript.
    Git for version control and collaboration. Use GitHub for hosting your project.
    Browser Developer Tools (e.g., Chrome DevTools) for debugging, performance monitoring, and accessibility testing.

Design and Prototyping
    Figma: Access the provided design specifications and assets for the webshop project.

API Integration
    OpenAI API Key so that you can integrate the chatbot.
    Third-Party API Key of the selected API of your choosing.

Testing and Debugging
    Lighthouse: A tool built into Chrome Developer Tools for assessing the performance, accessibility, and best practices of your web application.

## 📁 Submission Requirements

Individual Deliverable

A GitHub repository containing:
    All source code
    Documentation (in PDF format)
    A comprehensive README.md file
    Maintain a clear commit history demonstrating your development process.

An Individual Reflective Journal (PDF format, 1000-1100 words) detailing:
    Your development process
    Challenges faced and solutions implemented
    Insights from the code review process
    Ethical considerations in AI implementation
    Future improvements or expansions for your project


