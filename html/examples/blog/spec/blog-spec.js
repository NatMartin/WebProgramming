describe("blog", function() {

	it("defines a function called addBlog() to be called by the post button.", function () {
		expect(addBlog).toBeDefined();
	});

	it("connects the input area to the output area", function () {
		expect(outArea).toBeDefined();
		expect(outArea).not.toBeNull();
		expect(outArea).toEqual(document.getElementById("blogOutput"))
		outArea.innerHTML = "";
		expect(outArea.innerHTML).toEqual("");
		inArea.value = "Test";
		addBlog();
		expect(outArea.innerHTML).toEqual("<hr>Test");
	});

	it("stores multiple blog posts in an array called posts", function () {
		expect(posts).toBeDefined();
		expect(posts).not.toBeNull();
		posts = [];
		expect(posts).toEqual([]);
		inArea.value = "Test1";
		addBlog();
		expect(posts).toEqual(["Test1"]);
		inArea.value = "Test2";
		addBlog();
		expect(posts).toEqual(["Test1", "Test2"]);
	});
});