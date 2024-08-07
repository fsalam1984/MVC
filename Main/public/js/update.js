const updateHandler = async (event) => {
  event.preventDefault();

  const id = window.location.href.split("/")[4];

  const name = document.querySelector('#project-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  // if (name && needed_funding && description) {
  if (name && description) {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      // body: JSON.stringify({ name, needed_funding, description }),
      body: JSON.stringify({ name, description }),

      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-project-form')
  .addEventListener('submit', updateHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
