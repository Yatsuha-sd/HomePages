let root = document.documentElement;

root.addEventListener("pointermove", e => {
  root.style.setProperty("--x", e.clientX);
  root.style.setProperty("--y", e.clientY);
});

let n = getComputedStyle(root).getPropertyValue("--n");
let threshold = n / 2;

addEventListener("scroll", e => {
  let current = scrollY / innerHeight;
  if (current >= threshold) scrollTo(0, 1);
  if (current < 1) scrollTo(0, innerHeight * (threshold - 1));
});

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const section = document.querySelector('.assembly');
    data.forEach((item, index) => {
      const article = document.createElement('article');
      article.style = `--i: ${index}; --url: url(${item.img}); ${item.pos ? `--pos: ${item.pos};` : ''}`;

      article.innerHTML = `
        <header>
          <h2>${item.title}</h2><em>${item.latin}</em>
        </header>
        <figure>
          <img src="${item.img}" alt="${item.alt}" />
          <figcaption>by <a href="${item.link}" target="_blank">${item.caption}</a></figcaption>
        </figure>
      `;
      section.appendChild(article);
    });

    root.style.setProperty("--n", data.length);
  })
  .catch(err => console.error('JSON読み込みエラー:', err));
