import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "quiz-02",
  description: "quiz-02",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div
          style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
          className="p-3"
        >
          <div
            style={{ maxWidth: "700px", backgroundColor: "#242526" }}
            className="mx-auto p-3 rounded rounded-3 shadow-sm"
          >
            {" "}
            <PostOwner fullName="Kaewtar Lungta" studentId="650610750" />
            <Comment />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
