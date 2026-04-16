export interface Article {
    id: number;
    title: string;
    date: string;
    author: string;
    summary?: string;
    contentSections: { title: string; text: string; code?: string }[];
    tags: string[];
  }
  
  const articlesData: Article[] = [
    {
      id: 1,
      title: "理解 JavaScript 闭包",
      date: "2026-4-02",
      author: "张三",
      summary: "闭包是JavaScript中最重要的概念之一，本文带你彻底理解闭包原理及应用。",
      contentSections: [
        { title: "什么是闭包？", text: "闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式是在一个函数内部创建另一个函数。" },
        { title: "实际应用场景", text: "闭包常用于模块化、数据私有化、函数柯里化等场景。例如，可以使用闭包创建私有变量：", code: `function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}` }
      ],
      tags: ["JavaScript", "前端"]
    },
    {
      id: 2,
      title: "网络运维技术入门",
      date: "2026-4-15",
      author: "张三",
      summary: "本文为网络运维入门指南，系统介绍了网络运维的核心定义、工作范畴与核心价值，帮助新手快速理解网络运维的基础概念，为后续深入学习网络设备管理、故障排查、安全防护等技能打下基础。",
      contentSections: [
        { title: "什么是网络运维？", text: "网络运维是保障企业网络稳定、安全、高效运行的核心工作，涵盖网络设备管理、故障排查、性能优化、安全防护等全流程，通过系统化运维手段，为业务系统提供可靠的网络支撑" }
      ],
      tags: ["网络运维", "数通", "网络安全"]
    }
  ];
  
  export function getArticles(): Article[] {
    return articlesData;
  }
  
  export function getArticleById(id: number): Article | undefined {
    return articlesData.find(article => article.id === id);
  }