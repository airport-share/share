import { Carousel } from 'antd';
import { useRouter } from 'next/router';

import Card1 from '@/components/Card-1';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="机场分享 免费机场 白嫖机场 低价机场 高端机场"
          description="机场分享 免费机场 白嫖机场 低价机场 高端机场."
        />
      }
    >
      <Carousel draggable autoplay>
        {[1, 2, 3, 4].map((item) => (
          <div className="h-96 w-24 bg-slate-600" key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </Carousel>
      <div className="my-4 text-center">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          赞助商
        </h1>
        <p className="mb-6 text-center text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
    </Main>
  );
};

export default Index;
