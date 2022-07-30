const Post = ({ _id, text }) => {
  return `
    <div class="post">
      <div class="post-header">
        <p class="publisher"></p>
      </div>
      <div class="post-body">
        <p>
          ${text}
        </p>
      </div>
      <div class="post-footer">
        <span><i class="la la-hand-peace"></i><b>33</b></span>
        <span><i class="la la-comment"></i><b>11</b></span>
      </div>
    </div>
  `;
};
