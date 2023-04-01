import { Carousel } from 'antd';

import Card1 from '@/components/Card-1';
import { airports } from '@/constant';
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
      <Carousel draggable autoplay>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="hero h-96 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://cdn4.telegram-cdn.org/file/u9cGJkfxXMoxkHGC_8oxk0Qe_npyclsB7vf1BgpQhPD5OwxbgwTkVpwaFikKGPphzRPwbZ-c8j5JnMZVIWgOA7SsLWJa1YlxCoXyfIiu3C1yOrXLjkqScDIrh4Tbob10lrfU6Kz0zhBAhANVN8k0E6bgRU6pC2i5JUUpM96aM4XCc01B2PX43Bdq1Y9Cm3ljNHxmm0wiiudQsPugu7daFx6xsT3m-m0yyGJ521Eg98hzXE4S34ETtJuka2zrcorVgJG3ufYYUFYm1-BFVNDmTZ2JIqEQ1yWOqY1TnnTjDM9gMgMJv_JSr8nXfQopU9Ef_m8HhFLpyUtrD-WtHSIAPQ.jpg"
                className="mr-4 hidden max-w-sm rounded-lg shadow-2xl"
                alt=""
              />
              <div>
                <h1 className="text-5xl font-bold">亿元国际</h1>
                <p className="py-2 text-2xl">直连低至0.01倍</p>
                <p className="py-2 text-2xl">2元上中转，中转15倍</p>
                <p className="py-2 text-2xl">2元/300G/月 10元/2888G/年</p>
                <div>
                  <a
                    className="btn-primary btn"
                    target="_blank"
                    href="https://yysw.acyun.tk/#/register?code=gtec3f2H"
                  >
                    立即注册
                  </a>
                  <a
                    className="btn-outline btn-secondary btn ml-8"
                    target="_blank"
                    href="https://yysw.acyun.tk/#/register?code=gtec3f2H"
                  >
                    官方群
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="my-6 text-center">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
          赞助商
        </h1>
        <p className="mb-6 text-center text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          感谢为咱们频道提供赞助的机场主
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {airports.map((airport) => (
            <Card1 key={airport.name} {...airport} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Index;
