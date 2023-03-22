import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="mx-auto xl:max-w-screen-2xl">
    {props.meta}

    <Nav />

    <div className="mx-auto max-w-screen-xl">
      <main className="content container mx-auto text-xl">
        {props.children}
      </main>

      <Footer />
    </div>
  </div>
);

export { Main };
