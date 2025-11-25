import { Navigation } from "@/components/navigation"
import { Mail, GraduationCap } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Team</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {"Epigenome Lab을 이끌어가는 연구진을 소개합니다."}
          </p>

          {/* Principal Investigator */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Principal Investigator</h2>
            <div className="border border-border rounded-lg p-6 lg:p-8 bg-card">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-lg bg-muted flex items-center justify-center">
                    <img
                      src="/professional-scientist-portrait.png"
                      alt="Professor"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">김지훈 교수 (Professor Jihoon Kim)</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span>Ph.D. in Molecular Biology</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "김지훈 교수는 후성유전학 분야의 세계적인 권위자로, 20년 이상 유전체학과 후성유전학 연구를 수행해왔습니다. MIT에서 박사학위를 취득한 후 Harvard Medical School에서 박사후 연구원으로 근무했으며, 현재 100편 이상의 논문을 국제 학술지에 게재했습니다."
                    }
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href="mailto:jihoon.kim@university.edu" className="text-primary hover:underline">
                        jihoon.kim@university.edu
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">{"주요 연구 분야"}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Chromatin Biology"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Epigenetic Regulation"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Cancer Epigenetics"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Computational Biology"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Photo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Lab Members</h2>
            <div className="rounded-lg overflow-hidden border border-border">
              <img src="/research-team-group-photo-laboratory.jpg" alt="Team Photo" className="w-full h-auto" />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">{"Epigenome Lab 연구진 단체 사진 (2024)"}</p>
          </div>

          {/* Research Team */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Research Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold mb-1">{"박민수 (Postdoctoral Researcher)"}</h3>
                <p className="text-sm text-muted-foreground mb-3">{"Ph.D. in Biochemistry"}</p>
                <p className="text-sm text-muted-foreground">{"Single-cell epigenomics, Cancer research"}</p>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold mb-1">{"이수진 (Ph.D. Student)"}</h3>
                <p className="text-sm text-muted-foreground mb-3">{"Molecular Biology"}</p>
                <p className="text-sm text-muted-foreground">{"DNA methylation, Developmental biology"}</p>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold mb-1">{"최영희 (Ph.D. Student)"}</h3>
                <p className="text-sm text-muted-foreground mb-3">{"Bioinformatics"}</p>
                <p className="text-sm text-muted-foreground">{"Computational epigenomics, Machine learning"}</p>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-semibold mb-1">{"정민준 (Research Assistant)"}</h3>
                <p className="text-sm text-muted-foreground mb-3">{"B.S. in Genetics"}</p>
                <p className="text-sm text-muted-foreground">{"Laboratory techniques, Sample preparation"}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 lg:p-8 border border-border rounded-lg bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4">{"함께하고 싶으신가요?"}</h2>
            <p className="text-muted-foreground mb-4">
              {
                "우리 연구실은 항상 열정적인 대학원생과 연구원을 환영합니다. 관심있으신 분은 Contact 페이지를 통해 문의해주세요."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
