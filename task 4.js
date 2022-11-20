(function() {

	let str = "";
	let imgs = document.images;
	document.querySelector(".text").innerHTML = "text";
	for (let i = 0; i < imgs.length; i++) {
		str += imgs[i].src +"<br>";
	}
	document.querySelector(".text").innerHTML = str;
	let k = 0;
	let id = setInterval(function() {
		let j = k % imgs.length;
			imgs[j].style.border = "1px solid red"
			k++;
		if (k == imgs.length) {
			clearInterval(id);
		}
	}, 1000);
}());