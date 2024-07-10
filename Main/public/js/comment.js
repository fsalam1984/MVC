

  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

  // if (name && needed_funding && description) {
    const commentHandler = async (event) => {
      event.preventDefault();
    
      const id = window.location.href.split("/")[4];
      // Collect values from the  form
      const comment = document.querySelector('#project-comment').value.trim();


      if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/comment`, {

       
          method: 'POST',
          body: JSON.stringify({ comment}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {

      //Insert the values in the innerhtml
          // const mycomment = document.querySelector('#')
          // If successful, redirect the browser to the profile page
          // document.location.replace(`/project/${id}`);
          document.location.reload
          

        } else {
          alert(response.statusText);
        }
      }
    };
  
    document
    .querySelector('.comment-project-form')
    .addEventListener('submit', commentHandler);  


    // const newFormHandler = async (event) => {
    //   event.preventDefault();
    
    //   const name = document.querySelector('#project-name').value.trim();
    //   // const needed_funding = document.querySelector('#project-funding').value.trim();
    //   const description = document.querySelector('#project-desc').value.trim();
    
    //   // if (name && needed_funding && description) {
    //   if (name && description) {
    //     const response = await fetch(`/api/projects`, {
    //       method: 'POST',
    //       // body: JSON.stringify({ name, needed_funding, description }),
    //       body: JSON.stringify({ name, description }),
    
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
    
    //     if (response.ok) {
    //       document.location.replace('/profile');
    //     } else {
    //       alert('Failed to create project');
    //     }
    //   }
    // };
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

