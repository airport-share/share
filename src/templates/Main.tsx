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

    <div className="mx-auto max-w-screen-2xl">
      <main className=" mx-auto text-xl pd">{props.children}</main>

      <Footer />
    </div>
  </div>
);

export { Main };
