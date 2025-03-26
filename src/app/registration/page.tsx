"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 定义报名类型
type ParticipantType = "individual" | "team" | "";
type RegistrationType = "chinese" | "international" | "";

export default function Registration() {
  // 状态管理
  const [step, setStep] = useState(1);
  const [participantType, setParticipantType] = useState<ParticipantType>("");
  const [registrationType, setRegistrationType] = useState<RegistrationType>("");

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      // 根据注册类型跳转到不同的认证页面
      if (registrationType === "chinese") {
        setStep(3); // 中国公民实名认证
      } else if (registrationType === "international") {
        setStep(4); // 国际参赛者护照认证
      }
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero区域 */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="报名背景"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            className="opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            2025<span className="text-primary"> 国际机器人大赛报名</span>
          </h1>
          <p className="text-xl max-w-3xl mb-10">
            欢迎加入全球顶尖的机器人竞技盛会，展示您的创新技术与卓越才能
          </p>
          <div className="w-full max-w-md">
            <div className="flex justify-between items-center mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      step >= i ? "bg-primary text-white" : "bg-background/20 text-white"
                    }`}
                  >
                    {i}
                  </div>
                  <span className="text-sm">
                    {i === 1 ? "基本信息" : i === 2 ? "参赛者类型" : "身份认证"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* 报名表单区域 */}
      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 1 && (
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">选择参赛类型</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div 
                    className={`bg-card p-6 border-2 rounded-xl flex flex-col items-center text-center cursor-pointer transition-all ${
                      participantType === "individual" 
                        ? "border-primary shadow-md" 
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setParticipantType("individual")}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">个人参赛</h3>
                    <p className="text-muted-foreground">适合单人参与的项目，展示个人技术与创造力</p>
                  </div>
                  
                  <div 
                    className={`bg-card p-6 border-2 rounded-xl flex flex-col items-center text-center cursor-pointer transition-all ${
                      participantType === "team" 
                        ? "border-primary shadow-md" 
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setParticipantType("team")}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">团队参赛</h3>
                    <p className="text-muted-foreground">适合2-5人团队参与的复杂项目，展现团队协作与综合能力</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors disabled:bg-muted disabled:text-muted-foreground"
                    disabled={!participantType}
                  >
                    下一步
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {step === 2 && (
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">选择身份类型</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div 
                    className={`bg-card p-6 border-2 rounded-xl flex flex-col items-center text-center cursor-pointer transition-all ${
                      registrationType === "chinese" 
                        ? "border-primary shadow-md" 
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setRegistrationType("chinese")}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">中国公民</h3>
                    <p className="text-muted-foreground">需要进行实名认证，使用中国居民身份证</p>
                  </div>
                  
                  <div 
                    className={`bg-card p-6 border-2 rounded-xl flex flex-col items-center text-center cursor-pointer transition-all ${
                      registrationType === "international" 
                        ? "border-primary shadow-md" 
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setRegistrationType("international")}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">国际参赛者</h3>
                    <p className="text-muted-foreground">需要进行护照认证，使用有效的国际护照</p>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button 
                    type="button" 
                    className="px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors"
                    onClick={() => setStep(1)}
                  >
                    上一步
                  </button>
                  <button 
                    type="submit" 
                    className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors disabled:bg-muted disabled:text-muted-foreground"
                    disabled={!registrationType}
                  >
                    下一步
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {step === 3 && (
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">中国公民身份认证</h2>
              <form>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">姓名</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="请输入您的真实姓名"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">身份证号码</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="请输入18位身份证号码"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">手机号码</label>
                    <div className="flex">
                      <span className="px-4 py-3 rounded-l-lg border border-r-0 border-input bg-muted text-muted-foreground">+86</span>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-r-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="请输入手机号码"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">上传身份证正反面</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <div className="mb-4 flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">上传身份证正面照片</p>
                      </div>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                        <div className="mb-4 flex justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">上传身份证背面照片</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-primary/10 p-4 mb-6">
                    <p className="text-sm text-muted-foreground">身份认证信息仅用于验证参赛资格，我们将严格保护您的个人隐私。</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      type="button" 
                      className="px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      上一步
                    </button>
                    <Link
                      href="/registration/success"
                      className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      提交认证
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          {step === 4 && (
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">国际参赛者护照认证</h2>
              <form>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Passport Number</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your passport number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Country of Issue</label>
                      <select 
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Select country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        <option value="jp">Japan</option>
                        <option value="kr">South Korea</option>
                        <option value="sg">Singapore</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <div className="flex">
                        <select className="px-2 py-3 rounded-l-lg border border-r-0 border-input bg-muted">
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+81">+81</option>
                          <option value="+61">+61</option>
                          <option value="+65">+65</option>
                        </select>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-r-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Passport Photo Page</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <div className="mb-4 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground">Drag and drop your passport photo page, or click to upload</p>
                      <p className="text-xs text-muted-foreground mt-2">Supported formats: JPG, PNG, PDF (Max size: 5MB)</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-primary/10 p-4 mb-6">
                    <p className="text-sm text-muted-foreground">Your passport information will only be used to verify your eligibility for participation. We strictly protect your personal privacy.</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <button 
                      type="button" 
                      className="px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </button>
                    <Link
                      href="/registration/success"
                      className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Submit Verification
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-2">需要帮助? 联系我们的支持团队</p>
            <p className="text-primary">contact@robocom.com | +86 133-1234-5678</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 