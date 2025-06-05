// DOMContentLoaded block - 04.06.2025
document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  const API_KEY = "API-KEY"; // Paste an api key here 

  // Safe chack: if any of the following are missing then exit the method, to avoid errors
  if (!chatForm || !chatInput || !chatMessages) return;


  // EVENT: runs this function (async, to allow using await) when user submits the chat form by presing Enter/Send
  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const userMessage = chatInput.value.trim();
    if (!userMessage) return; // Exit if user clicked send but didn't wrote a message

    // Show user message
    appendMessage("You", "🧑 " + userMessage);
    chatInput.value = "";
    appendMessage("DaniBot", "🤖 Thinking...");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Hi there! I’m your friendly assistant for Treider Gård. Answer any questions about delivery fresh farm products!" },
            { role: "user", content: userMessage },
          ],
        }),
      });

      // NEW: check for non-200 errors: API error response: You exceeded your current quota... Need to make a new accoutn to check this works, not enough time for this for now - 04.06.2025
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error response:", errorText);
        replaceLastMessage("DaniBot", "⚠️ Error from OpenAI: " + response.status);
        return;
      }


      const data = await response.json();
      console.log("OpenAI raw response:", data); // For testing

      const botReply = data.choices?.[0]?.message?.content || "Opps! That one went over my circuits! Try asking a different way?";
      replaceLastMessage("DaniBot", botReply);

    } catch (error) {
      replaceLastMessage("DaniBot", "Failed to connect. Wait and try again later.");
      console.error(error);
    }
    // For future ref: When the chat form is submitted, prevents the page from refreshing, grabs the user message, displays it, and then call the OpenAI API to get a reply. - 04.06.2025
  });


  // Helper funcitions - 04.06.2025

  //function appendMessage(sender, text) {
  //  const msg = document.createElement("p");
  //  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  //  chatMessages.appendChild(msg);
  //  chatMessages.scrollTop = chatMessages.scrollHeight;
  // }

  function appendMessage(sender, text) {
    const msg = document.createElement("p");

    // Apply class based on who sent the message
    if (sender === "You") {
      msg.classList.add("user");
    } else {
      msg.classList.add("bot");
    }

    // Use textContent to avoid HTML injection issues
    msg.textContent = text;
    // msg.innerHTML = text;

    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }


  // function replaceLastMessage(sender, text) {
  //  const last = chatMessages.lastElementChild;
  //  if (last) {
  //    last.innerHTML = `<strong>${sender}:</strong> ${text}`;
  //  }
  // }

  function replaceLastMessage(sender, text) {
    const last = chatMessages.lastElementChild;
    if (last) {
      last.className = sender === "You" ? "user" : "bot";
      last.innerHTML = text;
    }
  }

});
