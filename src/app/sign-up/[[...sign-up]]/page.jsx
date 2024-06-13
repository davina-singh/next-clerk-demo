import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <p> Welcome to the website, you can sign-up here</p>
      <SignUp path="/sign-up" />;
    </div>
  );
}
