import "/public/assets/styles.css";

export const metadata = {
  title: "Inspire Dance Complex - Premier Dance Studio in Corona, CA",
  description: "Corona's premier dance studio since 2013",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap" 
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}