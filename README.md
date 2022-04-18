# **Arduino Quiz**
**[Click here to visit the Arduino Quiz website](https://kwalczak80.github.io/Arduino-Quiz)**<br>
<p>If you are passionate about the Arduino microcontroller and would like to test your knowledge of it, then I would like to invite you to take this quiz by clicking the link above. The quiz requires the user to answer ten Arduino-related questions based on different knowledge categories. I hope you will have great fun. Enjoy!!!</p>

![Responsive Design](docs/screenshots/responsive-design.png "Responsive Design of Arduino Quiz website")
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
      <li>As a user, I would like to visit the official Arduino website where I can find information regarding the questions asked in the quiz.</li>
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
  <li>The Balsamiq software was used to create a visual layout of the Arduino Quiz website. You can check the wireframes below.</li>
  <ul>
    <li>The desktop wireframes showing all the quiz sections can be found <a href="docs/wireframes/arduino-quiz-wireframe-for-desktop-all-sections.pdf">here</a></li>
    <li>The tablet/ipad wireframes showing all the sections can be found <a href="docs/wireframes/arduino-quiz-wireframe-for-tablet-all-sections.pdf">here</a></li>
    <li>The mobile wireframes showing all the quiz sections can be found <a href="docs/wireframes/arduino-quiz-wireframe-for-mobile-all-sections.pdf">here</a></li>
  </ul>
</ul>
<hr>

# **Design**
<h2>Typography</h2>
<ul>
  <li>I visited the <a href="https://fonts.google.com/">Google fonts </a> website to explore available font options for my project. After consideration, three different font types were chosen to be used in different sections of the website.</li>
  <li>The <a href="https://fonts.google.com/?query=teko">Teko</a> font is used to display the quiz name.</li>
  <li>The <a href="https://fonts.google.com/?query=Roboto+Condensed+">Roboto Condensed</a> font is used to display the quiz questions.</li>
  <li>The <a href="https://fonts.google.com/?query=Roboto">Roboto</a> font is used to display all other text information.</li>
  <li>All the fonts mentioned above were imported from the official Google fonts website.</li>
</ul>
<h2>Background</h2>
<ul>
  <li>I initially intended to use a picture as the background for the page. Nevertheless, since the quiz is about electronic devices, I dropped this idea as I wanted to have a more attractive website. Thus, I decided to implement an animated background that is more relevant to the website's topic. After doing some research, I found an interesting video showing some sort of motherboard electronic circuit with animated blue lines indicating the flow of electric current. Since this video is aligned with the website topic and at the same time does not distract the user from other parts of the website, I decided to use it as a looped video background for the website.</li>
</ul>

![Background](docs/screenshots/background-screenshot.png "Background")
<h2>Gradient</h2>
<ul>
  <li>I used the <a href="https://cssgradient.io/">CSS gradient</a> website to create a gradient background for my project. This gradient is used as a background for the quiz information being displayed on the page.
    The contrast checker was used to make sure that the contrast is sufficient and that there are no issues with the website readability.
  </li>
</ul>

![Gradient background](docs/screenshots/gradient.png "Gradient Background")
<h2>Colour Scheme</h2>

![Scheme colours](docs/screenshots/main-website-colors.png "Main website colors")
<ul>
  <li>After creating a color scheme with <a href="https://coolors.co/">Coolors</a>, I used the <a href="https://coolors.co/contrast-checker/1e1e1e-6ab6f3">contrast checker</a> to make sure that the contrast is sufficient and there are no issues with readability.</li>
  <ul>
  <li>#00040C - color will appear as the primary background color if the background video is taking a long time to load or if it never loads for any reason.</li>
  <li>#1E1E1E – color was used for all the text information being displayed on the website. A contrast checker was also used in this case to make sure that the text and background colors do not create issues with website readability.</li>
  <li>#17608A - color was used as a background for all the buttons used on the website.</li>
  <li>#F7F7F7 - color was used to display the text information on the buttons.</li>
  <li>#088308 - color was used to display the number of correctly answered questions.</li>
  <li>#D10F0F - color was used to display the number of incorrectly answered questions.</li>
  <li>#CECFE27E - color was used as a background for the player name input field.</li>
  </ul>
</ul>
<hr>

# **Site Structure**
<p>This website is designed to be a one-page site. Based on the user activity, relevant sections of the website are being shown or hidden. This is done when the user clicks on the button in order to proceed through the quiz. To start the quiz user must first enter their name which will be then populated on the welcome screen where the rules of the quiz are displayed. Once the user is familiar with the rules, they can hit the <strong>I understand. Let’s play</strong> button to start the quiz. Questions are presented one by one with the current question number shown on the screen. In order to move to the next question, the current question must be answered. The scoring area helps the user to track which questions were answered correctly and which were not. Upon completion of the quiz, a summary of correctly answered questions is displayed on the screen. At this point, the user has two choices; to do the quiz again by clicking on the <strong>Try again</strong> button or to visit the Arduino official website by clicking on the Arduino icon. This will open the Arduino official website in a new tab.</p>
<hr>

# **Features**
<h2>Welcome section</h2>
<ul>
  <li>At the beginning of the quiz, the welcome section is displayed on the screen informing the user about the quiz name.</li>
  <li>The user is asked to enter their name before the quiz can commence. </li>
  <li>Only uppercase and lowercase letters and spaces are accepted when entering the user name. Special characters, numbers, etc. will not be accepted.</li>
  <li>Once the user name is entered and submit button is clicked, the current section will no longer be visible.</li>
  <li>The button (in each section of the quiz) is visually highlighted by the hover effect when the user hovers over it.</li>
</ul>

![Welcome section](docs/screenshots/welcome-section.png "Welcome section")
<h2>Quiz rules</h2>
<ul>
  <li>To personalize the user experience the section with quiz rules is displayed using the user name entered on the welcome screen.</li>
  <li>The quiz rules are clearly explained to the user and are grouped as a list.</li>
  <li>Once the user is familiar with the quiz rules they are invited to click on the <strong>“I understand. Let’s play”</strong> button in order to start the quiz. </li>
</ul>

![Quiz rules](docs/screenshots/quiz-rules-section.png "Quiz rules")
<h2>Quiz section</h2>
<ul>
  <li>The quiz section screen is divided into three subsections:</li>
  <ul>
    <li>The top section is displaying the current question number.</li>
    <li>The middle section is displaying the current question with four possible answers and the submit button.</li>
    <li>The bottom section is displaying information about correctly or incorrectly answered questions.</li>
  </ul>
  <li>The quiz is navigated question by question.</li>
  <li>Each question must be answered to move to the next question.</li>
  <li>At the beginning of the quiz, all answers are deselected.</li>
  <li>To answer the question the user must select their choice by using the radio button and clicking the <strong>Submit</strong> button in order to submit the answer.</li>
</ul>

![Quiz questions](docs/screenshots/quiz-section.png "Quiz questions")
<li>The score area provides information to the user about their progress through the quiz. If the question they answered is correct the count of correctly answered questions will increase (highlighted in green). If the question is answered incorrectly the count of incorrectly answered questions will increase (highlighted in red).</li>

![Score area](docs/screenshots/score-area.png "Score area")
<li>Note that at the beginning of the quiz when no question is answered yet, the quiz results text has the inherited text color. After the first question is answered by the user the quiz results text color will automatically change to green and red respectively.</li>

![Score area inherit text color](docs/screenshots/score-area-inherit-text-color.png "Score area inherit text color")
<li>The score area has a different layout depending on which screen size the website is displayed. Therefore, the score results can be displayed in a row on bigger screens (see above) or in a column on smaller screens (mobile phones) as shown below.</li>

![Score area layout on smaller screens](docs/screenshots/score-area-layout-on-smaller-screens.png "Score area layout on smaller screens")
<h2>Error handling</h2>
<ul>
<li>If the quiz questions cannot be loaded correctly, an error message will appear on the screen to inform the user about this fact.</li>
<li>To test this functionality, I changed the JSON file name from "questions.json" to "question.json" to simulate a problem with accessing the questions file.</li>
<li>An error message was displayed on the screen as expected.</li>
</ul>

![Error message](docs/screenshots/error-message.png "Error message")
<h2>Randomized quiz questions</h2>
<ul>
  <li>Each time when a new quiz starts the questions are displayed randomly from the list. This is done to make sure that the user will not memorize the answers from the previous quiz. The special Java script function is responsible to randomize questions for each quiz.</li>
</ul>
<h2>Quiz completion</h2>
<ul>
  <li>The quiz will end once the 10 questions are answered.</li>
  <li>The summary of correctly answered questions will be displayed on the screen.</li>
  <li>A message will be displayed on the screen if none of the questions were answered correctly.</li>
  <li>The user has two choices at this stage:</li>
  <ul>
    <li>To take the quiz again if they want to improve their score – the <strong>Try again</strong> button will start a new quiz.</li>
    <li>Visit the official Arduino website where the user can find supportive information related to the questions asked in this quiz.</li>
  </ul>
</ul>

![All questions answered incorrectly](docs/screenshots/all-questions-answered-incorrectly.png "All questions answered incorrectly")
![Quiz summary](docs/screenshots/quiz-summary-section.png "Quiz summary")
![Arduino website](docs/screenshots/arduino-official-website.png "Arduino website")
<hr>

# **Features to be implemented**
<ul>
  <li>Introduce different levels of the quiz, i.e., easy, moderate, and expert – where users with different experiences can choose the quiz they want to take.</li>
  <li>Have a minimum of 30 questions for each category mentioned above.</li>
  <li>Have local storage implemented to save the user quiz results.</li>
  <li>Have a leaderboard section where the user can find the highest scores for each quiz category.</li>
  <li>Have a functionality where the question-related picture is displayed on the screen. See the example below.</li>

  ![Feature to be implemented](docs/screenshots/feature-to-be-implemented.png "Feature to be implemented")    
</ul>
<hr>

# **Technologies Used**  
<ul>
  <li><a href="https://en.wikipedia.org/wiki/HTML">HTML</a></li>
  <ul>
    <li>Markup language</li>
  </ul>
</ul>
<ul>
  <li><a href="https://en.wikipedia.org/wiki/CSS">CSS</a></li>
  <ul>
    <li>Cascading Style Sheets</li>
  </ul>
</ul>
<ul>
  <li><a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a></li>
  <ul>
    <li>Provides interactivity</li>
  </ul>
</ul>
<hr>

# **Tools**
<ul>
  <li><a href="https://balsamiq.com/">Balsamiq</a></li>
  <ul>
    <li>To create wireframes during design</li>
  </ul>
</ul>
<ul>
  <li><a href="https://fonts.google.com/">Google fonts</a></li>
  <ul>
    <li>The fonts used in the project were imported using the official Google Fonts website.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://www.freeformatter.com/">Free formatter</a></li>
  <ul>
    <li>An online tool that was used to improve HTML and CSS code presentation.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://github.com/">GitHub</a></li>
  <ul>
    <li>GitHub was used to store all the project files written in Gitpod.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://developer.chrome.com/docs/devtools/">Chrome Dev Tools</a></li>
  <ul>
    <li>Used to test code and debug errors.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://coolors.co/contrast-checker/1e1e1e-6ab6f3">Color contrast checker</a></li>
  <ul>
    <li>The tool was used to make sure the website was free of contrast issues.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://cssgradient.io/">CSS Gradient</a></li>
  <ul>
    <li>The tool was used to create a gradient background for this project.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://jsfiddle.net/">JS Fiddle</a></li>
  <ul>
    <li>The website was used as a playground to test the code.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://validator.w3.org/">W3C HTML Validation Service</a></li>
  <ul>
    <li>The tool was used to validate HTML code.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validation Service</a></li>
  <ul>
    <li>The tool was used to validate CSS code.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://jshint.com/">JSHint</a></li>
  <ul>
    <li>The tool was used to validate Javascript code.</li>
  </ul>
</ul>
<ul>
  <li><a href="http://ami.responsivedesign.is/">Am I responsive design</a></li>
  <ul>
    <li>The tool was used to test the responsiveness of the Arduino Quiz website.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://responsivedesignchecker.com/"> Responsive Web Design Checker</a></li>
  <ul>
    <li>Another tool that offers more screen options to test the website responsiveness.</li>
  </ul>
</ul>
<ul>
  <li><a href="https://beautifier.io/">Beautifier</a></li>
  <ul>
    <li>The tool used to format the javascript file to the required format. </li>
  </ul>
</ul>
<hr>

# **Testing** 
<ul>
  <li>The website has been tested on each of these browsers and was found to work correctly:</li>
  <ul>
    <li>Chrome</li>
    <li>Firefox</li>
    <li>Opera</li>
    <li>Edge</li>
  </ul>
  <li>A variety of devices were also used to view the website, including desktops, laptops, tablets, iPhone 7, and Google Pixel 4a.</li>
  <li>The website is fully operational and its design makes navigation easy for the user.</li>
  <li>Each section of the website has been verified as readable and easy to navigate.</li>
</ul>
<h2>Responsiveness</h2>
<ul>
  <li>The responsive design tests were carried out manually with <a href="https://developer.chrome.com/docs/devtools">Google Chrome DevTools</a> and <a href="https://responsivedesignchecker.com/">Responsive Web Design Checker</a>. No issues were found during the tests therefore it is confirmed that this website is designed to be responsive on all device screen sizes.</li>
</ul>
<h2>Validator Testing</h2>
<ul>
  <li>HTML - when using the official <a href="https://validator.w3.org/"> W3C Validator</a>, no errors or warnings were found during the code validation process.</li>

  ![HTML validator check results](docs/screenshots/html-validator-check.png "HTML validator check results") 
  <li>CSS - when using the official <a href="https://jigsaw.w3.org/css-validator/"> (Jigsaw) Validator.</a>, no errors or warnings were found during the code validation process.</li>

  ![CSS validator check results](docs/screenshots/css-validator-check.png "CSS validator check results")
  <li>JSHint - when using the official <a href="https://jshint.com/"> JavaScript Code Quality Tool</a> I discovered missing semi-colons on lines 56, 57. This issue was corrected immediately. No other warnings or errors are presented.</li>

  ![JSHint validator check results](docs/screenshots/jshint-validator-testing.png "JSHint validator check results")
</ul>
<h2>Lighthouse testing</h2>
<p>The Lighthouse tool was used to assess the website's accessibility and the results are shown below.</p>
<ul>
  <li>Mobile</li>

  ![Lighthouse testing mobile](docs/screenshots/lighthouse-testing-mobile.png "Lighthouse testing mobile")
  <li>Desktop</li>

  ![Lighthouse testing desktop](docs/screenshots/lighthouse-testing-desktop.png "Lighthouse testing desktop")
</ul>
<hr>

# **Testing User Stories from the User Experience (UX) Section**
<h3>As a user, I would like to play this quiz regardless of the device screen size I'm using.</h3>
<ul>
  <li><strong>Plan</strong></li>
  <p>The main goal I had when planning this project was that the Arduino quiz website would work on a variety of devices, starting with mobile phones and ending with large screens of desktop computers.</p>
  <li><strong>Implementation</strong></li>
  <p>When creating this quiz, the main idea was to create a website that would be correctly displayed on any mobile phone screen size. Once that was achieved, I focused on higher resolution devices next. The intended goals were achieved thanks to the use of appropriate tools, simulating the display of a website on various devices, and the appropriate configuration of media inquiries.</p>
  <li><strong>Testing</strong></li>
  <p>The Arduino quiz website was tested using the tools listed below.</p>
  <ul>
    <li><a href="https://developer.chrome.com/docs/devtools/">Chrome Dev Tools</a></li>
    <li><a href="http://ami.responsivedesign.is">Am I Responsive?</a></li>
    <li><a href="https://responsivedesignchecker.com">Responsive Website Design Checker</a>
  </ul>
  <li><strong>Result</strong></li>
  <p>After performing many tests, I confirm that the assumptions contained in the initial plan have been achieved.</p>
  <li><strong>Verdict</strong></li>
  <p>The Arduino Quiz website allows the user to display its content on a wide variety of screen sizes, including mobile phones, tablets, laptops, and desktops. The layout of the page can change depending on the display resolution.</p>
</ul>
<h3>As a user, I would like to easily understand the quiz rules.</h3>
<ul>
  <li><strong>Plan</strong></li>
  <p>As my project is in the form of a quiz, I wanted to make sure that the user fully understands the quiz rules that will apply before it starts.</p>
  <li><strong>Implementation</strong></li>
  <p>The rules of the quiz were formulated as simply as possible so they would be understandable by everyone. The rules are presented as a 6-point list.
  <p>These rules are displayed each time when the quiz starts.</p>
  <li><strong>Testing</strong></li>
  <p>After creating the rules for the quiz, I decided to ask my friends to check if they were clear and understandable so that there was no doubt about their meaning.</p>
  <li><strong>Result</strong></li>
  <p>The opinions received from people checking the rules of the quiz were very positive, so I believe that the user is fully informed about the course of the quiz.</p>
  <li><strong>Verdict</strong></li>
  <p>The Quiz rules are explained well in a clear and understandable format.</p>
</ul>
<h3>As a user, I would like to track the quiz progress.</h3>
<ul>
  <li><strong>Plan</strong></li>
  <p>Show the user how many questions have been answered correctly or incorrectly, and which question number is currently displayed.</p>
  <li><strong>Implementation</strong></li>
  <p>To quickly check the quiz progress, I decided to add a scoring area below the currently displayed question. This section displays information on how many questions have been answered correctly (highlighted in green) or incorrectly (highlighted in red). This section is automatically updated after each answered question. Depending on the screen resolution, the scoring area can be displayed horizontally or vertically.
    Above the section displaying the question, I also decided to add a section that displays the number of the currently displayed question so that the user knows how many questions are left until the end of the quiz.
  </p>
  <li><strong>Testing</strong></li>
  <p>The sections listed above have been tested many times to make sure that the information displayed is correct. No errors have been noted.</p>
  <li><strong>Result</strong></li>
  <p>The quiz progress sections are working as planned and provide relevant information about the quiz progress.</p>
  <li><strong>Verdict</strong></li>
  <p>In the scoring area, the user is provided with a breakdown of correct and incorrect answers. Above the question displayed on the screen, the user can also find the number of questions they have answered so far.</p>
</ul>
<h3>As a user, I would like to know when the quiz is complete.</h3>
<ul>
  <li><strong>Plan</strong></li>
  <p> Show the information with a quiz summary to the user</p>
  <li><strong>Implementation</strong></li>
  <p>Once the user has answered all the questions, a new section will be displayed on the screen. In this section, the user will be informed that the quiz is over and how many questions have been answered correctly.</p>
  <li><strong>Testing</strong></li>
  <p>Tests have been conducted numerous times to ensure that the information displayed is accurate. </p>
  <li><strong>Result</strong></li>
  <p>The quiz summary section is working as planned.</p>
  <li><strong>Verdict</strong></li>
  <p>Upon entering the quiz, the user is informed that there are ten questions to be answered. Once all ten questions are answered, the quiz summary section is displayed, with information on how many questions the user answered correctly.</p>
</ul>
<h3>As a user, I would like to have a chance to retake the quiz to improve my score.</h3>
<ul>
  <li><strong>Plan</strong></li>
  <p>If the user wants to improve their scores, provide them an option to retake the quiz.</p>
  <li><strong>Implementation</strong></li>
  <p>I chose to include a <strong>Try again</strong> button in the summary quiz area to allow users to retry the quiz.</p>
  <li><strong>Testing</strong></li>
  <p>The <strong>Try again</strong> button has been tested many times to verify that a new quiz is loaded each time when the button is clicked.</p>
  <li><strong>Result</strong></li>
  <p>The implemented <strong>Try again</strong> button is working correctly and initiates a new quiz each time when clicked.</p>
  <li><strong>Verdict</strong></li>
  <p>If the user wishes to improve their score, they have the option to try again.</p>
</ul>
<h3>As a user, I would like to visit the official Arduino website where I can find information regarding the questions asked in the quiz.</h3>
<ul>
  <li><strong>Plan</strong></li>
  <p>If the user wants further information about the Arduino microcontroller, they should be able to go to the official Arduino website.</p>
  <li><strong>Implementation</strong></li>
  <p>I opted to include an icon with the Arduino symbol and written information in the quiz summary area, informing the user that clicking on the icon will take them to the official Arduino website.</p>
  <li><strong>Testing</strong></li>
  <p>Initial tests were not successful as the official Arduino website was not opening in a new tab. Following a thorough review of the HTML code, I discovered that the link closing tags were incorrectly placed, resulting in the page was not displayed in a new tab. The issue was solved, and subsequent tests confirmed that the Arduino website is now opening correctly.</p>
  <li><strong>Result</strong></li>
  <p>The tests confirmed that when the user clicks on the Arduino icon the official Arduino website will be displayed in a new tab.</p>
  <li><strong>Verdict</strong></li>
  <p>The user can visit the official Arduino website by clicking the Arduino icon at the end of the quiz to learn more about the microcontroller or find answers to the questions posed in the quiz.</p>
</ul>
<hr>

# **Bugs**
<h3>Solved bugs</h3>
<ul>
<li>The bug I encountered was related to incorrectly placed link closing tags in the HTML file. This prevented the Arduino website from opening in a new tab. The issue was fixed immediately following the code review.</li>
</ul>
<h3>Other known bugs</h3>
<h4>uncaught (in promise) error: the message port closed before a response was received</h4>
<li>I encountered this problem just before my project submission. My search for more information related to this error led me to find that some chrome extensions are causing this problem. Following the instructions found on <a href="https://dev-qa.com/2666546/error-uncaught-promise-chrome-what-this-error-and-how-do-fix"> dev-qa.com</a>, I disabled all the installed extensions in my chrome browser and then enabled each extension one by one to see which one was causing the problem.</li>
<li>I found that a recent extension I installed was the culprit. After disabling this extension, the problem was eliminated.</li>
<li>To verify that the website is working properly, I performed additional tests when the error was presented. After performing numerous tests, I can confirm that the functionality of the website was not impacted in any way. </li>

# **Media**
<ul>
  <li>The video background that is used on the Arduino Quiz website was downloaded from the <a href="https://pixabay.com/videos/circuit-electronics-digital-27725/"> pixabay</a> website.</li>
  <li>The Arduino icon used on the quiz completion page was downloaded from the <a href="https://icon-icons.com/icon/Arduino-macOS-BigSur/190380"> icon-icons</a> website.</li>
  <li>The picture of Dual H-bridge DC Stepper Motor Driver - L298N that is used in the Features to be implemented section was downloaded from the <a href="https://www.hiclipart.com/free-transparent-background-png-clipart-dlerq"> hiclipart</a> website.</li>
</ul>
<hr>

# **Content**
<ul>
  <li>The quiz questions were copied from the following websites:</li>
  <ul>
    <li><a href="https://rootsaid.com/snax_quiz/arduino-quiz-basics/"> rootsaid.com </a></li>
    <li><a href="https://quizizz.com/admin/quiz/5b755bae72a130001a4c82d1/arduino"> quizizz.com</a></li>
  </ul>
</ul>
<hr>

# **Deployment**
### **GitHub Pages**
<p>The project was deployed to GitHub pages using the following steps:</p>
<ol type="1">
  <li>Log in to GitHub</li>
  <li>On the left-hand side, click the Arduino Quiz project.</li>
  <li>At the top of the page locate the <strong>Settings</strong> button in the menu section.</li>
  <li>Scroll down to find the <strong>GitHub Pages</strong> section and click on <strong>Check it out here!</strong></li>
  <li>Under <strong>Source</strong>, select <strong>Main</strong> from the dropdown branch menu.</li>
  <li>Click <strong>Save</strong> and the page will refresh automatically.</li>
  <li>Scroll back down through the page to locate the published <a href="https://github.com/kwalczak80/Arduino-Quiz">Arduino Quiz </a>website in the "GitHub Pages" section.</li>
</ol>
<hr>

# **Acknowledgements**
<ul>
  <li>My Mentor <a href="https://github.com/Eventyret">Simen Daehlin</a> for continuous helpful feedback.</li>
  <li>Code Institute's <a href="https://app.slack.com/client/">Slack</a> community for their support. Special thanks to Pedro Ferreira from jan-2022-ucd class.</li>
  <li>Javascript tutorials on <a href="https://www.w3schools.com/js/">W3 Schools</a> as an additional source of knowledge.</li>
  <li>Traversy Media <a href="https://www.youtube.com/c/TraversyMedia">Tutorials</a> that helped me better understand DOM manipulation.</li>
  <li>Code from <a href="https://www.youtube.com/watch?v=LxQK4F0xwmU">How to Shuffle an Array in JavaScript</a> was used in the Arduino quiz project to randomize quiz questions.</li>
</ul>
<hr>