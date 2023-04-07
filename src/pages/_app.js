import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import "@styles/globals.scss";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublicPath = ["/"].includes(pathname);
  return (
    <ClerkProvider>
      {isPublicPath && <Component {...pageProps} />}
      {!isPublicPath && (
        <>
          <SignedIn>
          <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
