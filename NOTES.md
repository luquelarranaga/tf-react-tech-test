I began working on the front end elements first so that I could visualise what I was doing on the webpage, and then work my way backwards towards the API. I find that by having components rendered on the page already, it's easier for me to test and to see how they work alongside any console logs.

I created a drop down selector for priority, meaning users will need to select priority when creating any tasks. Because priority will always be selected no matter what, I removed it as an optional value from it's type.

I then created a sorting component which sorts tasks in order of when they were created, and priority. To sort by priority, I had to create a look up object which mapped each priority level to a value (e.g. high is 1, and low is 3). Without this, the tasks would've sorted by priority alphabetically.

I chose to separate the filter, priority and sortby into separate components to improve the readability of the App.tsx file.

I also added front a end error message which appears if the server sends back an error so that the user is also aware.

Then I applied some simple styling to the doc by creating a css file and importing it into main.jsx. I created variables for the colours, which would be helpful for maintaining a cohesive colour scheme for larger projects.

Using the WAVE extension I realised I hadn't added any labels to my elements so i made sure to add those in to bring the score up to 10.

With more time, I would've wanted to implement the below:

- Improved styling (button hover affects, better overall layout etc, added margin and labels for filter bar)
- Added functionality so that when lists are completed they are sent to the bottom
- If due date is in the past, make the task card red or indicate it's overdue status visually another way
- Integrate manager with calendar apps
