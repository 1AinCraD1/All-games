const body = document.body;
const html = document.documentElement;

const centerContainer = document.createElement('div');
centerContainer.style.display = 'flex';
centerContainer.style.flexDirection = 'column';
centerContainer.style.alignItems = 'center';
centerContainer.style.justifyContent = 'center';
centerContainer.style.margin = '0';
centerContainer.style.padding = '0';
centerContainer.style.width = '650px';
centerContainer.style.height = '650px';
centerContainer.style.position = 'absolute';
centerContainer.style.top = '50%';
centerContainer.style.left = '50%';
centerContainer.style.transform = 'translate(-50%, -50%)';
centerContainer.style.border = '3px solid';
centerContainer.style.borderImage = 'linear-gradient(45deg, Yellow, Black, Lime) 1';
centerContainer.style.padding = '20px';

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Введіть запитання';
inputField.style.color = '#000';
inputField.style.width = '500px';
inputField.style.height = '50px';
inputField.style.borderRadius = '50px';
inputField.style.backgroundColor = 'Lavender';
inputField.style.textAlign = 'center';
inputField.style.fontSize = '24px';
inputField.style.marginBottom = '25px';

const button = document.createElement('button');
button.style.background = 'none';
button.style.border = 'none';
button.style.cursor = 'pointer';
button.style.margin = '0';
button.style.padding = '0';

const image = document.createElement('img');
image.src = 'https://masterpiecer-images.s3.yandex.net/94582dcb74da11ee8dccf6c574779d3e:upscaled';
image.alt = 'Опис зображення';
image.style.width = '465px';
image.style.height = '465px';

button.appendChild(image);

const answerText = document.createElement('span');
answerText.style.position = 'absolute';
answerText.style.top = '55%';
answerText.style.left = '50%';
answerText.style.transform = 'translate(-50%, -50%)';

button.appendChild(answerText);

centerContainer.appendChild(inputField);
centerContainer.appendChild(button);

body.appendChild(centerContainer);
body.style.background = 'black';

const answers = ['Yes', 'No', 'May be', 'No answer yet', 'Probably yes', 'Probably no'];

button.addEventListener('click', () => {
  const question = inputField.value;
  if (question.trim() === '') {
    alert('Введіть запитання!');
  } else {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    answerText.textContent = `${randomAnswer}`;
    answerText.style.fontSize = '40px';
    answerText.style.color = 'white';
	inputField.value = '';
  }

answerText.textContent = `${randomAnswer}`;
answerText.style.color= 'white';
});

window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    centerContainer.style.width = '80%';
	centerContainer.style.height = '50%';
    inputField.style.width = '100%';
	button.style.width = '350px';
	button.style.height = '350px';
	image.style.width = '350px';
	image.style.height = '350px';
  } else {
    centerContainer.style.width = '650px';
	centerContainer.style.height = '650px';
    inputField.style.width = '500px';
	button.style.width = '550px';
	button.style.height = '550px';
	image.style.width = '550px';
	image.style.height = '550px';
  }
});
