"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type TicketTier = "standard" | "premium" | "vip" | "group";

type Competition = {
  id: string;
  name: string;
  chineseName: string;
  date: string;
  location: string;
  description: string;
};

type TicketInfo = {
  id: TicketTier;
  name: string;
  chineseName: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  recommended?: boolean;
};

export default function TicketsPage() {
  const [selectedTier, setSelectedTier] = useState<TicketTier>("standard");
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [quantity, setQuantity] = useState(1);

  const competitions: Competition[] = [
    {
      id: "roborace2025",
      name: "International Robotics Race 2025",
      chineseName: "2025国际机器人大赛",
      date: "2025年8月8日",
      location: "北京鸟巢体育馆",
      description: "全球顶尖机器人赛车手的巅峰对决，展示人工智能与机械工程的极致创新"
    },
    {
      id: "robosoccer2025",
      name: "Global Robotic Soccer Championship 2025",
      chineseName: "2025全球机器人足球锦标赛",
      date: "2025年9月15日",
      location: "冰丝带",
      description: "AI驱动的机器人足球队伍，演绎科技与体育的完美融合"
    },
    {
      id: "robodrone2025",
      name: "Drone Innovation Challenge 2025",
      chineseName: "2025无人机创新挑战赛",
      date: "2025年10月22日",
      location: "冰丝带",
      description: "无人机技术的前沿盛会，展示最新的飞行控制与自主导航技术"
    }
  ];

  const ticketTiers: TicketInfo[] = [
    {
      id: "standard",
      name: "Standard Pass",
      chineseName: "标准票",
      price: 399,
      originalPrice: 499,
      description: "适合普通观众，提供基本观赛体验",
      features: [
        "赛事全天观赛权限",
        "可进入普通观众区",
        "官方赛事节目单",
        "大赛纪念徽章"
      ]
    },
    {
      id: "premium",
      name: "Premium Pass",
      chineseName: "高级票",
      price: 799,
      originalPrice: 999,
      description: "升级观赛体验，获得更多福利",
      features: [
        "赛事全天观赛权限",
        "优先进场通道",
        "高级看台座位",
        "官方赛事节目单",
        "大赛纪念徽章及T恤",
        "现场技术讲座参与权"
      ],
      recommended: true
    },
    {
      id: "vip",
      name: "VIP Pass",
      chineseName: "贵宾票",
      price: 1999,
      description: "尊享观赛体验，贵宾专属服务",
      features: [
        "赛事全天VIP观赛权限",
        "VIP专用入场通道",
        "VIP看台最佳位置",
        "官方纪念品豪华套装",
        "赛后与参赛团队交流机会",
        "VIP休息室使用权",
        "餐饮服务"
      ]
    },
    {
      id: "group",
      name: "Group Pass",
      chineseName: "团体票",
      price: 3599,
      description: "团队观赛的最佳选择，适合5人团体",
      features: [
        "5人团队套票（高级票）",
        "团队专属接待服务",
        "优先进场通道",
        "高级看台座位（团队连座）",
        "官方赛事纪念品套装",
        "赛事技术资料完整版"
      ]
    }
  ];

  const selectedTicket = ticketTiers.find(ticket => ticket.id === selectedTier);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const totalPrice = selectedTicket ? selectedTicket.price * quantity : 0;
  const originalTotalPrice = selectedTicket && selectedTicket.originalPrice 
    ? selectedTicket.originalPrice * quantity 
    : undefined;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero区域 */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="门票购买背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            2025<span className="text-primary"> 科技赛事门票</span>
          </h1>
          <p className="text-xl max-w-3xl mb-10">
            立即购买门票，亲临现场感受科技创新的视觉盛宴
          </p>
          <div className="bg-black/50 backdrop-blur-sm py-4 px-6 rounded-xl">
            <p className="text-lg mb-2 font-semibold">2025科技赛事系列</p>
            <p className="text-base">多场景、多维度的科技盛会</p>
          </div>
        </div>
      </section>
      
      {/* 赛事选择区域 */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">选择您要参加的赛事</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              探索2025年最前沿的科技赛事，选择您感兴趣的赛事
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitions.map((competition) => (
              <div 
                key={competition.id}
                className={`bg-card rounded-xl overflow-hidden shadow-lg transition-all cursor-pointer ${
                  selectedCompetition?.id === competition.id 
                    ? 'ring-2 ring-primary transform scale-[1.02]' 
                    : 'hover:shadow-xl hover:scale-[1.01]'
                }`}
                onClick={() => setSelectedCompetition(competition)}
              >
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-primary">{competition.chineseName}</h3>
                    <p className="text-sm text-muted-foreground">{competition.name}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center text-sm mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {competition.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {competition.location}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {competition.description}
                  </p>
                  
                  <button
                    onClick={() => setSelectedCompetition(competition)}
                    className={`w-full py-2 px-4 rounded-full text-sm font-medium ${
                      selectedCompetition?.id === competition.id
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    } transition-colors`}
                  >
                    {selectedCompetition?.id === competition.id ? "已选择" : "选择此赛事"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 票种选择区域 */}
      {selectedCompetition && (
        <section className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">选择您的门票类型</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                为{selectedCompetition.chineseName}选择合适的门票
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ticketTiers.map((ticket) => (
                <div 
                  key={ticket.id}
                  className={`bg-card rounded-xl overflow-hidden shadow-lg transition-all ${
                    selectedTier === ticket.id 
                      ? 'ring-2 ring-primary transform scale-[1.02]' 
                      : 'hover:shadow-xl hover:scale-[1.01]'
                  }`}
                >
                  {ticket.recommended && (
                    <div className="bg-primary text-white text-center py-1 text-sm font-semibold">
                      推荐选择
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{ticket.chineseName}</h3>
                        <p className="text-sm text-muted-foreground">{ticket.name}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">¥{ticket.price}</div>
                        {ticket.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            ¥{ticket.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {ticket.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {ticket.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => setSelectedTier(ticket.id)}
                      className={`w-full py-2 px-4 rounded-full text-sm font-medium ${
                        selectedTier === ticket.id
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary hover:bg-primary/20"
                      } transition-colors`}
                    >
                      {selectedTier === ticket.id ? "已选择" : "选择此票种"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* 订单详情 */}
      {selectedTicket && selectedCompetition && (
        <section className="bg-muted/30 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-lg">
              <div className="bg-primary/10 p-4 border-b border-border">
                <h3 className="text-xl font-bold">订单详情</h3>
              </div>
              <div className="p-6">
                <div className="flex flex-col mb-6">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">{selectedCompetition.chineseName}</h4>
                    <p className="text-sm text-muted-foreground">{selectedCompetition.date} | {selectedCompetition.location}</p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div>
                      <h4 className="font-semibold mb-1">{selectedTicket.chineseName} ({selectedTicket.name})</h4>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-sm text-muted-foreground">单价: ¥{selectedTicket.price}</p>
                      {selectedTicket.originalPrice && (
                        <p className="text-xs text-muted-foreground line-through">原价: ¥{selectedTicket.originalPrice}</p>
                      )}
                    </div>
                  </div>
                
                  <div className="border-t border-border pt-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <label htmlFor="quantity" className="font-medium">数量:</label>
                      <div className="flex items-center">
                        <button 
                          onClick={() => handleQuantityChange(quantity - 1)}
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 disabled:opacity-50"
                          disabled={quantity <= 1}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <input
                          id="quantity"
                          type="number"
                          min="1"
                          max="10"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                          className="w-12 text-center mx-2 py-1 bg-transparent border-none focus:outline-none"
                        />
                        <button 
                          onClick={() => handleQuantityChange(quantity + 1)}
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 disabled:opacity-50"
                          disabled={quantity >= 10}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {selectedTicket.id === 'group' && (
                      <div className="bg-primary/5 p-4 rounded-lg mb-4 text-sm">
                        <p className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          团体票包含5人入场，您选择的数量为团体票的套数
                        </p>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-lg font-semibold mb-2">
                      <span>总计:</span>
                      <span>¥{totalPrice.toLocaleString()}</span>
                    </div>
                    
                    {originalTotalPrice && (
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>节省:</span>
                        <span>¥{(originalTotalPrice - totalPrice).toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <div className="bg-primary/10 p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        购票须知
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>门票一经售出，不支持退换</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>请在购票后保存电子票，入场时需出示</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>每张票仅限一人使用，儿童也需购票</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>活动当天请提前1小时到场，以防拥堵</span>
                        </li>
                      </ul>
                    </div>
                    
                    <button
                      className="w-full py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    >
                      立即购票
                    </button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      点击&ldquo;立即购票&rdquo;，表示您已阅读并同意<Link href="#" className="text-primary hover:underline">《购票协议》</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ区域 */}
      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">常见问题</h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">如何获取电子票?</h3>
              <p className="text-muted-foreground">完成购票后，电子票将发送至您提供的邮箱。您也可以在个人中心查看和下载电子票。</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">可以现场购票吗?</h3>
              <p className="text-muted-foreground">为了确保您的观赛体验，我们强烈建议提前在线购票。现场可能会有少量票务出售，但无法保证有您想要的票种。</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">有学生票或其他优惠票种吗?</h3>
              <p className="text-muted-foreground">我们为学生、老年人和残障人士提供标准票85折优惠。请在购票时选择相应票种并准备好相关证件在入场时验证。</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">场内有餐饮提供吗?</h3>
              <p className="text-muted-foreground">场内设有多个餐饮区，提供各类食品和饮料。VIP票持有者可使用专属餐饮服务。</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 联系信息 */}
      <section className="bg-muted/30 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold mb-4">需要帮助?</h2>
          <p className="text-muted-foreground mb-6">如果您有任何关于门票的疑问，请联系我们的客服团队</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="mailto:tickets@robocom.com" className="flex items-center text-primary hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              tickets@robocom.com
            </a>
            <a href="tel:+861312345678" className="flex items-center text-primary hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +86 131-2345-6789
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}