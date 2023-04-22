window.reviewData = [
    {
      name: "John Smith",
      date: "2022-03-15",
      rating: 4,
      review: "I really enjoyed playing this game. It was challenging but also fun."
    },
    {
      name: "Sarah Johnson",
      date: "2022-02-28",
      rating: 5,
      review: "This is the best game I've played in a long time. I can't wait to play it again!"
    },
    {
      name: "David Lee",
      date: "2022-02-10",
      rating: 3,
      review: "The game was okay. It wasn't as exciting as I thought it would be."
    },
    {
      name: "Emily Chen",
      date: "2022-01-22",
      rating: 2,
      review: "I didn't like this game at all. It was boring and not worth the money."
    },
    {
      name: "Michael Kim",
      date: "2022-01-10",
      rating: 4,
      review: "Overall, I had a good time playing this game. The graphics were great and the gameplay was engaging."
    }
  ];
  
  const reviewContainer = document.getElementById("reviews");

  // Function to generate HTML for a review card
  function generateReviewCard(review) {
    // Create elements for the card
    const card = document.createElement("div");
    const name = document.createElement("h3");
    const date = document.createElement("p");
    const rating = document.createElement("p");
    const reviewText = document.createElement("p");
  
    // Add content to the elements
    name.textContent = review.name;
    date.textContent = new Date(review.date).toLocaleDateString();
    rating.textContent = "Rating: " + "★ ".repeat(review.rating) + "☆ ".repeat(5 - review.rating);
    reviewText.textContent = review.review;
  
    // Add classes to the elements
    card.classList.add("card");
    name.classList.add("name");
    date.classList.add("date");
    rating.classList.add("rating");
    reviewText.classList.add("review-text");
  
    // Append elements to the card
    card.appendChild(name);
    card.appendChild(date);
    card.appendChild(rating);
    card.appendChild(reviewText);
  
    // Append the card to the review container
    reviewContainer.appendChild(card);
  }
  
  // Function to generate all review cards
  function generateReviewCards() {
    // Clear the review container
    reviewContainer.innerHTML = "";
  
    // Loop through the review data and generate a card for each review
    for (let i = 0; i < reviewData.length; i++) {
      generateReviewCard(reviewData[i]);
    }
  }
  
  // Call generateReviewCards on page load to generate the initial review cards
  generateReviewCards();
  
  // Handle form submission
  const form = document.querySelector("form");
  const submitButton = document.getElementById("submit-btn");
  
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("review").value;
  
    // Create new review object
    const newReview = {
      name: name,
      date: date,
      rating: rating,
      review: reviewText
    };
  
    // Add new review object to the reviewData array
    reviewData.push(newReview);
  
    // Generate all review cards (including the new review)
    generateReviewCards();
  
    // Reset the form
    form.reset();
  });