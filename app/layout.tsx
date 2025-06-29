import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "도원과 선민의 결혼식에 초대합니다",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/NanumMyeongjo.woff"
          rel="preload"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/NanumBarunGothic.woff"
          rel="preload"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link href="https://hangeul.pstatic.net/hangeul_static/css/NanumSeongSirCe.css" rel="stylesheet"/>
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
