import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero区域 */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1906&q=80"
            alt="机器人大赛背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            2025<span className="text-primary"> 国际机器人大赛</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-10">
            挑战未来技术，引领创新革命，一场世界级的机器人竞技盛宴
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/registration"
              className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              立即报名
            </Link>
            <Link
              href="/tickets"
              className="px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              购买门票
            </Link>
          </div>
          <div className="mt-12 bg-black/50 backdrop-blur-sm py-4 px-6 rounded-xl">
            <p className="text-lg mb-2 font-semibold">2025年8月8日</p>
            <p className="text-base">北京鸟巢体育馆</p>
          </div>
        </div>
      </section>
      
      {/* 赛事倒计时和数据 */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">200+</p>
              <p className="text-muted-foreground">参赛队伍</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">30+</p>
              <p className="text-muted-foreground">参赛国家和地区</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground">合作企业</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-primary">¥100万</p>
              <p className="text-muted-foreground">总奖金</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 比赛项目 */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">比赛项目</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              多元化的比赛项目，满足不同技术领域的参赛需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="人形机器人"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">人形机器人挑战赛</h3>
                <p className="text-muted-foreground mb-4">
                  测试人形机器人在复杂环境中的灵活性、平衡性和适应能力。
                </p>
                <Link
                  href="/events/humanoid"
                  className="text-primary font-medium hover:underline"
                >
                  了解详情 →
                </Link>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="无人驾驶"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">无人驾驶挑战赛</h3>
                <p className="text-muted-foreground mb-4">
                  无人驾驶车辆在模拟城市环境中完成导航、避障、识别等复杂任务。
                </p>
                <Link
                  href="/events/autonomous"
                  className="text-primary font-medium hover:underline"
                >
                  了解详情 →
                </Link>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="机器人格斗"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">机器人格斗赛</h3>
                <p className="text-muted-foreground mb-4">
                  参赛队伍自主设计的机器人在擂台上进行激烈对抗，考验结构设计和控制策略。
                </p>
                <Link
                  href="/events/combat"
                  className="text-primary font-medium hover:underline"
                >
                  了解详情 →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              查看全部比赛项目
            </Link>
          </div>
        </div>
      </section>
      
      {/* 大赛流程 */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">参赛流程</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              从报名到参赛，我们提供清晰的指引
            </p>
          </div>
          
          <div className="relative">
            {/* 连接线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-primary">报名阶段</h3>
                  <p className="text-muted-foreground">
                    参赛队伍通过官网填写报名表，提交团队信息和参赛项目计划书。
                  </p>
                  <p className="mt-2 text-sm font-medium">2025年3月1日 - 5月15日</p>
                </div>
                <div className="relative z-10 order-1 md:order-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative z-10 order-1">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:text-left order-2">
                  <h3 className="text-xl font-bold mb-2 text-primary">初赛阶段</h3>
                  <p className="text-muted-foreground">
                    专家评审团对参赛作品进行初步评审，选出晋级决赛的队伍。
                  </p>
                  <p className="mt-2 text-sm font-medium">2025年5月20日 - 6月15日</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold mb-2 text-primary">技术交流</h3>
                  <p className="text-muted-foreground">
                    组织线上技术研讨会，邀请行业专家指导，帮助参赛者完善作品。
                  </p>
                  <p className="mt-2 text-sm font-medium">2025年6月20日 - 7月20日</p>
                </div>
                <div className="relative z-10 order-1 md:order-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative z-10 order-1">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:text-left order-2">
                  <h3 className="text-xl font-bold mb-2 text-primary">总决赛</h3>
                  <p className="text-muted-foreground">
                    入围队伍齐聚北京鸟巢体育馆，进行现场比赛，角逐最终奖项。
                  </p>
                  <p className="mt-2 text-sm font-medium">2025年8月8日</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 赞助商 */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">合作伙伴</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              感谢以下企业对机器人大赛的大力支持
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div key={item} className="bg-card p-4 rounded-lg w-full h-24 flex items-center justify-center">
                <div className="text-primary font-bold text-lg">赞助商 {item}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/sponsor"
              className="text-primary hover:underline font-medium"
            >
              了解赞助合作 →
            </Link>
          </div>
        </div>
      </section>
      
      {/* 订阅通讯 */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">订阅最新资讯</h2>
          <p className="max-w-2xl mx-auto mb-8">
            提交您的电子邮箱，获取大赛最新动态和技术资讯
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="您的邮箱地址"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-black"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              订阅
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
