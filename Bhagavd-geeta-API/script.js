let container = document.querySelector('.container');
let numericList = document.querySelector('.numeric-list');
let loadedChapters = new Set(); 

fetch('https://vedicscriptures.github.io/chapters')
  .then(response => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    numericList.innerHTML = '';
    for (const key in data) {
      let dataCatch = data[key].chapter_number;
      numericList.innerHTML += `<span onclick="gita('${dataCatch}')">${dataCatch}</span>`;
    }
  })
  .catch(err => console.log(err));

let gita = (dataCatch) => {
  if (loadedChapters.has(dataCatch)) {
    console.log(`Chapter ${dataCatch} already loaded`);
    return; 
  }
  console.log(dataCatch);
  fetch(`https://vedicscriptures.github.io/chapter/${dataCatch}`)
    .then(res => res.json())
    .then((gitaData) => {
      console.log(gitaData);
      loadedChapters.add(dataCatch);
      container.innerHTML += `
        <h1>${gitaData.chapter_number} ${gitaData.name}</h1>
        <p id="summary">${gitaData.summary.en}</p>
        <p id="summary">${gitaData.summary.hi}</p>
      `;
    })
    .catch(err => console.log(err));
}
