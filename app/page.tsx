import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dna } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">Epigenome Lab</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {"유전체학과 후성유전학 연구를 통해 생명의 근본적인 메커니즘을 탐구하고 있습니다."}
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Dna className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">{"연구 분야"}</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Epigenome Lab은 후성유전학적 조절 메커니즘과 유전자 발현의 관계를 연구합니다. 우리는 DNA 메틸화, 히스톤 변형, 염색질 구조 변화가 세포 분화, 발달, 질병 발생에 미치는 영향을 규명하고 있습니다."
                }
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "특히 암, 대사 질환, 신경 퇴행성 질환에서의 후성유전학적 변화를 집중적으로 탐구하며, 차세대 시퀀싱 기술과 생물정보학을 활용한 통합적 연구를 수행합니다."
                }
              </p>
              <div className="pt-4">
                <Button asChild variant="default" size="lg" className="group">
                  <Link href="/research">
                    {"자세히 보기"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/professional-scientist-portrait.png"
                alt="Principal Investigator"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">{"연구실장 소개"}</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {
                    "mirang kim"
                  }
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {"열정적인 멘토링과 창의적인 연구 환경 조성을 통해 차세대 과학자 양성에 힘쓰고 있습니다."}
                </p>
              </div>
              <div className="pt-4">
                <Button asChild variant="outline" size="lg" className="group bg-transparent">
                  <Link href="/team">
                    {"팀 구성원 보기"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">{"우리가 찾는 인재"}</h2>
            <div className="space-y-6 mb-10">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{"열정적인 연구자"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"과학에 대한 깊은 호기심과 새로운 발견에 대한 열정을 가진 분을 환영합니다."}
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{"협력적인 팀 플레이어"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"다양한 배경의 연구자들과 효과적으로 소통하고 협력할 수 있는 능력을 중요시합니다."}
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{"창의적인 문제 해결자"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"복잡한 과학적 문제에 대해 창의적이고 체계적으로 접근할 수 있는 분을 찾습니다."}
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/contact">{"지원하기"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
