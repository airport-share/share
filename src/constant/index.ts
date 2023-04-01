export interface Airport {
  name: string;
  group: string;
  desc?: string[];
  recommends?: string[];
  coupon?: {
    label: string;
    value: string;
  }[];
  url: string;
  avatar: string;
}
export const airports: Airport[] = [
  {
    name: '雲上風鈴',
    group: 'https://t.me/FengLingCloudGroup',
    desc: ['需要使用 香港 日本 韩国 新加坡 的节点才能访问官网'],
    recommends: ['9块/月 188G'],
    url: 'https://www.flyun.org/auth/register?code=64SX',
    avatar:
      'https://cdn5.telegram-cdn.org/file/p5kkhgySuJ8urvJvYpdYErGSpcjh__8k5h3mgd-zZJn4MVL25-qrf922fqR3EO6jHKfBJCADjMWiwT_dYA52NML1CKw4HuaZC9V0IJwTOH09gRJb0Btq6J-Dc_SFWjEbyi_QChHnFOZG2oKMfOANlcBNUSneiVyl66RJBasi6zyrJGLqA0eBXwjflY8IVyfbKEdVG34QDUh4F4c1WPjuhu1V-gX9ntICdjEQ1SRSPl8jQJDaHAkShpa_kjeq9O14tSbVuleI4lkt06qQ6_BasdgLbzsMorO3x4NPu-gWxAXm_onjsw5udZYnVWmMLw2Tot5Q3FwwbSQ-H9xDrA2C4Q.jpg',
  },
  {
    name: '彩云',
    group: 'https://t.me/caiyun_pro',
    desc: [
      '80+节点覆盖全球20+国家',
      '稳定高速，所有套餐均永久有效',
      '不限制客户端数量，不限制速度，流媒体解锁',
    ],
    recommends: [],
    coupon: [],
    url: 'https://caiyun.pro/#/register?code=Dj2QLlsj',
    avatar:
      'https://cdn5.telegram-cdn.org/file/jw63erttzh-1srv5NDJWtFhYZuus36j_0996xdLMdRWPLTWH1WqPiXJlgbnW5qinrQ2JzSTFNTc6iNvqnVc6s6RkE2QsFiEBv3L3L44URCNz3apuZPULrNjcvUcY-1vBvrUUxOSrAvmhmfcUQcPUaJgO6y-enuYa8G1yrCE__bNO9RhEsBUaHPPjT3Yh_gAY5j6Mo8mqn_HoeTL4N_dFxFtbcEdFBwNPIIjplhlSRtZ8ETyJuoX9dqrIIg9QxLdj4aROCkWWurKyv15fke6O9Ad3KEVFxXfBLR9_8qnvMwULUak7l2APWmqWc6QU_0EAiXG4aiJ3-QQAEJuHZJcw5Q.jpg',
  },
  {
    name: '时代互联-小熊α',
    group: 'https://t.me/timeswathPolaris',
    desc: ['注册体验3天, 32个节点, 10个中转高速节点'],
    recommends: [
      '初级包 6块2, 512G/月',
      '基础包 8块8, 1T/月',
      '中级包 15块, 2T/月',
      '高级包 26块, 4T/月',
    ],
    coupon: [{ label: '8.8折优惠码', value: '@go2sharing' }],
    url: 'https://dh.timeswath.uk/#/register?code=lSP3bHrN',
    avatar:
      'https://cdn5.telegram-cdn.org/file/t98V1IzI0waRoxGjE7s2AmNST0WnMUSG_loiKbbtoUz1PQF2pmEQdCm4bXw_3SB_WnAi-_ca8vpv3kjdV5bejVXiZZvQ1l0IMMtpm-ofAVb39b-JRquifTFUYoDF35GlMczLCynJdB0BSg_8_iA__oNM67AsltVaIoCJqm5RM2k1XliQi9mRTIFvHus12vylw4sbATMrEIn7fwT7MsKF-Goz3SfrU_we-XBYil_3tTvyx2CJDbuPBQmjfar_HtRzcLQlC_yPyjLg93PXCA96t_u4ftfrgdOqHAudbJZN25j_OIAuzgkmuspaT-CmTvuao_9_6zCbL-QoQgqTBDQ8bA.jpg',
  },
  {
    name: '青森Cyanmori',
    group: 'https://t.me/cyanmori',
    desc: ['节点多, 地区多, 速度快'],
    recommends: ['折后16块/月 160G'],
    coupon: [{ label: '8折优惠码', value: 'go4sharing' }],
    url: 'https://www.flyun.org/auth/register?code=64SX',
    avatar:
      'https://cdn5.telegram-cdn.org/file/MPv-0hxACHEncH-WgTmNROjr9rzqmw3EL2oV_9sw2NuqeeCLn-8JB4D4TZttoUVhJSgIfTN4rifoLDSwpyWnWgf6r1B3tX0sEqfhPp2VF9mIY6H9-LlN2EtDM8hdM5esUJHllEDJj1MxaIrYBt5gwot1F6UxqyxzLiNkk4wuhMhxLTdWvLgh1kbWdHjD-E6Bbx05RyBuGSJnERL3bsIUDt_KqVfN2aDUHcMxI7QfbqltdnqNo8bdE4SkEiYQCgCXm_JKPXHTMB-VhOd3AedD9N9vSFeESVfmDAlDTZxWPPSuEAXAYihSYjnFHnODG35CO9Zx97ROYQBljm-QzPh73g.jpg',
  },
  {
    name: '灯塔Cloud',
    group: 'https://t.me/DT_lighthouse',
    desc: ['部分住宅ip, 主打抖音节点'],
    recommends: [
      'vip1套餐: 10块100G/月, 6条线路, 30个节点',
      'vip2套餐:  券后215块600G/月*12 60个节点',
    ],
    coupon: [{ label: '8折优惠码', value: 'WtZKbepk' }],
    url: 'https://dt666.xyz/index.php#/register?code=zT3Gzfsm',
    avatar:
      'https://cdn5.telegram-cdn.org/file/hXW5ESUr2RhzImjNLoOpOyWbAmhgWqAUFiO7NHQYoGdgPQ7fBHmNzyRnMyvTpQ9hcc8DPPfQcMJGDTr3WhupyPf0xZayYrqxxSVQnJJUL1M4c_a-W-s8eS4xg4U0GM3O1LTYFI_eTZMjJ76vuFzRugSPPXlQQ4dHh1g92Jhtoe5_o-2uM1zLX1vrNkxpaYZDWHr9KwvsGgoANHTJI0hCjHOvjtFi2vPMnyCmM7s83qy1gYi6JjgRCDE4z2Jh4ynMN2sgFgndbv5amGzGxczWEFkyxdacF8ZHxbn_AusYsrmDX-p8hOMSPdVsodzdihP2f2M6LXpSCyQ-xwqZ4QWYag.jpg',
  },
  {
    name: '便宜机场',
    group: 'https://t.me/+hsclgYp3WkRjMmIy',
    desc: ['注册4T/3天, 24个节点'],
    recommends: ['4块/4T/月', '8块/9T/月', '15块1年，每个月500G'],
    url: 'https://xn--wtq35pfyd55o.com/#/register?code=RZngyiXA',
    avatar:
      'https://cdn4.telegram-cdn.org/file/GpeCFEatoEsx8yheY18e8D57e5S28mrARzoONox4J76oLsGCt_MJ69gjXvqn948EPO3MIQ69b5r8gjD_fODWURNrhHITuT2CRoVA2Wn9xhWN5cq_M-CZniQNoT2wT9g35z5P23w4MN7h8UngbdcNWLYvZAwgcPk9_Q_oy4m9heZduW7kUvbzha4h_xFApoZwdbUt4txyyzyxxHugOJgq38i0qeGWuq4TB4D6hlrFERb66z02UDtCcJxanX5EZLx3GmFGAl48d4qdaM-W_f6q3u8qJP3loDAfR1jzHkn5p_ZMWevLGi-f5_J_-9_OLVWwJ6dBdEVeeV8Kmx9Wy_-SIw.jpg',
  },
];
