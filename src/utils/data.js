
export const hero = {
  en: {
    to: "中文",
    navbar: [
      { text: "Tech Stack", id: "stack" },
      { text: "Projects", id: "projects" },
      { text: "Project Details", id: "details" },
      { text: "Contact", id: "contact" }
    ],
    hero: {
      name: "Frederick Aurelio Halim",
      title: "Frontend Developer",
      subTitle: ["Equipped with 1 years of learning experience in", "for developing a website and web applications"],
      button: "Get Started"
    }
  },
  ch: {
    to: "English",
    navbar: [
      { text: "技术栈", id: "stack" },
      { text: "项目", id: "projects" },
      { text: "项目详情", id: "details" },
      { text: "联系", id: "contact" }
    ],
    hero: {
      name: "林健昌",
      title: "前端开发者",
      subTitle: ["具备一年学习", "开发网站和Web应用程序的经验"],
      button: "开始"
    }
  }
}

export const projects = {
  note: {
    en: "Note: Users in China need a VPN to access the website.",
    ch: "注意：中国大陆用户需要使用VPN才能访问该网站。"
  },
  link: {
    en: ["Learn more", "Check Live Site"],
    ch: ["了解更多", "查看网站"]
  },
  projects: [
    {
      img: "./bookling.jpg",
      refMore: "#bookling",
      refSite: "http://120.26.45.50/books/",
      title: {
        en: "📕Bookling (Web App)",
        ch: "📕Bookling (Web应用程序)"
      },
      vpn: false,
      desc: {
        en: "Bookling is a web application that allows users to sign up, log in, and post book information to share with others. Users can search, sort, and filter books according to their preferences and save their favorite books. Users can also view which books others favour.",
        ch: "Bookling 是一个网络应用程序, 允许用户注册、登录并发布书籍信息与他人分享。用户可以根据自己的偏好搜索、排序和筛选书籍，并保存自己喜欢的书籍。用户还可以查看其他人喜欢的书籍。"
      }
    },
    {
      img: "./fxtrade.jpg",
      refMore: "#fxtrade",
      refSite: "https://fx-trade-gamma.vercel.app/forex/",
      title: {
        en: `FXTrade (Landing Page & Web App)`,
        ch: "FXTrade (登陆页 & Web应用程序)"
      },
      vpn: true,
      desc: {
        en: "FXTrade, where users can learn to trade foreign exchange currency in real-time. This web application allows users to sign up, log in, and receive ¥100,000 fake money to practice trading. Also works on mobile and desktop or any devices.",
        ch: "FXTrade，用户可以实时学习外汇交易。此网络应用程序允许用户注册、登录，并获得¥100,000虚拟货币进行交易练习。可在手机、桌面或任何设备上使用。 "
      }
    },
    {
      img: "./wildoasis.jpg",
      refMore: "#wildoasis",
      refSite: "https://the-wild-oasis-two-murex.vercel.app/",
      title: {
        en: `The Wild Oasis (Web App)`,
        ch: "The Wild Oasis (Web应用程序)"
      },
      vpn: true,
      desc: {
        en: `The Wild Oasis is a web application designed for hotel administrators to manage the hotel. Features include a dashboard, and the ability to create, add, update, and delete cabins, as well as check in and check out guests.`,
        ch: "The Wild Oasis 是一个为酒店管理员设计的网络应用程序，用于管理酒店。功能包括仪表盘以及创建、添加、更新和删除小屋，以及办理客人的入住和退房手续。"
      }
    },
    {
      img: "./promis.jpg",
      refMore: "#promis",
      refSite: "https://promischain.com/",
      title: {
        en: `Promis Chain (Company Profile)`,
        ch: "Promis Chain (公司简介)"
      },
      vpn: true,
      desc: {
        en: `This website was developed using fundamental HTML, CSS, and JavaScript. It serves as a company profile site, showcasing the company’s products, and services. Responsive on any devices`,
        ch: "该网站使用基础的 HTML、CSS 和 JavaScript 开发。它作为公司简介网站，展示了公司的产品和服务。适用于任何设备的响应式设计。"
      }
    },
  ]
}

