window.Config = {

  // 显示标题
  SiteName: 'HNPS Status(Classic)',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  // 注意：请不要在生产环境中使用Key
  //配置为仓库变量
  ApiKeys: [
    'm795879085-c2f5ffc50085c3fc7bae509e',
    'm795879101-73831c99d7d474af0baa8980',
    'm795879094-f233816139b63de17edeeae4',
    'm795996190-01d43eb7ccd33cc3097bb857',
    'm796265864-222238da59f021d11cdf43d4',
    process.env.uprbapi_link_simpfun_homepage, // 尝试使用vercel变量代替明文
  ],

  // 日志天数
  CountDays: 90,

  // 是否显示检测站点的链接
  ShowLink: false,

  // 导航栏菜单
  Navi: [
    {
      text: 'New Status Page',
      url: 'https://status.hzokana.top/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/NaOH-HaN/HNPS_uptime-status/'
    },
    {
      text: 'HNPS Docs',
      url: 'https://github.com/NaOH-HaN/HNPS-Docs'
    },
  ],
};
