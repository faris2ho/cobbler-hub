function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

  function sendMessage() {
    const input = document.getElementById('chatInput');
    const chatWindow = document.getElementById('chatWindow');
    const message = input.value.trim();
    if (message) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'message';
      msgDiv.innerHTML = `<strong>You:</strong> ${message}`;
      chatWindow.appendChild(msgDiv);
      chatWindow.scrollTop = chatWindow.scrollHeight;
      input.value = '';
    }
  }
  document.querySelectorAll('.chat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("Chat feature coming soon!");
    });
  });
  