var outArea = document.getElementById("blogOutput");
var inArea = document.getElementById("blogContent");

function addBlog() {
	posts.push(inArea.value);
	outArea.innerHTML = "";
	for (var i = posts.length - 1; i >= 0; i--) {
		outArea.innerHTML = outArea.innerHTML + "<hr>" + posts[i];
	};
}