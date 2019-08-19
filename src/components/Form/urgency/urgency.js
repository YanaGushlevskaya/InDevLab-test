const urgencyInput = document.querySelector('.urgency__input');

function readJsonFile(file, callback) {
  const rawFile = new XMLHttpRequest();
  const readyStateDone = 4;
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === readyStateDone && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

function getUrgencyType() {
  const value = event.target.value;
  let urgencyType;
  let urgencyText;

  readJsonFile('urgency.json', function(text) {
    const dataBase = JSON.parse(text);
    const urgency = dataBase.urgencyType;
    const urgencyTexts = urgency[0];
    switch (value) {
      case '0':
        urgencyText = urgencyTexts.gotTime;
        urgencyType = 'I got time';
        break;
      case '1':
        urgencyText = urgencyTexts.average;
        urgencyType = 'Average';
        break;
      case '2':
        urgencyText = urgencyTexts.yesterday;
        urgencyType = 'Yesterday';
        break;
    }
    createElement(urgencyType, urgencyText);
  });
}

function createElement(urgencyType, urgencyText) {
  const urgencyDescription = document.querySelector('.input-description-text');
  const child = `With an <span class="urgency__input-value">${urgencyType}</span> timeline set up, ${urgencyText}`;
  urgencyDescription.innerHTML = child;
}

urgencyInput.addEventListener('change', getUrgencyType);
urgencyInput.addEventListener('input', getUrgencyType);
