import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">RoboCom</h3>
            <p className="text-muted-foreground text-sm">
              亚太地区最具影响力的机器人竞赛平台，致力于推动机器人技术创新与应用。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="微博"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm6.72 8.08c-.28-.05-.57-.07-.86-.07-1.94 0-3.07 1.03-3.35 1.26-.4.33-.52.7-.48.97.05.28.27.5.55.56.71.14 1.05-.41 1.5-.85.46-.45 1.15-.68 1.74-.68.22 0 .44.03.64.08.64.16 1.07.61 1.22 1.25.08.35.05.7-.08 1.02-.53 1.28-2.19 2.16-3.95 2.31-1.99.18-3.97-.54-4.84-1.76-.07-.09-.08-.2-.1-.31-.02-.09-.04-.19-.05-.29-.1-.94.16-1.88.77-2.69.6-.8 1.46-1.43 2.44-1.79.96-.36 2.02-.51 3.06-.39.07.01.14.02.21.04.7.13 1.4.33 1.91.72.5.39.82.92.87 1.5.05.57-.15 1.14-.49 1.55-.35.41-.8.7-1.29.84-.07.02-.13.04-.2.04-.38.05-.76-.19-.89-.56-.14-.36-.01-.76.27-1.01.03-.03.07-.06.1-.08.16-.13.33-.26.49-.37.15-.1.3-.2.43-.3.15-.12.28-.24.38-.38.1-.15.16-.31.17-.49.01-.18-.04-.35-.14-.5-.2-.32-.43-.61-.74-.84-.3-.23-.65-.38-1.01-.46-.36-.08-.73-.1-1.09-.05-.37.05-.72.16-1.05.33-.33.16-.62.37-.88.62-.27.25-.49.55-.66.87-.16.31-.27.65-.32 1-.05.35-.04.71.03 1.05.07.35.21.69.41.98.6.84 1.8 1.32 3.03 1.23 1.22-.09 2.36-.63 2.99-1.43.1-.13.19-.27.25-.42.07-.15.1-.31.1-.48 0-.02 0-.04-.01-.06-.17-.73-.91-1.25-1.7-1.2-.09 0-.18.01-.27.03-.44.07-.87.23-1.22.49-.35.27-.6.62-.72 1.02-.05.16-.15.29-.29.37-.13.08-.29.11-.44.08-.15-.03-.28-.11-.37-.23-.09-.12-.12-.27-.09-.42.08-.53.35-1.01.75-1.4.4-.38.9-.67 1.43-.82.51-.14 1.08-.18 1.63-.11.55.08 1.08.29 1.51.64.43.34.77.8.93 1.32.16.53.16 1.12-.02 1.66-.18.54-.52 1.02-.97 1.36-.45.34-.98.56-1.54.64-.54.08-1.11.03-1.62-.15-.52-.18-.98-.48-1.32-.88-.33-.4-.55-.88-.63-1.4-.08-.51-.03-1.05.15-1.55.19-.49.49-.93.89-1.26.39-.33.86-.55 1.35-.63.25-.04.5-.05.75-.03.25.02.5.06.74.13.24.07.47.16.67.27.21.12.39.26.55.42.16.17.28.35.37.55.09.2.13.41.13.63 0 .22-.05.43-.13.62-.09.21-.21.39-.37.55-.27.28-.66.56-1.12.79-.03.01-.06.03-.08.04-.01 0-.01 0-.01.01-.04.01-.06.06-.06.11.01.04.05.07.1.07.04 0 .11-.02.2-.04.08-.02.18-.06.28-.1.11-.04.22-.08.32-.13.33-.16.62-.37.87-.61.25-.24.45-.52.59-.83.14-.31.22-.65.21-.99-.01-.33-.09-.66-.24-.95-.33-.66-.96-1.18-1.71-1.43-1.13-.38-2.35-.36-3.35.04-.97.4-1.74.96-2.25 1.64-.51.7-.72 1.46-.62 2.23.01.06.02.11.04.17.01.06.04.11.07.16.48.61 1.4 1.05 2.55.99.94-.05 1.86-.37 2.53-.88.34-.25.61-.56.8-.91.1-.17.19-.36.23-.56.04-.19.04-.39-.01-.57-.05-.18-.14-.35-.28-.48-.14-.13-.32-.22-.51-.27-.19-.05-.39-.06-.59-.03-.2.04-.38.12-.55.22-.16.11-.31.24-.42.4-.12.16-.18.34-.21.54-.02.19.01.39.09.56.04.08.05.17.02.26-.03.09-.09.15-.17.2-.08.04-.17.06-.26.03-.09-.03-.15-.09-.2-.17-.22-.37-.33-.82-.25-1.18.04-.18.11-.38.22-.57.1-.19.24-.38.41-.55.17-.18.37-.33.59-.46.21-.14.44-.24.69-.31.23-.07.48-.11.73-.1.25 0 .49.02.73.08"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="微信"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.718 4.753a7.009 7.009 0 0 0-6.51.433C3.437 6.065 2.431 7.652 2.515 9.18c.08 1.465.956 2.862 2.386 3.654a.923.923 0 0 1 .283.141c.123.086.17.284.146.402l-.072.27c-.23.874-.24.876.42.922.17.007.521.152.739-.069.258-.263.351-.414.576-.646a.145.145 0 0 1 .156-.046 5.995 5.995 0 0 0 1.578.22 2.884 2.884 0 0 1-.146-.705c0-1.857 1.856-3.385 4.16-3.386.144 0 .288.01.43.023-.44-1.603-1.77-3.074-3.434-3.557Z"/>
                  <path d="M13.29 9.108c-1.765 0-3.19 1.042-3.19 2.328 0 .28.045.548.127.798a.93.93 0
                   0 1-.003.01c.099.298.344.510.248.948-.085.38.411.284.576.204.286-.138.366-.267.574-.448a.158.158 0 0 1 .148-.018 3.976 3.976 0 0 0 1.52.301c1.763 0 3.19-1.042 3.19-2.328 0-1.285-1.427-2.327-3.19-2.327Z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="邮箱"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">比赛信息</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  赛事介绍
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  比赛日程
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  比赛规则
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">参与方式</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/registration" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  在线报名
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  门票购买
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  志愿者招募
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  赞助合作
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">
                邮箱: contact@robocom.com
              </li>
              <li className="text-muted-foreground text-sm">
                电话: +86 133-1234-5678
              </li>
              <li className="text-muted-foreground text-sm">
                地址: 北京市朝阳区国家体育场路1号 鸟巢体育馆
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 RoboCom 机器人大赛. 保留所有权利.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              隐私政策
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 