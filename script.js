function f(k) {
	if(Math.abs(k) > .5)
		scrollTo(0, .5*(k - Math.sign(k) + 1)*(document.documentElement.offsetHeight - window.innerHeight))
}

f(-1);

addEventListener('scroll', e => f(+getComputedStyle(document.body).getPropertyValue('--k')))

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll("article").forEach(article => {
	  article.addEventListener("click", function () {
		// カスタムプロパティから URL を取得
		let url = getComputedStyle(this).getPropertyValue("--link").trim();
		url = url.replace(/^url\(["']?/, "").replace(/["']?\)$/, ""); // "url()" を除去
		if (url) {
		  window.open(url, "_blank"); // 新しいタブで開く
		}
	  });
	});
  });