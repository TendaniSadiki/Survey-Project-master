var firebaseConfig = {
    apiKey: "AIzaSyB3rk1r3fn1ceY24SWrVXAQ8Ow8T8MDUhU",
    authDomain: "survey-5685f.firebaseapp.com",
    projectId: "survey-5685f",
    storageBucket: "survey-5685f.appspot.com",
    messagingSenderId: "670927044882",
    appId: "1:670927044882:web:2fce540df79337817ef3cb"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function submitForm() {
        var surname = document.querySelector('input[name="surname"]').value;
        var firstNames = document.querySelector('input[name="firstNames"]').value;
        var contactNumber = document.querySelector('input[name="contactNumber"]').value;
        var date = document.querySelector('input[name="date"]').value;
        var age = document.querySelector('input[name="age"]').value;
        var food = [];
        var foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
        foodCheckboxes.forEach(function (checkbox) {
          food.push(checkbox.value);
        });
        var eatOut = document.querySelector('input[name="eatOut"]:checked');
        var watchMovies = document.querySelector('input[name="watchMovies"]:checked');
        var watchTV = document.querySelector('input[name="watchTV"]:checked');
        var listenRadio = document.querySelector('input[name="listenRadio"]:checked');
      
        // Validate required fields
        if (!surname || !firstNames || !contactNumber || !date || !age || food.length === 0 || !eatOut || !watchMovies || !watchTV || !listenRadio) {
          alert("Please fill in all required fields.");
          return;
        }
      
        // Save data to Firebase database
        var database = firebase.database();
        var surveyRef = database.ref('surveys');
        var newSurveyRef = surveyRef.push();
        newSurveyRef.set({
          surname: surname,
          firstNames: firstNames,
          contactNumber: contactNumber,
          date: date,
          age: age,
          food: food,
          eatOut: eatOut.value,
          watchMovies: watchMovies.value,
          watchTV: watchTV.value,
          listenRadio: listenRadio.value
        });
      
        // Show success message and reset form
        alert("Survey submitted successfully!");
        document.querySelector('form').reset();
      }
      