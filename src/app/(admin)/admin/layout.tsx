// Admin Layout

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <nav>Admin Header</nav>
          {children}
          <footer>Footer Root</footer>
        </body>
      </html>
    );
  }