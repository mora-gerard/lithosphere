// Import Style //
import "@/app/ui/style/index.scss";

// Import Font //
import { inter } from "./ui/fonts/inter";

// Metadata //
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
// Import Cookies //
import { cookies } from "next/headers";

// Import JWT //
import jwt from "jsonwebtoken";

// Import Components //
import Header from "./ui/layout/header/Header";
import Footer from "./ui/layout/Footer";

// Import Context //
import AuthProvider from "./context/AuthContext";

export default async function RootLayout({ children }) {
  let tokenRole = undefined;
  const cookieStore = await cookies();
  console.log("cookie", cookieStore);

  const isUserConnected = cookieStore.get("userToken") ? true : false;

  if (isUserConnected) {
    const token = cookieStore.get("userToken").value;
    const decryptToken = jwt.verify(token, process.env.BCRYPTCRYPTAGE);
    tokenRole = decryptToken.userRole;
  }

  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider isUserConnected={isUserConnected} tokenRole={tokenRole}>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
