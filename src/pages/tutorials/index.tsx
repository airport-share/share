import Wait from '@/components/Wait';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Tutorials = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Wait />
    </Main>
  );
};

export default Tutorials;
