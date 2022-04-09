# **Arduino Quiz**
**[Click here to visit the Arduino Quiz website](https://kwalczak80.github.io/Arduino-Quiz)**<br>
<p>If you are passionate about the Arduino microcontroller and would like to test your knowledge of it, then I would like to invite you to take this quiz by clicking the link above. The quiz requires the user to answer ten Arduino-related questions based on different knowledge categories. I hope you will have great fun. Enjoy!!!</p>

![Responsive Design](assets/docs/responsive-design.PNG "Responsive Design of Arduino Quiz website")
<hr>

# **User Experience (UX)**

<h2>User Goals</h2>

<ul>
   <li>Visually appealing website.</li>
   <li>The website has to be easy and intuitive to use.</li>
   <li>The website has to work well on different screen sizes, such as mobile phones, tablets, and desktops.</li>
   <li>The quiz rules are clearly explained.</li>
   <li>The quiz progress is displayed on the screen in the appropriate form.</li>
</ul>

<h2>User Stories</h2>
<ul>
   <li>
      <strong>User Goals</strong>
      <ul>
         <li>As a user, I would like to play this quiz regardless of the device screen size I'm using.</li>
         <li>As a user, I would like to easily understand the quiz rules.</li>
         <li>As a user, I would like to track the quiz progress.</li>
         <li>As a user, I would like to know when the quiz is complete.</li>
         <li>As a user, I would like to have a chance to retake the quiz to improve my score.</li>
         <li>As a user, I would like to visit the official Arduino website where I can information regarding the questions asked in the quiz.</li>
      </ul>
    </li>
</ul>

<h2>Site owners Goals</h2>

<ul>
   <li>To have an appealing website where Arduino users can check their knowledge.</li>
   <li>To have a website that is easy to navigate and has a lot of functionality so that the user can enjoy the quiz.</li>
   <li>Update the quiz questions regularly, as it may prompt the user to return to the website.</li>
</ul>
<hr>

# **Wireframe**
<ul>
   <li>The Balsamiq software was to create a visual layout of the Arduino Quiz website. You can check the wireframes below.</li>
   <ul>
      <li>The desktop wireframes showing all the sections can be found <a href="assets/docs/arduino-quiz-wireframe-for-desktop-all-sections.pdf">here</a></li>
      <li>The tablet/ipad wireframes showing the all sections can be found <a href="assets/docs/arduino-quiz-wireframe-for-tablet-all-sections.pdf">here</a></li>
      <li>The mobile wireframes showing all the sections found <a href="assets/docs/arduino-quiz-wireframe-for-mobile-all-sections.pdf">here</a></li>
   </ul>
</ul>
<hr>

# **Design**
   <ul>
      <li><strong>Typography</strong></li>
      <ul>
         <li>I visited the <a href="https://fonts.google.com/">Google fonts </a> website to explore available font options for my project. After consideration, three different font types were chosen to be used in different sections of the website.</li>
         <li>The <a href="https://fonts.google.com/?query=teko">Teko</a> font is used to display the quiz name.</li>
         <li>The <a href="https://fonts.google.com/?query=Roboto+Condensed+">Roboto Condensed</a> font is used to display the quiz questions.</li>
         <li>The <a href="https://fonts.google.com/?query=Roboto">Roboto</a> font is used to display all other text information.</li>
         <li>All the fonts mentioned above were imported from the official Google fonts website.</li>
      </ul>
   </ul>
 <ul>
      <li><strong>Background</strong></li>
      <ul>
         <li>I initially intended to use a picture as the background for the page. Nevertheless, since the quiz is about electronic devices, I dropped this idea as I wanted to have a more attractive website. Thus, I decided to implement an animated background that is more relevant to the website's topic. After doing some research, I found an interesting video showing some sort of motherboard electronic circuit with animated blue lines indicating the flow of electric current. Since this video is aligned with the website topic and at the same time does not distract the user from other parts of the website, I decided to use it as a looped video background for the website.</li>
      </ul>
</ul>

 <ul>
      <li><strong>Colour Scheme</strong></li>
      <ul>
      <li>Gradient</li>
         <ul>
         <li>I used <a href="https://https://cssgradient.io/">CSS gradient</a> website to create a gradient background for my project. This gradient is used as a background for the quiz information being displayed on the page.
The contrast checker was used to make sure that the contrast is sufficient and that there are no issues with the website readability.
         </li>

![Gradient background](assets/images/gradient.PNG "Gradient Background")
         </ul>
      <li>Colour Scheme</li>
![Scheme colours](assets/images/main-website-colors.PNG "Main website colors")
         <ul>
            <li>#1E1E1E – color was used for all the text information being displayed on the website. A contrast checker was also used in this case to make sure that the text and background colors do not create issues with website readability.</li>
            <li>#17608A - color was used as a background for all the buttons used on the website.</li>
            <li>#F7F7F7 - color was used to display the text information on the buttons</li>
            <li>#088308 - color was used to highlight correctly answered question</li>
            <li>#D10F0F - color was used to highlight incorrectly answered question</li>
         </ul>
      </ul>
</ul>

# **Site Structure**
<p>This website is designed to be a one-page site. Based on the user activity, relevant sections of the website are being shown or hidden. This is done when the user clicks on the button in order to proceed through the quiz. To start the quiz user must first enter their name which will be then populated on the welcome screen where the rules of the quiz are displayed. Once the user is familiar with the rules, they can hit the “I understand. Let’s play” button to start the quiz. Questions are presented one by one with the current question number shown on the screen. In order to move to the next question, the current question must be answered. The scoring area helps the user to track which questions were answered correctly and which were not. Upon completion of the quiz, a summary of correctly answered questions is displayed on the screen. At this point, the user has two choices; to do the quiz again by clicking on the “Try again” button or to visit the Arduino official website by clicking on the Arduino icon. This will open the Arduino official website in a new window.</p>


