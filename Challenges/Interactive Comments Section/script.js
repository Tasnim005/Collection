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
const createCommentDiv = document.querySelector('.createComment');

send.addEventListener('click', createNewComment);

function createNewComment() {
  const container = document.createElement('div');
  container.classList = 'container';

  const wrapper = document.createElement('div');
  wrapper.classList = 'wrapper';

  const commentInfo = document.createElement('div');
  commentInfo.classList = 'commentInfo';

  // Profile
  const profileContainer = document.createElement('div')
  profileContainer.classList = 'profileContainer'

  const profilePicture = document.createElement('img');
  profilePicture.setAttribute('src', 'images/avatars/image-juliusomo.webp');
  profilePicture.classList = 'profilePicture';

  const name = document.createElement('p');
  name.append(document.createTextNode('juliosomo'));
  name.style.fontWeight = '500';
  name.style.color = 'var(--Dark-blue)';

  profileContainer.append(profilePicture)
  profileContainer.append(name)
  commentInfo.append(profileContainer);

  // New Comment
  const newComment = document.querySelector('textarea').value;
  const comment = document.createElement('p');
  comment.classList = 'comment'
  comment.append(document.createTextNode(newComment));

  wrapper.append(commentInfo);
  wrapper.append(comment);

  main.insertBefore(container, createCommentDiv);


  // Counter
  const counter = document.createElement('div')
  counter.classList = 'counter'

  const upvote = document.createElement('img')
  upvote.setAttribute('src', 'images/icon-plus.svg')
  upvote.classList = 'votes'

  const downvote = document.createElement('img')
  downvote.setAttribute('src', 'images/icon-minus.svg')
  downvote.classList = 'votes'

  const rating = document.createElement('p')
  rating.textContent = 0
  rating.style.color = 'var(--Moderate-blue)'
  rating.style.fontWeight = '500';
  rating.style.marginBlock = '1rem'

  counter.append(upvote)
  counter.append(rating)
  counter.append(downvote)

  let score = 0

  upvote.addEventListener('click', () => {
    score++
    updateCounter()
  })
  downvote.addEventListener('click', () => {
    score--
    updateCounter()
  })

  function updateCounter() {
    rating.textContent = score
  }

  container.append(counter)
  container.append(wrapper);

  // Delete Button
  const deleteBtn = document.createElement('div');
  deleteBtn.classList = 'deleteBtn';

  const deleteIcon = document.createElement('img');
  deleteIcon.setAttribute('src', 'images/icon-delete.svg');

  const deleteText = document.createElement('p');
  deleteText.append(document.createTextNode('Delete'));

  deleteBtn.append(deleteIcon);
  deleteBtn.append(deleteText);
  // commentInfo.append(deleteBtn);

  // Edit Button
  const editBtn = document.createElement('div');
  editBtn.classList = 'editBtn';

  const editIcon = document.createElement('img');
  editIcon.setAttribute('src', 'images/icon-edit.svg');

  const editText = document.createElement('p');
  editText.append(document.createTextNode('Edit'));

  editBtn.append(editIcon);
  editBtn.append(editText);

  const actions = document.createElement('div')
  actions.classList = 'actions'
  actions.append(deleteBtn)
  actions.append(editBtn)

  commentInfo.append(actions);

  // Now add an event listener to the delete button
  deleteBtn.addEventListener('click', deleteComment);
  editBtn.addEventListener('click', editComment);
}

function deleteComment(event) {
  const container = event.target.closest('.container');

  if (container) {
    const modal = document.querySelector('.modal');
    const modalOverlay = document.getElementById('modalOverlay');
    const proceedDeleting = document.getElementById('proceed');
    const exitDeleting = document.getElementById('exit');

    modal.style.display = 'block';
    modalOverlay.style.display = 'block';

    proceedDeleting.addEventListener('click', ()=>{
     container.remove();
     modal.style.display = 'none';
     modalOverlay.style.display = 'none';
    })

    exitDeleting.addEventListener('click', ()=>{
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
     })

  }
}

function editComment(event) {
  const container = event.target.closest('.container');
  if (container) {

    const commentToBeEdited = container.querySelector('.comment')
    const wrapper = container.querySelector('.wrapper')

    const editTextarea = document.createElement('textarea')
    editTextarea.classList = 'editTextarea'
    editTextarea.value = commentToBeEdited.textContent

    wrapper.replaceChild(editTextarea, commentToBeEdited)

    // Update Button
    const update = document.createElement("input")
    update.setAttribute('type', 'submit')
    update.setAttribute('value', 'Update')
    update.classList = 'cta'

    // Check if the "Update" button is already present
    if (!wrapper.querySelector('.cta')) {
      wrapper.append(update);
    }

    update.addEventListener('click', updateComment)
  }
}

function updateComment(event) {
  const container = event.target.closest('.container');
  if (container) {
    const updatedComment = document.createElement('p');
    updatedComment.classList = 'comment';

    const editingTextarea = container.querySelector('.editTextarea');
    updatedComment.textContent = editingTextarea.value;

    const wrapper = container.querySelector('.wrapper');
    wrapper.replaceChild(updatedComment, editingTextarea);

    // Remove the "Update" button after updating the comment
    const updateButton = container.querySelector('.cta');
    if (updateButton) {
      updateButton.remove();
    }
  }
}



