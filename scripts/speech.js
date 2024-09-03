// const speechConfig = SpeechSDK.SpeechConfig.fromSubscription("cc2d2316e8a84c04a6045403ab7d3762", "eastus");
// const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
// const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

// const recBtn = document.querySelector('#recBtn');
// const recBtn3 = document.getElementById('recording');

// recBtn3.innerHTML = "Recording start";

// document.addEventListener('click', () => {
//   const silentAudio = new SpeechSDK.SpeakerAudioDestination();
//   const silentaudioConfig = SpeechSDK.AudioConfig.fromSpeakerOutput(silentAudio);
//   const speechConfig = SpeechSDK.SpeechConfig.fromSubscription("ff542d4a97f340d4ae9faa685afab149", "eastus");
//   speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural'; // or use selectedVoice.innerText
//   const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, silentaudioConfig);

//   synthesizer.speakTextAsync(
//     '',
//     result => {
//       console.log('Silent speak completed.');
//     },
//     error => {
//       console.error('Silent speak failed:', error);
//     }
//   );
// });

// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ audio: true })
//   .then(function(stream) {
//     console.log('Microphone access granted');
//   })
//   .catch(function(error) {
//     console.error('Error accessing microphone:', error);
//   });
// } else {
//   console.error('getUserMedia is not supported by this browser');
// }

// // const recognizeSpeech = () => {
// //   console.log('Starting speech recognition...');
// //   recognizer.recognizeOnceAsync(result => {
// //     if (result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
// //       console.log(`Recognized: ${result.text}`);
// //       chatText.value = `${result.text}`;
// //       // Prepare the chat message to be displayed
// //       const chatmsg = result.text; // Use the recognized text directly
// //       const str_time = new Date().toLocaleTimeString(); // Get current time
// //       var botHtml = '<div class="d-flex justify-content-start mb-4">' +
// //                     '<div class="img_cont_msg">' +
// //                     '<img src="https://www.prdistribution.com/spirit/uploads/pressreleases/2019/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png" class="rounded-circle user_img_msg">' +
// //                     '</div>' +
// //                     '<div class="msg_cotainer">' +
// //                     chatmsg +  // Display the recognized speech value
// //                     '<span class="msg_time">' + str_time + '</span>' +
// //                     '</div>' +
// //                     '</div>';
// //       $("#messageFormeight").append($.parseHTML(botHtml));


// //       recBtn.style.display = 'none';
// //       const recBtn4 = document.getElementById('waiting');
// //       const recBtn5 = document.getElementById('Speaking');
// //       recBtn3.style.display = 'none';
// //       recBtn4.style.display = 'block';
// //       recBtn5.style.display = 'none';    
// //       const botIcon = document.querySelector('#botIcon');
// //       botIcon.setAttribute('src','');
// //       botIcon.style.display = 'none';
// //       sendToChatGPT(result.text);            
// //     } else if (result.reason === SpeechSDK.ResultReason.NoMatch) {
// //       console.log("No speech recognized. Trying again...");
// //       recBtn3.innerHTML = "Not Recognized, Try again";
// //       recognizeSpeech(); // Retry recognition
// //     } else {
// //       console.error(`Recognition failed: ${result.errorDetails}`);
// //     }
// //   });
// // }

// // const recognizeSpeech = () => {
// //   console.log('Starting speech recognition...');
  
// //   recognizer.recognizeOnceAsync(result => {
// //     if (result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
// //       console.log(`Recognized: ${result.text}`);
      
// //       // Append recognized text to the chat body
// //       const chatBody = document.getElementById('messageFormeight'); // Assuming this is the chat body element
// //       const str_time = new Date().toLocaleTimeString(); // Get current time
      
// //       // Construct the message HTML
// //       const botHtml = `
// //         <div class="d-flex justify-content-start mb-4">
// //           <div class="img_cont_msg">
// //             <img src="https://www.prdistribution.com/spirit/uploads/pressreleases/2019/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png" class="rounded-circle user_img_msg">
// //           </div>
// //           <div class="msg_cotainer">
// //             ${result.text}  <!-- Display the recognized speech -->
// //             <span class="msg_time">${str_time}</span>
// //           </div>
// //         </div>`;
      
// //       chatBody.innerHTML += botHtml; // Append the new message to the chat body
      
// //       // Handle UI changes
// //       recBtn.style.display = 'none';
// //       const recBtn4 = document.getElementById('waiting');
// //       const recBtn5 = document.getElementById('Speaking');
// //       recBtn3.style.display = 'none';
// //       recBtn4.style.display = 'block';
// //       recBtn5.style.display = 'none';    
// //       const botIcon = document.querySelector('#botIcon');
// //       botIcon.setAttribute('src','');
// //       botIcon.style.display = 'none';

// //       // Send recognized speech text to ChatGPT
// //       sendToChatGPT(result.text);            
// //     } else if (result.reason === SpeechSDK.ResultReason.NoMatch) {
// //       console.log("No speech recognized. Trying again...");
// //       recBtn3.innerHTML = "Not Recognized, Try again";
// //       recognizeSpeech(); // Retry recognition
// //     } else {
// //       console.error(`Recognition failed: ${result.errorDetails}`);
// //     }
// //   });
// // }


// recBtn.addEventListener('click', () => {
//   console.log('Recording button clicked!');
//   recBtn3.innerHTML = "Recording start";
  
//   botResponseUIReset(); 
  
//   const botIcon = document.querySelector('#botIcon');
//   botIcon.setAttribute('src','images/Hearing.gif');
//   botIcon.style.display = 'block';
  
