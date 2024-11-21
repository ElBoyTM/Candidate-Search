# Candidate Search

  ## Description
  This is a React- and TypeScript-based website that scours GitHub and picks users at random. Users can be accepted for consideration or rejected. The considered candidates can then be viewed in the Saved Candidates page.

![Screenshot of Candidate Search](./Assets/Screenshot_2024-11-21_173410.png)

  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Tests](#tests)

  [Questions](#questions)

  ## Installation
  The easiest way to access the site is to go to https://candidate-search-0apm.onrender.com/. Otherwise, you can copy the repo onto your device and cd in the "Develop" folder. Run "npm install && npm build" and fill out .env.EXAMPLE with a GitHub API key. After renaiming the file to just ".env", go ahead and run the app with "npm run dev".

  ## Usage
  GitHub users will automatically be shown to you, including their usernames and avatars. Other information may or may not be visible, depending on the users' settings. If you would like to consider a candidate for further review, click the plus button; otherwise, click the minus button. All considered candidates will appear on the Saved Candidates page accessed by the navigation tab on the upper lefthand corner of the screen. **As of now, the only way to delete candidates is to go into local storage in DevTools.**

  ## Contributing
  Feel free to add to and tweak this app. Along with adding a dedicated delete button, functions could be made to sort candidates and auto-reject, say, users with no bio.

  ## Tests
  Make sure both buttons work. A note should also display when you've run out of users to consider, but this should only appear after many candidates.

  ## Questions
  My GitHub: https://github.com/ElBoyTM

  My email: nszalenski@gmail.com
