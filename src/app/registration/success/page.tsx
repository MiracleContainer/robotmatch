import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegistrationSuccess() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">报名成功！</h1>
          <p className="text-xl text-center text-muted-foreground mb-6 max-w-2xl">
            您的报名信息已提交成功，我们的工作人员将在3个工作日内审核您的申请。
          </p>
          
          <div className="bg-card p-8 rounded-2xl shadow-lg w-full mb-12">
            <h2 className="text-xl font-bold mb-6 text-center">下一步</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">检查邮箱</h3>
                <p className="text-sm text-muted-foreground">我们将发送确认邮件到您登记的邮箱，请注意查收</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">上传作品计划</h3>
                <p className="text-sm text-muted-foreground">通过邮件中的链接上传您的作品设计计划书</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">关注比赛通知</h3>
                <p className="text-sm text-muted-foreground">我们将通过邮件和短信告知您比赛的重要时间节点</p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-6 mb-10 w-full">
            <h3 className="font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              重要提示
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>请确保您提交的身份信息真实有效，否则可能影响参赛资格</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>参赛作品计划书提交截止日期为2025年4月30日</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>如需修改报名信息，请联系我们的客服团队</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              返回首页
            </Link>
            <Link
              href="#"
              className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              下载参赛指南
            </Link>
          </div>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
} 