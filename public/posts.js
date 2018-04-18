const tempPostsStore = [
  {
    "id": "11111",
    "link_name": "Look at this cool cat.",
    "link_url": "https://imgur.com/gallery/g3D5jNz",
    "link_img": ""
  },
  {
    "id": "2222",
    "link_name": "Look at this cool car.",
    "link_url": "https://imgur.com/gallery/g3D5jNz",
    "link_img": ""
  },
  {
    "id": "3333",
    "link_name": "Look at this cool computer.",
    "link_url": "https://imgur.com/gallery/g3D5jNz",
    "link_img": ""
  }
];

function goFetch() {
  // write your fetch request to get, idk, like 10 or 20 documents
}

function getAndDisplayStatusUpdates(data) {
    for (let i = 0; i < tempPostsStore.length; ++i) {
       $('body').append(
         `<div class='post-body'>
           <a href="`
           + data[i].link_url
           + `" class='post-title'>`
           + data[i].link_name
           +
           `</a>
           <span class='post-location'>(self.WOOHOO)</span>
           <p>submitted 10 hours ago* by <a class='submit-link' href='#'>Jlopez89</a> to <a class='submit-link' href='#'>/r/yadayada</a></p>
           <div class='post-options'>
             <span>15 comments</span>
             <span>share</span>
             <span>save</span>
             <span>hide</span>
             <span>report</span>
             <span>crosspost</span>
           </div>
         </div>`);
    }
}
$(getAndDisplayStatusUpdates(tempPostsStore));
