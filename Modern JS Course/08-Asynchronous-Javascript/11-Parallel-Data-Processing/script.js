// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('An error occurred:', error);
//         return null;
//     }
// }

// async function fetchUserData() {
//     const userData = await fetchData('https://jsonplaceholder.typicode.com/users');
//     if (userData) {
//         console.log('User data:', userData);
//         return userData;
//     }
// }

// async function fetchUserPosts(userId) {
//     const userPosts = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//     if (userPosts) {
//         console.log('User posts:', userPosts);
//         return userPosts;
//     }
// }

// async function fetchPostComments(postId) {
//     const postComments = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
//     if (postComments) {
//         console.log('Post comments:', postComments);
//         return postComments;
//     }
// }

// async function processSequentially() {
//     const userData = await fetchUserData();
//     if (userData) {
//         for (const user of userData) {
//             const userPosts = await fetchUserPosts(user.id);
//             if (userPosts) {
//                 for (const post of userPosts) {
//                     await fetchPostComments(post.id);
//                 }
//             }
//         }
//     }
//     console.log('Processing completed.');
// }

// processSequentially();