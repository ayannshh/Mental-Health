// Chat Elements
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const clearChatBtn = document.getElementById("clearChatBtn");

// Add message to chat
function addMessage(text, sender = "bot") {
  const wrapper = document.createElement("div");
  wrapper.className = `message mb-4 flex ${sender === "user" ? "justify-end" : "justify-start"} ${sender}-message`;

  const bubbleWrapper = document.createElement("div");
  bubbleWrapper.className = "relative max-w-[75%]";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble px-4 py-3 shadow-sm";
  
  const messageText = document.createElement("p");
  messageText.className = "message-text";
  messageText.textContent = text;

  bubble.appendChild(messageText);

  // Add copy button
  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn right-2";
  copyBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
         viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M8 16h8m-8-4h8m-2-8H6a2 2 0 
           00-2 2v12a2 2 0 002 2h8a2 2 
           0 002-2V8l-4-4z"/>
    </svg>
  `;
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.style.background = "rgba(0,0,0,0.3)";
      setTimeout(() => (copyBtn.style.background = "rgba(0,0,0,0.1)"), 800);
    });
  };

  bubbleWrapper.appendChild(bubble);
  bubbleWrapper.appendChild(copyBtn);
  wrapper.appendChild(bubbleWrapper);
  chatMessages.appendChild(wrapper);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send user message
function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  chatInput.value = "";

  // Simulated bot reply
  setTimeout(() => {
    addMessage("Thanks for sharing. I'm here to listen and support you. 💙", "bot");
  }, 800);
}

// Enter key support
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Clear chat
clearChatBtn.addEventListener("click", () => {
  chatMessages.innerHTML = "";
  addMessage("Chat cleared. How are you feeling now?", "bot");
});

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run once
