const config = {
    siteTitle: "Erik Flores",
    siteTitleShort: "Erik Flores",
    siteTitleAlt: "Erik Flores",
    siteUrl: "https://erikflores.github.io",
    siteLogo: "/logos/erikfloresq.png",
    repo: "https://github.com/erikfloresq/erikflores.github.io",
    dateFromFormat: "YYYY-MM-DD",
    dateFormat: "MMMM Do, YYYY",
    siteDescription: "Erik Flores, developer con gusto por el frontend",
    siteRss: "/rss.xml",
    googleAnalyticsID: "UA-163309476-1",
    postDefaultCategoryID: "code",
    userName: "Erik",
    userEmail: "erikfloresq@gmail.com",
    userTwitter: "erikfloresq",
    menuLinks: [
      {
        name: "Acerca de mi",
        link: "/acerca-de-mi/"
      }
    ],
    themeColor: "#B90015", // Used for setting manifest and progress theme colors.
    backgroundColor: "#ffffff"
  };
  
  // Make sure siteUrl doesn't have an ending forward slash
  if (config.siteUrl.substr(-1) === "/")
    config.siteUrl = config.siteUrl.slice(0, -1);
  
  // Make sure siteRss has a starting forward slash
  if (config.siteRss && config.siteRss[0] !== "/")
    config.siteRss = `/${config.siteRss}`;
  
  module.exports = config;
  