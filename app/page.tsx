"use client"

import { useState, useEffect } from "react"
import { MapPin, Heart, Camera, ChevronLeft, ChevronRight, ChevronDown, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WeddingInvitation() {
  const [currentPhoto, setCurrentPhoto] = useState(1)
  const totalPhotos = 6
  const [groomCollapsed, setGroomCollapsed] = useState(false)
  const [brideCollapsed, setBrideCollapsed] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* First Page - Fixed Behind (z-index lower) */}
      <div
        className="fixed inset-0 z-10 flex items-start justify-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full px-4">
          {/* House-shaped Card - Much Taller */}
          <div
            className="pt-12 px-8 pb-32 relative min-h-[80vh] max-w-sm mx-auto"
            style={{
              backgroundImage: "url('/background.png')",
              backgroundSize: 'cover',
              backgroundPosition: "center",
            }}>

            {/* Candle Icon */}
            <div className="text-center mb-12">
              <div className="w-12 h-12 mx-auto mb-4 relative">
                <div className="w-2 h-8 bg-amber-200 mx-auto rounded-full"></div>
                <div className="w-4 h-4 bg-orange-400 rounded-full mx-auto -mt-2 relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-light">Wedding Invitation</p>
            </div>

            {/* Main Invitation Text */}
            <div className="text-center mb-12 space-y-3">
              <p className="text-gray-700 leading-relaxed text-base">도원과 선민의 결혼식에</p>
              <p className="text-gray-700 leading-relaxed text-base">소중한 분들을 초대합니다.</p>
            </div>

            {/* Date */}
            <div className="text-center mb-16">
              <p className="text-lg font-medium text-gray-800">24.10.15.SAT</p>
            </div>

            {/* Simple Arrow at bottom */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="text-gray-400 text-2xl">^</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push content down - 더 큰 여백으로 2번 페이지 시작 위치 조정 */}
      <div className="h-[35vh]"></div>

      {/* Second Page and Beyond - Scrollable In Front (z-index higher) */}
      <div className="relative z-20">
        <div className="max-w-sm mx-auto">
          {/* Photo Section */}
          <div className="bg-white px-8 pt-8 pb-8 border border-gray-200">
            {/* Couple Photo */}
            <div className="mb-8">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="신랑신부 사진"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Hearts */}
            <div className="text-center mb-6">
              <div className="text-xl text-gray-400 mb-4" style={{ fontFamily: "cursive" }}>
                ♡ ♡ ♡
              </div>
            </div>

            {/* Message */}
            <div className="text-center mb-8 space-y-2">
              <p className="text-sm text-gray-600">저희 두 사람, 하나가 되어</p>
              <p className="text-sm text-gray-600">함께 걸어갈 앞날을 약속합니다.</p>
              <p className="text-sm text-gray-600">소중한 분들의 따뜻한 사랑과</p>
              <p className="text-sm text-gray-600">축복을 주세요.</p>
            </div>

            {/* Divider */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            {/* Names */}
            <div className="text-center mb-8">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">신랑측 • 김○○ 의 아들 김진혜</p>
                <p className="text-sm text-gray-600">신부측 • 박○○ 의 딸 박은정</p>
              </div>
            </div>

            {/* Wedding Details */}
            <div className="text-center mb-8 space-y-2">
              <p className="text-sm text-gray-700 font-medium">2024년 10월 15일 토요일 오후 12시</p>
              <p className="text-sm text-gray-600">청구 웨딩홀</p>
            </div>

            {/* Divider */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            {/* Gallery Section */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <Camera className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">Moment of love</p>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=280&width=280"
                    alt={`커플 사진 ${currentPhoto}`}
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setCurrentPhoto(Math.max(1, currentPhoto - 1))}
                    className="p-2"
                    disabled={currentPhoto === 1}
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                  </button>

                  <span className="text-sm text-gray-500">
                    {currentPhoto}/{totalPhotos}
                  </span>

                  <button
                    onClick={() => setCurrentPhoto(Math.min(totalPhotos, currentPhoto + 1))}
                    className="p-2"
                    disabled={currentPhoto === totalPhotos}
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            {/* Heart Transfer Section */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <div className="text-2xl mb-2">👉</div>
                <p className="text-sm text-gray-600">마음 전하실 곳</p>
              </div>

              <div className="space-y-4">
                {/* 신랑측 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setGroomCollapsed(!groomCollapsed)}
                    className="w-full bg-gray-100 px-4 py-3 flex justify-between items-center"
                  >
                    <span className="text-sm font-medium text-gray-700">신랑측</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${groomCollapsed ? "rotate-180" : ""}`}
                    />
                  </button>

                  {groomCollapsed && (
                    <div className="bg-white p-4 space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-800">신랑 장진혜</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600">카카오뱅크 0000-11-000000</p>
                          <button className="text-xs text-gray-500 border border-gray-300 px-2 py-1 rounded">
                            <Copy className="w-3 h-3 inline mr-1" />
                            복사하기
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-800">아버지 장이름</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600">농협 111-11-111111</p>
                          <button className="text-xs text-gray-500 border border-gray-300 px-2 py-1 rounded">
                            <Copy className="w-3 h-3 inline mr-1" />
                            복사하기
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-800">어머니 김이름</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600">하나은행 0000-000-0000000</p>
                          <button className="text-xs text-gray-500 border border-gray-300 px-2 py-1 rounded">
                            <Copy className="w-3 h-3 inline mr-1" />
                            복사하기
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 신부측 */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setBrideCollapsed(!brideCollapsed)}
                    className="w-full bg-yellow-100 px-4 py-3 flex justify-between items-center"
                  >
                    <span className="text-sm font-medium text-gray-700">신부측</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${brideCollapsed ? "rotate-180" : ""}`}
                    />
                  </button>

                  {brideCollapsed && (
                    <div className="bg-white p-4 space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-800">신부 조은정</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600">토스뱅크 0000-5555-0000</p>
                          <button className="text-xs text-gray-500 border border-gray-300 px-2 py-1 rounded">
                            <Copy className="w-3 h-3 inline mr-1" />
                            복사하기
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-800">아버지 조이름</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600">농협 000-00-0000000</p>
                          <button className="text-xs text-gray-500 border border-gray-300 px-2 py-1 rounded">
                            <Copy className="w-3 h-3 inline mr-1" />
                            복사하기
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-800">어머니 장이름</p>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-600">농협 000-00-0000000</p>
                          <button className="text-xs text-gray-500 border border-gray-300 px-2 py-1 rounded">
                            <Copy className="w-3 h-3 inline mr-1" />
                            복사하기
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            {/* Congratulations Message */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <div className="text-2xl mb-2">✉️</div>
                <p className="text-sm text-gray-600">축하의 글</p>
              </div>

              <div className="text-center space-y-2 mb-6">
                <p className="text-sm text-gray-700">참석이 어려우신 분들께서는</p>
                <p className="text-sm text-gray-700">( 축하 메시지로 마음을 전해 주세요 )</p>
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-8">
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-400" />
              </div>

              <div className="flex space-x-2 mb-4">
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  네이버 지도로 보기
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  카카오맵으로 보기
                </Button>
              </div>
            </div>

            {/* Location Details */}
            <div className="mb-8 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-800 mb-2">웨딩홀</h4>
                <p className="text-sm text-gray-600">청구웨딩홀 3층 청구홀</p>
                <p className="text-sm text-gray-600">서울시 중구 을지로 청구빌딩에서 웨딩홀까지의 이용법</p>
                <p className="text-sm text-gray-600">안내드립니다.</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-800 mb-2">지하철</h4>
                <p className="text-sm text-gray-600">[2호선] 을지로입구역 2번 출구 도보 3분 거리 100m</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-800 mb-2">버스</h4>
                <p className="text-sm text-gray-600">간선버스 파란 노선(간선버선 파란 노선 정류장 - 2번</p>
                <p className="text-sm text-gray-600">내리시면 바로 201번지, 도보 3분거리 200m</p>
              </div>
            </div>

            {/* Final Heart */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-pink-400 fill-current" />
              </div>
              <p className="text-xs text-gray-500">10.707</p>
            </div>

            {/* Share Button */}
            <div className="text-center">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full py-3 mb-4">
                카카오톡으로 공유하기
              </Button>

              <Button variant="outline" className="w-full rounded-full py-3">
                URL 링크 복사하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