//   const recBtn4 = document.getElementById('waiting');
//   const recBtn5 = document.getElementById('Speaking');
//   recBtn3.style.display = 'inline-block';
//   recBtn4.style.display = 'none';
//   recBtn5.style.display = 'none';   
//   recBtn.style.display = 'none';
//   recognizeSpeech();
// });

// const botResponseUIReset = () => {
//   if (speechSynthesis) {
//     speechSynthesis.cancel();
//   }      
//   const recBtn4 = document.getElementById('waiting');
//   const recBtn5 = document.getElementById('Speaking'); 
//   const botIcon = document.querySelector('#botIcon'); 
//   recBtn3.style.display = 'none';
//   recBtn4.style.display = 'none';
//   recBtn5.style.display = 'none';     
//   botIcon.setAttribute('src', '');
//   botIcon.style.display = 'none';       
// }

// function sendToChatGPT(voiceInput) {
//   console.log("Inside sendToChatGPT");

//   const apiUrl = 'https://pythonappdrs.azurewebsites.net/chat';
//   const headers = {
//     'Content-Type': 'application/json',
//   };

//   const personaElement = document.getElementById('persona-text');
//   const persona = personaElement ? personaElement.value.replace(/[^a-zA-Z0-9 ,\.]/g, '') : '';

//   const data = {
//     user_input: voiceInput,
//     system_data: persona,
//   };

//   fetch(apiUrl, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(result => {
//     const chatGPTResponse = result.response;
//     const emotion = result.emotion.label;

//     startSpeaking(chatGPTResponse, emotion);

    
//   })
//   .catch(error => {
//     console.error('Error:', error);

//     const recBtn = document.querySelector('#recBtn');
//     if (recBtn) recBtn.style.display = 'inline-block';

//     const botIcon = document.querySelector('#botIcon');
//     const recBtn3 = document.getElementById('recording');
//     const recBtn4 = document.getElementById('waiting');
//     const recBtn5 = document.getElementById('Speaking');

//     if (recBtn3) recBtn3.style.display = 'none';
//     if (recBtn4) recBtn4.style.display = 'none';
//     if (recBtn5) recBtn5.style.display = 'none';
//     if (botIcon) {
//       botIcon.setAttribute('src', '');
//       botIcon.style.display = 'none';
//     }
//   });
// }

$(document).ready(function() {
  // Initialize Speech SDK components
  const speechConfig = SpeechSDK.SpeechConfig.fromSubscription("cc2d2316e8a84c04a6045403ab7d3762", "eastus");
  const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

  // UI Elements
  const chatText = document.getElementById('text');
  const messageFormeight = document.getElementById('messageFormeight');
  const sendButton = document.getElementById('send');

  // Send Button Click Event
  sendButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the text from the input field
      const userInput = chatText.value.trim();

      // Check if the input field is not empty
      if (userInput !== '') {
          // Add the user input to the message area
          addMessage(userInput, 'user');

          // Send the input to the backend
          sendToChatGPT(userInput);

          // Clear the input field
          chatText.value = '';
      }
  });

  const addMessage = (text, sender) => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const str_time = hour + ":" + minute;
      const senderClass = sender === 'user' ? 'justify-content-end' : 'justify-content-start';
      const msgContainerClass = sender === 'user' ? 'msg_cotainer_send' : 'msg_cotainer';
      const imgSrc = sender === 'user' ? 'path/to/user_icon.png' : 'https://www.prdistribution.com/spirit/uploads/pressreleases/2019/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png';

      const messageHtml = `
          <div class="d-flex ${senderClass} mb-4">
              <div class="img_cont_msg">
                  <img src="${imgSrc}" class="rounded-circle user_img_msg">
              </div>
              <div class="${msgContainerClass}">
                  ${text}
                  <span class="msg_time">${str_time}</span>
              </div>
          </div>`;
      $(messageFormeight).append($.parseHTML(messageHtml));
  };

  // Start recording and recognize speech
  const startRecording = () => {
      // Start speech recognition
      recognizeSpeech();
  };

  const recognizeSpeech = () => {
      recognizer.recognizeOnceAsync(result => {
          if (result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
              console.log(`Recognized: ${result.text}`);
              chatText.value = result.text; // Display recognized text in input field

              // Add recognized text to the message area
              addMessage(result.text, 'user');

              // Send recognized text to API
              sendToChatGPT(result.text);

          } else if (result.reason === SpeechSDK.ResultReason.NoMatch) {
              console.log("No speech recognized. Trying again...");
              recognizeSpeech(); // Retry if recognition fails

          } else {
              console.error(`Recognition failed: ${result.errorDetails}`);
          }
      });
  };

  const sendToChatGPT = (voiceInput) => {
      console.log("Sending to API");

      const apiUrl = 'https://pythonappdrs.azurewebsites.net/chat';
      const headers = {
          'Content-Type': 'application/json',
      };

      const data = {
          user_input: voiceInput,
      };

      fetch(apiUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(result => {
          // Extract and process the response data
          const chatGPTResponse = result.response;
          const emotion = result.emotion.label;

          // Add bot's response to the message area
          addMessage(chatGPTResponse, 'bot');

          // Start speaking the response
          startSpeaking(chatGPTResponse, emotion);
      })
      .catch(error => {
          console.error('Error:', error);
      });
  };

  const startSpeaking = (text, emotion) => {
      const speechConfig = SpeechSDK.SpeechConfig.fromSubscription("ff542d4a97f340d4ae9faa685afab149", "eastus");
      speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural'; // Customize if needed
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
      const synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

      synthesizer.speakTextAsync(
          text,
          result => {
              console.log('Speech synthesis succeeded');
          },
          error => {
              console.error('Speech synthesis failed:', error);
          }
      );
  };
});

