document.addEventListener("DOMContentLoaded", () => {
  const username = "mikkelsj"; // Replace with your Dev.to username
  const postsContainer = document.getElementById("devto-posts");

  // Function to clean the description by removing specific words
  function cleanDescription(description) {
    const patterns = [/^TL;DR[:]?/i, /^Introduction[:]?/i]; // Patterns to match
    let cleanedDescription = description;

    // Replace the matching patterns with an empty string
    patterns.forEach((pattern) => {
      cleanedDescription = cleanedDescription.replace(pattern, "").trim();
    });

    return cleanedDescription; // Return the cleaned description
  }

  // Fetch posts from the Dev.to API
  fetch(`https://dev.to/api/articles?username=${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    })
    .then((posts) => {
      // Display each post
      posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const coverImage = post.cover_image
          ? `<img src="${post.cover_image}" alt="${post.title}" class="post-image">`
          : `<div class="post-image" style="background: #eaeaea;"></div>`;
        const rawDescription = post.description || "No description available.";
        const cleanedDescription = cleanDescription(rawDescription);
        const tags = post.tag_list
          .map((tag) => `<span>#${tag}</span>`)
          .join("");

        postElement.innerHTML = `
          ${coverImage}
          <div class="post-content">
            <h2>
              <a href="${post.url}" target="_blank">${post.title}</a>
            </h2>
            <p>${cleanedDescription}</p>
            <div class="post-tags">${tags}</div>
          </div>
        `;

        postsContainer.appendChild(postElement);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      postsContainer.innerHTML =
        "<p>Unable to load posts at the moment. Please try again later.</p>";
    });
});
