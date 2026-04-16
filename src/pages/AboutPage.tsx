import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
      <title>关于我 | 网络技术博客</title>
      <meta name="description" content="资深网络工程师张三，专注数通、云网络与网络安全，分享企业级网络架构设计与运维实战经验。" />
      </Helmet>

      <div className={styles.page}>
      <h1 className={styles.pageTitle}>关于我</h1>
      <div className={styles.aboutContent}>
      <p>👋 你好，我是张三，一名资深网络工程师。</p>
      <p>拥有4年大厂网络运维经验，精通数通设备、云网络架构、网络安全与故障排查。</p>
      <p>这个博客沉淀我的项目经验、技术干货与学习心得，助力网络技术从业者快速成长。</p>
      <p>✉️ 联系我：zhang.san@example.com</p>
      </div>
      </div>
    </>
  );
};

export default AboutPage;