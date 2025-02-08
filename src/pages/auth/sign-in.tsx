import DefaultLayout from "~/components/layout/default-layout";
import { PageWithLayout } from "../_app";
import { SignIn } from "@clerk/nextjs";

const SignInPage: PageWithLayout = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn />
    </div>
  );
};
SignInPage.Layout = DefaultLayout;
export default SignInPage;
