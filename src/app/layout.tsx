import { FC, PropsWithChildren } from 'react';
import '../styles/dist.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <title>я сворую бабки</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <head />
    <body className="xs:flex items-center justify-center xs:min-h-screen">
      <div className="max-w-screen-xs w-full mx-auto xs:border-2 xs:rounded-xl flex items-center justify-center aspect-mobile">
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
