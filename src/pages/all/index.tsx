import { Carousel } from 'antd';
import { useRouter } from 'next/router';

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
      <div>首页</div>
      <Carousel autoplay touchMove>
        {[1, 2, 3, 4].map((item) => (
          <div className="w-24" key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </Carousel>
    </Main>
  );
};

export default Index;
