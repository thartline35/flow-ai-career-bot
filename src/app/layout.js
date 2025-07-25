import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flow AI - Career Guidance Chatbot",
  description: "AI-powered career guidance assistant helping unicorn professionals discover their unique career paths",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Hide Next.js development toolbar
              function hideDevToolbar() {
                const elements = document.querySelectorAll('[data-nextjs-dev-indicator], #__next-build-watcher, #__next-prerender-indicator, [class*="nextjs"], [class*="__next"]');
                elements.forEach(el => {
                  el.style.display = 'none';
                  el.style.visibility = 'hidden';
                  el.style.opacity = '0';
                  el.style.pointerEvents = 'none';
                });
              }
              
              // Run immediately and also on DOM changes
              hideDevToolbar();
              const observer = new MutationObserver(hideDevToolbar);
              observer.observe(document.body, { childList: true, subtree: true });
            `,
          }}
        />
      </body>
    </html>
  );
}
