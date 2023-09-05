var posts = [
  {
    title: "Tiêu đề bài viêt 1",
    image: `https://picsum.photos/200/300`,
    decription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expeditiusto quaerat tenetur hic Harum quisquam aliquam delectus ea architecto, at ullam illum molestiae, exercitationem soluta earum,     eveniet sunt doloremque incidunt.",
  },
  {
    title: "Tiêu đề bài viêt 2",
    image: `https://picsum.photos/200/300`,
    decription:
      "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expeditiusto quaerat tenetur hic Harum quisquam aliquam delectus ea architecto, at ullam illum molestiae, exercitationem soluta earum,     eveniet sunt doloremque incidunt.",
  },
  {
    title: "Tiêu đề bài viêt 3",
    image: `https://picsum.photos/200/300`,
    decription:
      "3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expeditiusto quaerat tenetur hic Harum quisquam aliquam delectus ea architecto, at ullam illum molestiae, exercitationem soluta earum,     eveniet sunt doloremque incidunt.",
  },
];
var postHtml = posts.map(function (post, index) {
  return `<div class="post-item ${index % 2 !== 0 ? "post-rigth" : ""} ">
    <div class="img">
      <img src="${post.image}" alt="" />
    </div>
    <div class="content">
      <h2>${post.title}</h2>
      <p>
        ${post.decription}
      </p>
    </div>
    </div>`;
});
document.write(`<div class = "posts">
  ${postHtml.join("")}
  </div>
  `);
