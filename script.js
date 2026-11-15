javascript

const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Add a message to the chat
function addMessage(text, sender) {
  const message = document.createElement("div");

  message.classList.add("message", sender);
  message.textContent = text;

  chatBox.appendChild(message);

  // Scroll to the newest message
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple demo responses
function getBotResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! 👋 Nice to meet you! How can I help?";
  }

  if (text.includes("name")) {
    return "I'm your personal AI assistant!";
  }

  if (text.includes("how are you")) {
    return "I'm doing great! Thanks for asking. 😊";
  }

  if (text.includes("help")) {
    return "Of course! Tell me what you need help with.";
  }

  if (text.includes("bye")) {
    return "Goodbye! Have a wonderful day! 👋";
  }

  return "That's interesting! Tell me a little more.";
}

// Handle sending messages
chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const message = userInput.value.trim();

  if (message === "") return;

  // Show user's message
  addMessage(message, "user");

  // Clear input
  userInput.value = "";

  // Generate bot response
  const response = getBotResponse(message);

  // Show bot response
  setTimeout(function() {
    addMessage(response, "bot");
  }, 500);
});
