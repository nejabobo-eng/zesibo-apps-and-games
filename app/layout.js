import "./globals.css";

export const metadata = {
  title: "Zesibo Apps & Games | Made for everyday life and play",
  description: "Useful apps and original games for every generation.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
