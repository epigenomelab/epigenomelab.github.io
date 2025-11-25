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
            {"Engineering the genome to advance biology and health"}
          </p>

          {/* Principal Investigator */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Principal Investigator</h2>

            <div className="border border-border rounded-lg p-6 lg:p-8 bg-card">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-lg bg-muted flex items-center justify-center">
                    <img
                      src="/mirangkim.png"
                      alt="Professor"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    김미랑 교수 (Professor Mirang Kim)
                  </h3>

                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <GraduationCap className="h-4 w-4" />
                    <span>Ph.D. in Molecular Biology</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {"UST와 한국생명공학연구원.."}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a
                        href="mailto:mirang@kribb.re.kr"
                        className="text-primary hover:underline"
                      >
                        mirang@kribb.re.kr
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold mb-3">{"Our Research Interest"}</h4>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Epigenetics & DNA Methylation"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Liver Diseases & Metabolic Disorders"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Stem Cells & Cellular Development"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    {"Cancer Biology & Disease Mechanisms"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lab Photo */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Lab Members</h2>
            <div className="rounded-lg overflow-hidden border border-border">
              <img src="/team.jpg" alt="Team Photo" className="w-full h-auto" />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              {"Epigenome Lab 연구진 단체 사진 (2024)"}
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 lg:p-8 border border-border rounded-lg bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4">{"Contact Us"}</h2>
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
