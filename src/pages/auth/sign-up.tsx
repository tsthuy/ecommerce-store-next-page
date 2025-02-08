import DefaultLayout from "~/components/layout/default-layout";
import { PageWithLayout } from "../_app";
import { SignUp } from "@clerk/nextjs";

const SignUpPage: PageWithLayout = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};
SignUpPage.Layout = DefaultLayout;
export default SignUpPage;
