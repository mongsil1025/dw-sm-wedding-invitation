"use client"

import { useState } from "react"
import { Calendar, MapPin, Phone, Heart, Gift, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function WeddingInvitation() {
  const [currentSection, setCurrentSection] = useState(0)

  const weddingDate = new Date("2024-10-15T14:00:00")
  const now = new Date()
  const timeLeft = weddingDate.getTime() - now.getTime()
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24))

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Main Invitation Section */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 text-center">
            {/* Candle Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 mx-auto mb-2 relative">
                <div className="w-2 h-8 bg-amber-200 mx-auto rounded-full"></div>
                <div className="w-4 h-4 bg-orange-400 rounded-full mx-auto -mt-2 relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-light">Wedding Invitation</p>
            </div>

            {/* Main Text */}
            <div className="mb-8 space-y-2">
              <p className="text-gray-700 leading-relaxed">진혜과 은정의 결혼식에</p>
              <p className="text-gray-700 leading-relaxed">소중한 분들을 초대합니다.</p>
            </div>

            {/* Date */}
            <div className="mb-8">
              <p className="text-lg font-medium text-gray-800">24.10.15.SAT</p>
            </div>

            {/* Couple Photo */}
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/couple-photo.jpg"
                  alt="신랑신부 사진"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Signature */}
            <div className="mb-6">
              <div className="text-2xl font-light text-gray-600 mb-4" style={{ fontFamily: "cursive" }}>
                ♡ ♡ ♡
              </div>
              <p className="text-sm text-gray-600 mb-2">처의 두 사람, 하나가 되어</p>
              <div className="flex justify-center space-x-8 text-lg">
                <span className="text-gray-700">개</span>
                <span className="text-gray-700">고</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-8">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">아래로 스크롤해주세요</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Wedding Details Section */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-rose-500" />
              <h2 className="text-2xl font-light text-gray-800 mb-2">Wedding Day</h2>
              <p className="text-gray-600">결혼식 정보</p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">날짜</h3>
                <p className="text-gray-600">2024년 10월 15일 토요일</p>
                <p className="text-gray-600">오후 2시</p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">장소</h3>
                <p className="text-gray-600">○○웨딩홀</p>
                <p className="text-gray-600">서울시 강남구 ○○동 123-45</p>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-2">D-Day</h3>
                <p className="text-2xl font-bold text-rose-500">
                  {daysLeft > 0 ? `D-${daysLeft}` : daysLeft === 0 ? "D-Day" : "결혼했습니다!"}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                <MapPin className="w-4 h-4 mr-2" />
                길찾기
              </Button>
              <Button variant="outline" className="border-rose-500 text-rose-500 hover:bg-rose-50">
                <Calendar className="w-4 h-4 mr-2" />
                캘린더 저장
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Family Information Section */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Heart className="w-8 h-8 mx-auto mb-4 text-rose-500" />
              <h2 className="text-2xl font-light text-gray-800 mb-2">Family</h2>
              <p className="text-gray-600">가족 소개</p>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-800 mb-4">신랑측</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">아버지 김○○</p>
                  <p className="text-gray-600">어머니 이○○</p>
                  <p className="text-gray-600">
                    의 아들 <span className="font-medium text-gray-800">김개</span>
                  </p>
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <Button size="sm" variant="outline" className="text-xs">
                    <Phone className="w-3 h-3 mr-1" />
                    신랑에게 연락
                  </Button>
                </div>
              </div>

              <div className="border-t pt-8">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">신부측</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">아버지 박○○</p>
                    <p className="text-gray-600">어머니 최○○</p>
                    <p className="text-gray-600">
                      의 딸 <span className="font-medium text-gray-800">박고</span>
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center space-x-4">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Phone className="w-3 h-3 mr-1" />
                      신부에게 연락
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Gallery Section */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Camera className="w-8 h-8 mx-auto mb-4 text-rose-500" />
              <h2 className="text-2xl font-light text-gray-800 mb-2">Gallery</h2>
              <p className="text-gray-600">우리의 추억</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-rose-400" />
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">더 많은 사진 보기</Button>
          </CardContent>
        </Card>
      </section>

      {/* Congratulations Section */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-sm bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Gift className="w-8 h-8 mx-auto mb-4 text-rose-500" />
              <h2 className="text-2xl font-light text-gray-800 mb-2">Congratulations</h2>
              <p className="text-gray-600">축하 인사</p>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-700 leading-relaxed mb-4">
                  저희 두 사람의 새로운 시작을
                  <br />
                  축복해 주시는 모든 분들께
                  <br />
                  진심으로 감사드립니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  앞으로도 많은 사랑과
                  <br />
                  격려 부탁드립니다.
                </p>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">축하 메시지 남기기</Button>
                <Button variant="outline" className="w-full border-rose-500 text-rose-500 hover:bg-rose-50">
                  마음 전하기
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                2024년 10월 15일
                <br />개 ♡ 고
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
