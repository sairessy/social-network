const Post = ({ _id, text, cratedAt, user }) => {
  return `
    <div class="post">
      <div class="post-header">
      <div id="form-post-header">
      <div>
        <div class="avatar">
          <img src="assets/img/user-alt-solid.svg" alt="user-image" />
        </div>
      </div>
      <div>
        <h4>${user}</h4>
        <p>${new Date(cratedAt)}</p>
      </div>
    </div>

      </div>
      <div class="post-body">
        <p>
          ${text}
        </p>
      </div>
      <div class="post-footer">
        <span class="btn-like"><i class="la la-heart-o"></i><b>33</b></span>
        <span class="btn-comment"><i class="la la-comment"></i><b>11</b></span>
        <span class="btn-share"><i class="la la-share"></i><b>11</b></span>
      </div>
    </div>
  `;
};
