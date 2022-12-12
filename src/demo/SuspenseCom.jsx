import { Suspense } from "react";

import { fetchProfileData } from "./fetchMock";

const resource = fetchProfileData();

function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  console.log('ProfileDetails render');
  const user = resource.user.read();
  console.log('user: ', user);
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  console.log('ProfileTimeline render');
  const posts = resource.posts.read();
  console.log('posts: ', posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default ProfilePage;
