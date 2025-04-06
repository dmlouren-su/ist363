// Function to fetch three activities from the Bored API
const getActivities = async () => {
    try {
        // Fetching three random activities
        const activities = [];
        for (let i = 0; i < 3; i++) {
            const response = await fetch('https://www.boredapi.com/api/activity/');
            if (response.status !== 200) {
                throw new Error('Cannot fetch activity data');
            }
            const data = await response.json();
            activities.push(data.activity);
        }
        return activities;
    } catch (error) {
        console.error('Error fetching activities:', error);
        return []; // Return an empty array in case of error
    }
};

// Function to fetch a piece of advice from the Advice API
const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (response.status !== 200) {
            throw new Error('Cannot fetch advice data');
        }
        const data = await response.json();
        return data.slip.advice;
    } catch (error) {
        console.error('Error fetching advice:', error);
        return 'No advice available at the moment.';
    }
};

// Function to display activities and advice on the page
const displayContent = async () => {
    try {
        const activities = await getActivities();
        const advice = await getAdvice();

        // Displaying activities
        const activitiesContainer = document.getElementById('activities-container');
        activitiesContainer.innerHTML = ''; // Clear existing content
        activities.forEach(activity => {
            const activityElement = document.createElement('div');
            activityElement.classList.add('activity');
            activityElement.innerHTML = `<p>${activity}</p>`;
            activitiesContainer.appendChild(activityElement);
        });

        // Displaying advice
        const adviceContainer = document.getElementById('advice-container');
        adviceContainer.innerHTML = `<p>${advice}</p>`;
    } catch (error) {
        console.error('Error displaying content:', error);
        document.getElementById('error-message').textContent = 'Failed to load content. Please try again later.';
    }
};

// Call the function to display activities and advice when the page loads
displayContent();
