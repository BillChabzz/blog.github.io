//Get the DOM elements that will contain the posts
var postsDiv = document.getElementById("posts");

//Create array of objects representing posts with text
var posts ={
	{
		"name" : "My First Blog"
		"author" : "Bill Chabari"
		"content" : "This is my first time creating a blog in just html css and javascript with no tools whatsoever. The challenge is to abstain from popular blog tools that are readily available online such as Wordpress, Joomla and much more. This is an exciting moment, however I am on this epic journey on learning things the hard way. I hope that this first post on the blog will be an eye opener for me to learn new things from the instructors back at Moringa School. I'll be grinding gears for the next few weeks to get myself ready for the tech world. I will update this blog's codebase as I take on my epic journey. Drop by sometime for more tech content!"
	}
};
posts.forEach(function (post) {
	var postDiv = document.createElement("div");
	var postNameDiv = document.createElement("div");
	var postAuthorDiv = document.createElement("div");

	postNameDiv.innerHTML = post.name;
	postAuthorDiv.innerHTML = post.author;
	postContentDiv.innerHTML = post.content;

	postDiv.appendChild(postNameDiv);
	postDiv.appendChild(postAuthorDiv);
	postDiv.appendChild(postContentDiv);

	postsDiv.appendChild(postDiv);
}};
