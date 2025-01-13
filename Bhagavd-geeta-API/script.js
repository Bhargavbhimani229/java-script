let container = document.querySelector('.container');
let numericList = document.querySelector('.numeric-list');
let slokaContainer = document.getElementById('sloka-container');
let loadedChapters = new Set();

fetch('https://vedicscriptures.github.io/chapters')
  .then(response => response.json())
  .then((data) => {
    numericList.innerHTML = '';
    for (const key in data) {
      let chapterNumber = data[key].chapter_number;
      numericList.innerHTML += `<span onclick="gita('${chapterNumber}')">${chapterNumber}</span>`;
    }
  })
  .catch(err => console.log(err));

let gita = (chapterNumber) => {
  if (loadedChapters.has(chapterNumber)) {
    console.log(`Chapter ${chapterNumber} already loaded`);
    return;
  }

  fetch(`https://vedicscriptures.github.io/chapter/${chapterNumber}`)
    .then(res => res.json())
    .then((gitaData) => {
      loadedChapters.add(chapterNumber);
      container.innerHTML += `
        <h1>${gitaData.chapter_number} ${gitaData.name}</h1>
        <p id="summary">${gitaData.summary.en}</p>
        <p id="summary">${gitaData.summary.hi}</p>
      `;
    })
    .catch(err => console.log(err));
};

let slok = () => {
  fetch('https://vedicscriptures.github.io/slok/1/1')
    .then(response => response.json())
    .then(slokData => {
      console.log(slokData);

        for( const key in slokData){
          if(typeof slokData[key] == 'object')
          {
            console.log(slokData[key].author);
            console.log(slokData[key].et);
            
          }
          
        }
    })
    .catch(err => console.log(err));
};

slok();
