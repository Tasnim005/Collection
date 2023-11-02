/*
 <div class="comment">
        <div class="rating">
          <img src="images/icon-plus.svg" alt="" />
          <p class="score main"></p>
          <img src="images/icon-minus.svg" alt="" />
        </div>

        <div class="wrapper">
          <div class="commentInfo">
            <div class="user">
              <img src="images/avatars/image-amyrobson.png" alt="profile pic" />
              <p class="name main"></p>
              <p class="createdAt"></p>
            </div>

            <div class="options">
              <div class="btn replyLink">
                <img src="images/icon-reply.svg" alt="icon" />
                <p>Reply</p>
              </div>
            </div>
          </div>

          <div class="textContainer">
            <p class="text main"></p>
          </div>
        </div>
      </div>
*/

const main = document.querySelector('main');
const send = document.querySelector("input[type='submit']");

send.addEventListener('click', createNewComment);

function createNewComment() {
  const container = document.createElement('div');
  container.classList = 'container';

  const wrapper = document.createElement('div');
  wrapper.classList = 'wrapper';

  const commentInfo = document.createElement('div');
  commentInfo.classList = 'commentInfo';

  // Counter
  const counter = document.createElement('div')
  counter.classList= 'counter'

  const upvote = document.createElement('img')
  upvote.setAttribute('src', 'images/icon-plus.svg')
  upvote.classList = 'votes'
  
  const downvote = document.createElement('img')
  downvote.setAttribute('src', 'images/icon-minus.svg')
  downvote.classList = 'votes'

  const rating = document.createElement('p')
  rating.textContent=0
  rating.style.color = 'var(--Moderate-blue)'
  rating.style.fontWeight = '500';
  rating.style.marginBlock = '1rem'

  counter.append(upvote)
  counter.append(rating)
  counter.append(downvote)

  let score = 0

  upvote.addEventListener('click', ()=>{
    score++
    updateCounter()
  })
  downvote.addEventListener('click', ()=>{
    score--
    updateCounter()
  })

  function updateCounter(){
    // rating.append(document.createTextNode(score))
    rating.textContent= score
  }

  // Profile
  const profilePicture = document.createElement('img');
  profilePicture.setAttribute('src', 'images/avatars/image-juliusomo.webp');
  profilePicture.classList = 'profilePicture';

  const name = document.createElement('p');
  name.append(document.createTextNode('juliosomo'));
  name.style.fontWeight = '500';
  name.style.color = 'var(--Dark-blue)';

  // Delete Button
  const deleteBtn = document.createElement('div');
  deleteBtn.classList = 'deleteBtn';

  const deleteIcon = document.createElement('img');
  deleteIcon.setAttribute('src', 'images/icon-delete.svg');

  const deleteText = document.createElement('p');
  deleteText.append(document.createTextNode('Delete'));

  deleteBtn.append(deleteIcon);
  deleteBtn.append(deleteText);

  // New Comment
  const newComment = document.querySelector('textarea').value;
  const comment = document.createElement('p');
  comment.append(document.createTextNode(newComment));

  commentInfo.append(profilePicture);
  commentInfo.append(name);
  commentInfo.append(deleteBtn);

  wrapper.append(commentInfo);
  wrapper.append(comment);

  container.append(counter)
  container.append(wrapper);
  main.append(container);

  // Now add an event listener to the delete button
  deleteBtn.addEventListener('click', deleteComment);

  console.log(deleteBtn);
}

function deleteComment(event) {
  console.log(event)
  const container = event.target.closest('.container');
  if (container) {
    container.remove();
  }
}

