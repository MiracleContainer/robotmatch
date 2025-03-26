"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* 顶部英雄区域 */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="机器人大赛背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white animate-text">
            2025 国际机器人大赛
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 leading-relaxed">
            一场集科技、创新与竞技于一体的全球性机器人盛会，
            汇聚世界顶尖的机器人技术与人才
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/registration"
              className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl"
            >
              立即报名
            </Link>
            <Link
              href="#competition-info"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>

      {/* 快速信息栏 */}
      <section className="bg-primary text-white py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2025年8月8日</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium">北京鸟巢体育馆</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium">预计参赛队伍 200+</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">总奖金池 ¥1,000,000</span>
            </div>
          </div>
        </div>
      </section>

      {/* 页面导航 */}
      <section className="bg-background border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto pb-2 scrollbar-hide">
            <ul className="flex space-x-8">
              <li>
                <a href="#overview" className="text-primary font-medium hover:text-primary/80 transition-colors">赛事概览</a>
              </li>
              <li>
                <a href="#events" className="text-foreground hover:text-primary transition-colors">比赛项目</a>
              </li>
              <li>
                <a href="#schedule" className="text-foreground hover:text-primary transition-colors">赛程安排</a>
              </li>
              <li>
                <a href="#judges" className="text-foreground hover:text-primary transition-colors">评委介绍</a>
              </li>
              <li>
                <a href="#prizes" className="text-foreground hover:text-primary transition-colors">奖项设置</a>
              </li>
              <li>
                <a href="#sponsors" className="text-foreground hover:text-primary transition-colors">赞助商</a>
              </li>
              <li>
                <a href="#faq" className="text-foreground hover:text-primary transition-colors">常见问题</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* 赛事概览 */}
      <section id="overview" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">赛事概览</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              2025国际机器人大赛是面向全球开放的顶级机器人技术竞赛，旨在推动机器人技术创新与应用
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-primary">全球影响力</h3>
              <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
                国际机器人大赛创办于2010年，已成为全球机器人领域最具影响力的赛事之一。大赛汇聚来自30多个国家和地区的顶尖团队，共同探索机器人技术的未来发展方向。
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">技术交流与创新</h3>
              <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
                大赛不仅是一场技术竞赛，更是全球机器人研发者的交流平台。参赛者可以展示最新的研究成果，分享技术见解，促进行业合作与发展。
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">产业链接</h3>
              <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
                大赛吸引了众多知名企业和投资机构的关注，为优秀项目提供商业化发展的机会。历届比赛中，已有超过50个获奖项目成功转化为商业产品。
              </p>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-video relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="机器人比赛"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">世界级赛场</h3>
              <p className="text-muted-foreground">
                北京鸟巢体育馆将为参赛者提供世界一流的比赛场地，配备最先进的技术设施和观赛体验。
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">顶尖参赛者</h3>
              <p className="text-muted-foreground">
                来自全球30多个国家和地区的200+支队伍将参与比赛，包括知名高校、研究机构和科技公司。
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">专业评审</h3>
              <p className="text-muted-foreground">
                由机器人领域的学术专家、行业领袖和知名投资人组成的评审团，确保比赛的专业性和公正性。
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">全球直播</h3>
              <p className="text-muted-foreground">
                大赛将通过全球直播平台向观众呈现，预计在线观看人数将超过500万，线下观众超过5万人。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 比赛项目 */}
      <section id="events" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">比赛项目</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              大赛设置多个比赛项目，涵盖机器人技术的不同领域和应用场景
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 项目1 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border group">
              <div className="relative h-60">
                <Image
                  src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="智能服务机器人"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">智能服务机器人</h3>
                <p className="text-muted-foreground mb-4">
                  设计并开发能够在家庭、商业或公共环境中提供服务的智能机器人，评判标准包括交互体验、功能实用性和智能水平。
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    比赛时长: 3小时
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    团队规模: 2-5人
                  </span>
                </div>
              </div>
            </div>
            
            {/* 项目2 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border group">
              <div className="relative h-60">
                <Image
                  src="https://images.pexels.com/photos/3993372/pexels-photo-3993372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="工业自动化机器人"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">工业自动化机器人</h3>
                <p className="text-muted-foreground mb-4">
                  设计能够高效完成特定工业任务的自动化机器人，重点评估精确度、速度、稳定性和解决复杂问题的能力。
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    比赛时长: 4小时
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    团队规模: 3-6人
                  </span>
                </div>
              </div>
            </div>
            
            {/* 项目3 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border group">
              <div className="relative h-60">
                <Image
                  src="https://images.pexels.com/photos/8566232/pexels-photo-8566232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="自主导航机器人"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">自主导航机器人</h3>
                <p className="text-muted-foreground mb-4">
                  开发能在复杂环境中自主导航的机器人，挑战包括避障、路径规划和环境适应性，适用于救援、探索等场景。
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    比赛时长: 5小时
                  </span>
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    团队规模: 3-5人
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl">
              查看更多比赛项目
            </button>
          </div>
        </div>
      </section>
      
      {/* 赛程安排 */}
      <section id="schedule" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">赛程安排</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              2025国际机器人大赛分为报名、初赛、技术交流及决赛四个阶段
            </p>
          </div>
          
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            {/* 阶段1：报名 */}
            <div className="mb-16 md:mb-0 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-card p-6 rounded-xl shadow-sm border border-border inline-block">
                    <h3 className="text-xl font-bold mb-2 text-primary">报名阶段</h3>
                    <p className="text-lg font-medium mb-3">2025年3月1日 - 5月15日</p>
                    <p className="text-muted-foreground">
                      参赛团队通过官方网站提交报名信息及初步技术方案，组委会将在提交后7个工作日内完成审核并通知结果。
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/2 hidden md:block"></div>
                
                {/* 时间节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg hidden md:flex">
                  1
                </div>
              </div>
            </div>
            
            {/* 阶段2：初赛 */}
            <div className="mb-16 md:mb-0 relative md:mt-32">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 hidden md:block"></div>
                
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                  <div className="bg-card p-6 rounded-xl shadow-sm border border-border inline-block">
                    <h3 className="text-xl font-bold mb-2 text-primary">初赛阶段</h3>
                    <p className="text-lg font-medium mb-3">2025年5月20日 - 6月15日</p>
                    <p className="text-muted-foreground">
                      通过审核的队伍将进入线上初赛环节，提交详细的技术文档、模拟测试视频和原型验证结果，专家评审团将选出前100名队伍进入下一阶段。
                    </p>
                  </div>
                </div>
                
                {/* 时间节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg hidden md:flex">
                  2
                </div>
              </div>
            </div>
            
            {/* 阶段3：技术交流 */}
            <div className="mb-16 md:mb-0 relative md:mt-32">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                  <div className="bg-card p-6 rounded-xl shadow-sm border border-border inline-block">
                    <h3 className="text-xl font-bold mb-2 text-primary">技术交流阶段</h3>
                    <p className="text-lg font-medium mb-3">2025年6月20日 - 7月20日</p>
                    <p className="text-muted-foreground">
                      晋级的队伍将参与为期一个月的在线技术研讨会和辅导课程，与行业专家交流，优化和改进其项目方案。本阶段结束后，将选出30支队伍晋级总决赛。
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/2 hidden md:block"></div>
                
                {/* 时间节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg hidden md:flex">
                  3
                </div>
              </div>
            </div>
            
            {/* 阶段4：总决赛 */}
            <div className="relative md:mt-32">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 hidden md:block"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-card p-6 rounded-xl shadow-sm border border-border inline-block">
                    <h3 className="text-xl font-bold mb-2 text-primary">总决赛</h3>
                    <p className="text-lg font-medium mb-3">2025年8月8日</p>
                    <p className="text-muted-foreground">
                      30支顶尖队伍将汇聚北京鸟巢体育馆，进行现场比赛展示。参赛作品将接受专业评审团的评估和打分，并向公众开放展示。比赛结果将在当天晚上的颁奖典礼上公布。
                    </p>
                  </div>
                </div>
                
                {/* 时间节点 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg hidden md:flex">
                  4
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 flex justify-center">
            <a href="/registration" className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl">
              立即报名参赛
            </a>
          </div>
        </div>
      </section>
      
      {/* 评委介绍 */}
      <section id="judges" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">评委介绍</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我们邀请了机器人领域的顶尖专家、学者和行业领袖组成专业评审团
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 评委1 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border text-center p-6">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="张教授"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">张智能 教授</h3>
              <p className="text-primary font-medium mb-3">清华大学机器人研究中心主任</p>
              <p className="text-muted-foreground mb-4">
                国际知名机器人学专家，在智能机器人领域拥有30年研究经验，发表论文200余篇，获国家科技进步奖5项。
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* 评委2 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border text-center p-6">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="李博士"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">李未来 博士</h3>
              <p className="text-primary font-medium mb-3">科技创新集团首席科学家</p>
              <p className="text-muted-foreground mb-4">
                人工智能和机器人技术专家，曾在美国麻省理工学院担任研究员，领导开发多款获奖机器人产品，拥有国际专利30余项。
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* 评委3 */}
            <div className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border text-center p-6">
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/4064249/pexels-photo-4064249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="王总裁"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">王创新 总裁</h3>
              <p className="text-primary font-medium mb-3">未来投资基金创始人</p>
              <p className="text-muted-foreground mb-4">
                知名风险投资人，专注于机器人与自动化领域投资，曾主导投资20余家机器人领域的创新企业，其中5家已成功上市。
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium">
              查看完整评委名单
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* 奖项设置 */}
      <section id="prizes" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">奖项设置</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              2025国际机器人大赛设置丰厚奖金及多项荣誉，总奖金池高达100万元
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 金奖 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all transform hover:-translate-y-1 relative">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-primary text-white font-bold py-1 right-[-40px] top-[20px] w-[170px] text-center">
                  金奖
                </div>
              </div>
              <div className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">冠军</h3>
                <div className="text-3xl font-bold text-primary mb-4">¥500,000</div>
                <ul className="text-muted-foreground text-left mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    金奖证书及奖杯
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    项目孵化资金支持
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    全球媒体宣传机会
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    与行业投资人对接机会
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 银奖 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all transform hover:-translate-y-1 relative">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-gray-400 text-white font-bold py-1 right-[-40px] top-[20px] w-[170px] text-center">
                  银奖
                </div>
              </div>
              <div className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">亚军</h3>
                <div className="text-3xl font-bold text-primary mb-4">¥300,000</div>
                <ul className="text-muted-foreground text-left mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    银奖证书及奖杯
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    技术开发扶持金
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    行业媒体专访机会
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    投资人路演机会
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 铜奖 */}
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-all transform hover:-translate-y-1 relative">
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute transform rotate-45 bg-amber-700 text-white font-bold py-1 right-[-40px] top-[20px] w-[170px] text-center">
                  铜奖
                </div>
              </div>
              <div className="p-8 text-center">
                <div className="w-24 h-24 bg-amber-700/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">季军</h3>
                <div className="text-3xl font-bold text-primary mb-4">¥100,000</div>
                <ul className="text-muted-foreground text-left mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    铜奖证书及奖杯
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    技术指导与培训
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    产业对接机会
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    全球机器人大会邀请
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                创新技术奖
              </h3>
              <p className="text-muted-foreground mb-3">
                奖励在机器人技术上有突破性创新的项目，奖金¥50,000，并提供技术专利申请支持。
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                商业潜力奖
              </h3>
              <p className="text-muted-foreground mb-3">
                授予具有显著市场应用前景和商业价值的项目，奖金¥50,000，并提供商业孵化资源支持。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 赞助商 */}
      <section id="sponsors" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">赞助商</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              感谢以下合作伙伴对2025国际机器人大赛的大力支持
            </p>
          </div>
          
          <div className="space-y-12">
            {/* 钻石赞助商 */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">钻石赞助商</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background rounded-xl p-6 flex items-center justify-center h-32 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">未来科技集团</div>
                </div>
                <div className="bg-background rounded-xl p-6 flex items-center justify-center h-32 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">智能机器人公司</div>
                </div>
                <div className="bg-background rounded-xl p-6 flex items-center justify-center h-32 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-primary">全球创新基金</div>
                </div>
              </div>
            </div>
            
            {/* 黄金赞助商 */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">黄金赞助商</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-background rounded-xl p-4 flex items-center justify-center h-24 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-xl font-bold">人工智能研究院</div>
                </div>
                <div className="bg-background rounded-xl p-4 flex items-center justify-center h-24 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-xl font-bold">科技创新中心</div>
                </div>
                <div className="bg-background rounded-xl p-4 flex items-center justify-center h-24 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-xl font-bold">自动化系统公司</div>
                </div>
                <div className="bg-background rounded-xl p-4 flex items-center justify-center h-24 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-xl font-bold">智慧城市联盟</div>
                </div>
              </div>
            </div>
            
            {/* 技术支持 */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">技术支持</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-background rounded-xl p-3 flex items-center justify-center h-20 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-lg font-medium">云计算服务</div>
                </div>
                <div className="bg-background rounded-xl p-3 flex items-center justify-center h-20 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-lg font-medium">数据分析平台</div>
                </div>
                <div className="bg-background rounded-xl p-3 flex items-center justify-center h-20 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-lg font-medium">机器学习工具</div>
                </div>
                <div className="bg-background rounded-xl p-3 flex items-center justify-center h-20 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-lg font-medium">传感器技术</div>
                </div>
                <div className="bg-background rounded-xl p-3 flex items-center justify-center h-20 border border-border hover:shadow-md transition-all cursor-pointer">
                  <div className="text-lg font-medium">控制系统</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">成为赞助商</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              通过赞助2025国际机器人大赛，您将获得全球性品牌曝光和与顶尖技术团队合作的机会。
              我们提供多种赞助方案，满足不同企业的需求。
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl">
              了解赞助方案
            </button>
          </div>
        </div>
      </section>
      
      {/* 常见问题 */}
      <section id="faq" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">常见问题</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              关于参赛、报名、赛事规则等常见问题的解答
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3">报名条件是什么？</h3>
              <p className="text-muted-foreground">
                参赛团队可以来自全球各高校、研究机构、企业或个人创业团队，每队人数为2-6人。参赛者年龄不限，但未成年人需要监护人同意。每支队伍需至少有一名队长作为联系人。
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3">比赛使用的机器人有硬件要求吗？</h3>
              <p className="text-muted-foreground">
                参赛机器人需要由参赛队伍自行设计和制作，主要核心部件和算法需要为原创。我们不限制使用的硬件平台和组件，但参赛作品需符合相关安全标准。详细技术规范请查看比赛手册。
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3">如何处理知识产权问题？</h3>
              <p className="text-muted-foreground">
                参赛作品的知识产权归参赛团队所有，但组委会拥有作品的展示和宣传权利。如果作品涉及专利技术，建议参赛团队在比赛前进行专利申请。获奖团队将获得组委会提供的专利申请支持。
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3">国际团队如何参与比赛？</h3>
              <p className="text-muted-foreground">
                我们欢迎全球的参赛者。国际团队可以通过官网在线报名，初赛阶段可远程参与。如晋级决赛，国际团队需前往北京参加现场比赛，组委会将提供签证邀请函支持和部分交通住宿补贴。
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3">比赛的评分标准是什么？</h3>
              <p className="text-muted-foreground">
                评分标准包括技术创新性(40%)、功能实现(30%)、实用价值(20%)以及展示表现(10%)。不同比赛项目可能有特定的评分侧重点，详细评分细则将在比赛手册中公布。
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold mb-3">是否提供参赛资金支持？</h3>
              <p className="text-muted-foreground">
                通过初审的参赛队伍将获得一定的研发经费支持，金额根据项目难度和创新程度而定，一般为5000-20000元。晋级决赛的队伍还将获得额外的研发和差旅补贴。
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">还有其他问题？欢迎联系我们</p>
            <a href="/contact" className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl">
              联系我们
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 