import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

export const metadata = {
  title: "Sankalp | An Atmanirbhar Bharat Open Source Community",
  description: "Collaborate and contribute to real-world open source projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
