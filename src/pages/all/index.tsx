import Wait from '@/components/Wait';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="机场分享 免费机场 白嫖机场 低价机场 高端机场"
          description="机场分享 免费机场 白嫖机场 低价机场 高端机场."
        />
      }
    >
      <Wait />
    </Main>
  );
};

export default Index;
