'use strict';

{

  const posts = [
    {
      text: 'javascriptの勉強中...',
      likeCount: 0,
      // show: function() {
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    },
  ];

  // show(posts[0]);
posts[0].show();

}


  



