function solve() {
   const inputMessageElement = document.querySelector('#chat_input');
   const messagesDivElement = document.querySelector('#chat_messages');
   const sendButtonElement = document.querySelector('#send');

   sendButtonElement.addEventListener('click', () => {
      const inputMessage = inputMessageElement.value;
      if (inputMessage === '') return;

      const messageSentDiv = document.createElement('div');
      messageSentDiv.setAttribute('class', 'message my-message');
      messageSentDiv.textContent = inputMessage;

      messagesDivElement.appendChild(messageSentDiv);
      inputMessageElement.value = '';
   });
   

}