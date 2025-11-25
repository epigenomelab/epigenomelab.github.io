import { Navigation } from "@/components/navigation"

const researchAreas = [
  {
    title: "Chromatin Remodeling",
    description:
      "크로마틴 구조 변화와 유전자 발현 조절의 메커니즘을 연구합니다. 히스톤 변형과 DNA 메틸화 패턴의 역할을 분석하여 세포 분화와 발달 과정을 이해합니다.",
  },
  {
    title: "Epigenetic Inheritance",
    description:
      "세대 간 후성유전 정보의 전달 메커니즘을 탐구합니다. 환경적 요인이 후성유전체에 미치는 영향과 이것이 다음 세대로 전달되는 과정을 연구합니다.",
  },
  {
    title: "Cancer Epigenetics",
    description:
      "암 발생 및 진행 과정에서 후성유전학적 변화의 역할을 연구합니다. 암 특이적 DNA 메틸화 패턴을 분석하여 새로운 진단 및 치료 마커를 개발합니다.",
  },
  {
    title: "Single-Cell Epigenomics",
    description:
      "단일 세포 수준에서 후성유전체 분석 기술을 활용합니다. 세포 이질성과 분화 경로를 이해하기 위한 고해상도 epigenome mapping을 수행합니다.",
  },
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {"우리 연구실은 후성유전학과 유전체학의 다양한 분야에서 혁신적인 연구를 수행하고 있습니다."}
          </p>

          <div className="space-y-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 lg:p-8 bg-card hover:border-primary/50 transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 lg:p-8 border border-border rounded-lg bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4">{"연구 방법론 및 기술"}</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{"Next-generation sequencing (NGS)"}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{"ChIP-seq, ATAC-seq, RNA-seq"}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{"Whole genome bisulfite sequencing (WGBS)"}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{"Single-cell multi-omics analysis"}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{"Computational epigenomics and machine learning"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
