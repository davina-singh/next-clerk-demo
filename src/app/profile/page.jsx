import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Profile() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  return (
    <div>
      <h2>
        <SignedIn>
          Welcome {user?.firstName} {user?.lastName}
        </SignedIn>
        <SignedOut>
          <h2>Please sign in </h2>
        </SignedOut>
      </h2>
    </div>
  );
}
