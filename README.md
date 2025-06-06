# Exam PRO1001 - Project 
This work consists of web app promoting sustainable and local produce delivery from Treider Gård (Example famr), built with HTML5, CSS3, and JavaScript. The application showcases seasonal picks, farm information, product listings, and includes a conversational AI chatbot to assist users.

Designed with a mobile-first approach and refined to match the project's Figma prototype as close as possible but given my own tweaks, both for lack of time, and as some sort of testing new things.

## 🛠️ How to Run It
Open `index.html` in a web browser. Etc.. Add more info here later - 01.06.2025

## 🧑‍💻 Author
Daniel Portillo

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
    - With tou OpenAI account, navigate to the API section.
    - You'll find a button that mention create API KEY. Copy that.
    - Insert your OpenAI API key in `chatbot.js`:
        - Find this variable at the top of the 
        ```js file
        const API_KEY = "API-KEY";
        ```
    - Ready, now test it in the  `index.html` desktop verison, or click the "Chat" link in the menu burger in the mobile menu.

## Accessibility & Performance

- Follows WCAG 2.1 AA guidelines
- Keyboard navigable menu and form controls
- Responsive font sizes and layouts using media queries
- Optimized images and lazy loading considered
- Uses semantic HTML elements

## 📁 File Structure & Resources

1. Tools use:
    - Visual Studio Code 
    - Git for version control, collaboration, and hosting
    - Browser Developer Tools for debugging, performance monitoring, and accessibility testing.

2. Design and Prototyping:
    - Figma: Access the provided design specifications and assets for the webshop project.

3. API Integration:
    - OpenAI API Key to integrate the chatbot. Although, it works, I did not have enough credits to fully test this. Next time would have been better to use another one that is free, so I, and other users, don't need to create new accounts to get more credits.
    - Third-Party API Key Leaflet for interatice map display.

3. Testing and Debugging
    - DevTools
    - Lighthouse: A tool built into Chrome Developer Tools for assessing the performance, accessibility, and best practices of your web application.

## Credits

- Project brief and design: Provided by course/assignment
- OpenAI API: https://platform.openai.com
- Leaflet for allowing free open source access to pinpoint maps
- Font: Frank Ruhl Libre, Arimo (via Google Fonts)
