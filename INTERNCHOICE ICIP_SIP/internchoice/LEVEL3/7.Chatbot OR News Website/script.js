function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatDisplay = document.getElementById("chat-display");
    
    // Display user's message
    chatDisplay.innerHTML += "<p><strong>You:</strong> " + userInput + "</p>";
    
    // Generate chatbot response
    var botResponse = generateResponse(userInput);
    
    // Display chatbot's response
    chatDisplay.innerHTML += "<p><strong>Chatbot:</strong> " + botResponse + "</p>";
    
    // Clear the input field
    document.getElementById("user-input").value = "";
  }
  
  function generateResponse(userInput) {
    // Add your own logic here to generate appropriate responses based on user input
    if (userInput.toLowerCase() === "hello") {
      return "Hello there!";
    } else if (userInput.toLowerCase() === "how are you?") {
      return "I am fine whatabout you";
    }else if (userInput.toLowerCase() === "How are you? / what are you doing/going?") {
        return "I am doing well, thank you!";
    }else if (userInput.toLowerCase() === "Good morning/evening/afternoon/night") {
        return "good morning";
    }else if (userInput.toLowerCase() === "Tell me something") {
        return "i am your AI";
    }else if (userInput.toLowerCase() === "Hello, Thank you, Goodbye") {
        return "bye beauty";
    }else if (userInput.toLowerCase() === "Happy birthday") {
        return "thank you for asking these";
    }
    else if (userInput.toLowerCase() === "hi") {
        return "hello welcome";
    }else {
      return "I'm sorry, but I don't understand. Can you please rephrase?";
    }
  }
  