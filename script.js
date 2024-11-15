// Quiz Data
const quizData = [
    {
      question: "What is the largest land mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Tiger"],
      answer: "Elephant"
    },
    {
      question: "Which species is known to be critically endangered?",
      options: ["Mountain Gorilla", "House Sparrow", "Green Sea Turtle", "Brown Bear"],
      answer: "Mountain Gorilla"
    },
    {
      question: "What animal is known as the king of the jungle?",
      options: ["Lion", "Tiger", "Bear", "Wolf"],
      answer: "Lion"
    },
    {
      question: "Which species is the largest in the oceans?",
      options: ["Blue Whale", "Great White Shark", "Dolphin", "Sea Turtle"],
      answer: "Blue Whale"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Start the quiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
  }
  
  // Display a quiz question
  function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const questionData = quizData[currentQuestionIndex];
    
    // Create HTML for the question and options
    quizContainer.innerHTML = `
      <h3>${questionData.question}</h3>
      ${questionData.options.map(option => `
        <button onclick="checkAnswer('${option}')">${option}</button>
      `).join('')}
    `;
  }
  
  // Check if the selected answer is correct
  function checkAnswer(selectedOption) {
    const questionData = quizData[currentQuestionIndex];
    if (selectedOption === questionData.answer) {
      score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
      displayQuestion();
    } else {
      showResults();
    }
  }
  
  // Display quiz results
  function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = <h3>Your score: ${score} out of ${quizData.length}</h3>;
  }
  
  // Initialize Google Maps
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map-placeholder"), {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });
  
    // Example markers for endangered species locations
    const speciesLocations = [
      { name: "Tiger", location: { lat: 22.5726, lng: 88.3639 } }, // India
      { name: "Giant Panda", location: { lat: 30.6586, lng: 104.0647 } }, // China
      { name: "Mountain Gorilla", location: { lat: -1.9462, lng: 30.0587 } }, // Rwanda
      { name: "Blue Whale", location: { lat: 36.7783, lng: -119.4179 } }, // Pacific Ocean
    ];
  
    // Add markers to the map
    speciesLocations.forEach(species => {
      const marker = new google.maps.Marker({
        position: species.location,
        map: map,
        title: species.name,
      });
  
      const infoWindow = new google.maps.InfoWindow({
        content: <div><h3>${species.name}</h3><p>Endangered species located here.</p></div>
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  
  // Show donation box
  function showDonation() {
    const donationBox = document.getElementById("donation-box");
    donationBox.classList.remove("hidden");
    donationBox.innerHTML = "Thank you for your support!";
  }
  
  // Google Maps API callback setup
  window.initMap = initMap;