import "../globals.module.css";

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{border: '4px solid green'}}>
      {children}
    </div>
  );
}
