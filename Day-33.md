## Progress Update: Disney+ Angular Application 
Over the past two days, 
I’ve made significant progress in making the Disney+ Angular application.

### Focus Area: UI/UX 
My primary focus today was on refining the UI/UX and improving the code structure to align with best front-end development practices with my mentors guidance.
### Navigation Bar Redesign
One of the most important improvements i did today was to completely redesign of the navigation bar. Initially, the navbar was quite basic and included the hero section within navbar component, which was not that good design. After reviewing how real-world streaming platforms separate components, I decided to remove the hero component from the navbar and worked both saperately. This taught me the importance of component proper design. I also restructured the navigation links using Flexbox from Tailwind to ensure that the elements were properly spaced and aligned, regardless of screen size. The result is a much cleaner and modern-looking navbar.

###  Search Functionality
A big learning moment came with the implementation of the live search functionality in the navbar. 
<br>
I used Angular's FormControl and reactive programming concepts to detect changes in the search input in real time.
<br><br>
With the help of the TMDb API, I was able to dynamically fetch search results and display them in a dropdown. I added a condition to only trigger the API after the user enters more than one character, which prevents unnecessary API calls. Making this live search feature helped me understand the importance of UX responsiveness and how to use @HostListener to listen for outside clicks—allowing me to automatically close the dropdown when the user clicks anywhere outside the search area. These small improvements made a big difference in UX in Angular.
### Hero Section Redesign.
I also redesigned the Hero section, which now fetches trending movies from the API and displays them as a full-screen rotating banner. I added an auto-slide feature that cycles through trending movies every 15 seconds using setInterval.<br><br> Users can also manually navigate between movies using left and right arrow buttons that I added and styled using custom icons. Each hero slide includes a movie’s overview for better UI and awarness of thhe name a & title of the movie poster. Moreover, I added a gradient overlay to the background to make the text stand out against varying image brightness—this helped me understand using Tailwind’s gradient and layering with absolute positioning.
### Layout & Styling with Tailwind CSS
In terms of layout and styling, I’m more confident using Tailwind CSS to build UI components. I practiced creating responsive layouts with flex, managing spacing, shadows, and hover transitions. This was also seen in the footer component, where I implemented a four-column layout that adjusts nicely across screen sizes. I also added links for Help, Legal, and Branding sections, giving the app a more complete production app feel. This component helped me improve my understanding of web design structure and the importance of a good footer in web apps.
### Conclusion.
To sum it up, this part of the project has been a massive learning experience for me.  My next steps will involve integrating Firebase for user authentication, adding a watchlist feature, and creating detailed movie pages to complete the streaming experience.
