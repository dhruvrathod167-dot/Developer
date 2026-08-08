import type { Metadata } from 'next';
import './globals.css';
import { Inter, Bebas_Neue, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dhruvrathod.dev'),
  title: {
    default: 'Dhruv Rathod — Python Django Developer',
    template: '%s — Dhruv Rathod',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  description:
    'Full-stack Python Django developer building fast, reliable web applications with Python, Django, REST APIs, and modern JavaScript. Based in Ahmedabad, India.',
  keywords: [
    'Dhruv Rathod',
    'Python Django Developer',
    'Full-stack Developer',
    'Ahmedabad Developer',
    'Django',
    'Python',
    'REST APIs',
    'Web Developer India',
  ],
  authors: [{ name: 'Dhruv Rathod' }],
  creator: 'Dhruv Rathod',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dhruvrathod.dev',
    title: 'Dhruv Rathod — Python Django Developer',
    description:
      'Full-stack Python Django developer building fast, reliable web applications with Python, Django, REST APIs, and modern JavaScript.',
    siteName: 'Dhruv Rathod',
    images: [
      {
        url: '/Dhruv_Photo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dhruv Rathod — Python Django Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruv Rathod — Python Django Developer',
    description:
      'Full-stack Python Django developer building fast, reliable web applications with Python, Django, REST APIs, and modern JavaScript.',
    images: ['/Dhruv_Photo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