export const stacks = [
  {
    name: "JavaScript",
    path: "./js.svg"
  },
  {
    name: "Vite",
    path: "./vite.svg"
  },
  {
    name: "react",
    path: "./react.svg"
  },
  {
    name: "tailwindCSS",
    path: "./tailwindcss.svg"
  },
  {
    name: "gsap",
    path: "./gsap.svg"
  },
  {
    name: "React Router",
    path: "./router.svg"
  },
  {
    name: "React Query",
    path: "./query.svg"
  },
  {
    name: "redux",
    path: "./redux.svg"
  },
  {
    name: "React Hook Form",
    path: "./form.svg"
  },
  {
    name: "Axios",
    path: "./axios.svg"
  },
]

export const details = {
  desc: {
    en: "Here are the things I learned while working on this project:",
    ch: "在这个项目中我学到的东西如下："
  },
  details: [
    {
      color: "border-rose-700 bg-rose-50",
      logo: "bookling",
      github: "https://github.com/FrederickAurelio/Bookling",
      list: {
        en: [
          "Learned how to set up and deploy both the website and backend on a VPS.",
          "Collaborated with backend developers to integrate functionality and consume APIs.", "Managed user authentication manually.",
          "Designed system features collaboratively, including liking/disliking books, viewing user profiles, and displaying user posts.",
          "Implemented infinite scroll using Infinite Query in React Query.",
          "Handled HTTP requests using Axios."],
        ch: [
          "学习了如何在VPS上设置和部署网站及后台",
          "与后台开发人员合作集成功能并使用API。",
          "手动管理用户认证。",
          "协同设计系统功能，包括喜欢/不喜欢书籍、查看用户资料以及显示用户帖子。",
          "使用React Query中的无限查询实现无限滚动。",
          "使用Axios处理HTTP请求。"]
      }
    },
    {
      color: "border-emerald-700 bg-emerald-50",
      logo: "fxtrade",
      github: "https://github.com/FrederickAurelio/FXTrade",
      list: {
        en: [
          "Animated landing page with GSAP.",
          "Implemented responsive design across various platforms using Tailwind CSS, becoming familiar with it",
          "Learned how to use LeanCloud backend services.",
          "Managed chart data with limited multiple fetching data API.",
          "Represented data using third-party chart libraries.",
          "Performed calculations involving large sets of numbers."
        ],
        ch: [
          "使用GSAP实现动画登陆页。",
          "使用Tailwind CSS在各种平台上实现响应式设计，并熟悉其使用。",
          "学习使用LeanCloud后端服务。",
          "使用有限的多重数据获取API管理图表数据。",
          "使用第三方图表库展示数据。",
          "进行涉及大量数据的计算。"
        ]
      }
    },
    {
      color: "border-indigo-700 bg-indigo-50",
      logo: "wildoasis",
      github: "https://github.com/FrederickAurelio/Realworld-React-Project",
      list: {
        en: [
          "Built the application using Vite and React.",
          "Managed remote state with React Query.",
          "Utilized React Hook Form for handling form inputs and sending data to APIs.",
          "Implemented React Router for application page navigation.",
          "Applied the Compound Component Pattern for improved component reusability.",
          "Used React Error Boundary to handle rendering errors.",
          "Managed dates with date-fns."
        ],
        ch: [
          "使用Vite和React构建了应用程序。",
          "使用React Query管理远程状态。",
          "利用React Hook Form处理表单输入并将数据发送到API。",
          "实现了React Router用于应用程序页面导航。",
          "应用了复合组件模式以提高组件的可重用性。",
          "使用React Error Boundary处理渲染错误。",
          "使用date-fns管理日期。"
        ]
      }
    },
    {
      color: "border-stone-800 bg-stone-200",
      logo: "promis",
      github: "https://github.com/FrederickAurelio",
      list: {
        en: [
          "Implemented responsive design to ensure compatibility across various platforms.",
          "Developed the landing page using fundamental HTML, CSS, and JavaScript.",
          "Collaborated with teams to understand project requirements and design specifications.",
        ],
        ch: [
          "实现了响应式设计以确保在各种平台上的兼容性。",
          "使用基础的HTML、CSS和JavaScript开发了登陆页。",
          "与团队合作以理解项目需求和设计规范。",
        ]
      }
    },
  ]
}