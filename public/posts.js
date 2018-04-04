{
  "posts": [
    {
      "id": "11111",
      "link_name": "Look at this cool cat.",
      "link_url": "https://imgur.com/gallery/g3D5jNz",
    },
    {
      "id": "2222",
      "link_name": "Look at this cool car.",
      "link_url": "https://imgur.com/gallery/g3D5jNz",
    },
    {
      "id": "3333",
      "link_name": "Look at this cool computer.",
      "link_url": "https://imgur.com/gallery/g3D5jNz",
    },
  ]
}

function getAndDisplayStatusUpdates(data) {
    for (index in data.posts) {
       $('body').append(
        '<p>' + data.posts[index].link_name + '</p>');
    }
}

$(function() {
    getAndDisplayStatusUpdates();
});
