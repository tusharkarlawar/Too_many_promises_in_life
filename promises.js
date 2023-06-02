const posts = [];

      function createPost(post) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            posts.push(post);

            resolve();
          }, 1000);
        });
      }

      function updateLastUserActivityTime() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const lastActivityTime = new Date().toLocaleString();

            resolve(lastActivityTime);
          }, 1000);
        });
      }

      function deleteLastPost() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (posts.length > 0) {
              const deletedPost = posts.pop();

              resolve(deletedPost);
            } else {
              reject("ERROR: No posts to delete");
            }
          }, 1000);
        });
      }

      // Call the functions and handle the promises to get the desired output

      createPost({ title: "Post 1" })
        .then(() => updateLastUserActivityTime())

        .then((lastActivityTime) => {
          console.log("Posts:", posts);

          console.log("Last Activity Time:", lastActivityTime);

          return deleteLastPost();
        })

        .then((deletedPost) => {
          console.log("Deleted Post:", deletedPost);

          console.log("New Posts:", posts);
        })

        .catch((error) => {
          console.log(error);
        });