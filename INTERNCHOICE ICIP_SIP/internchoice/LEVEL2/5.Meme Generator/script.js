// Get DOM elements
const memeImage = document.getElementById('memeImage');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const generateBtn = document.getElementById('generateBtn');

// Set default image and text
memeImage.src = 'default-meme-image.jpg';
topText.innerText = 'Top Text';
bottomText.innerText = 'Bottom Text';

// Generate meme
generateBtn.addEventListener('click', function() {
  const generatedMeme = document.createElement('div');
  generatedMeme.classList.add('generated-meme');
  
  const memeImg = document.createElement('img');
  memeImg.src = memeImage.src;
  
  const memeTopText = document.createElement('div');
  memeTopText.classList.add('meme-text', 'top-text');
  memeTopText.innerText = topText.innerText;
  
  const memeBottomText = document.createElement('div');
  memeBottomText.classList.add('meme-text', 'bottom-text');
  memeBottomText.innerText = bottomText.innerText;
  
  generatedMeme.appendChild(memeImg);
  generatedMeme.appendChild(memeTopText);
  generatedMeme.appendChild(memeBottomText);
  
  document.body.appendChild(generatedMeme);
  
  // Clear input fields
  topText.innerText = '';
  bottomText.innerText = '';
});

  