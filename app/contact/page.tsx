import { Navigation } from "@/components/navigation"
import { Mail, MapPin, Phone, Building } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {"문의사항이 있으시거나 연구실 방문을 원하시면 아래 연락처로 연락주세요."}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-6">{"연락처 정보"}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a
                        href="mailto:jihoon.kim@university.edu"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        jihoon.kim@university.edu
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">{"(김미랑 교수)"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+82-2-1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Lab</h3>
                      <p className="text-muted-foreground">{"한국생명공학연구원"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-6">{"위치"}</h2>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Address</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {"대전광역시 유성구"}
                      <br />
                      {"한국생명공학연구원"}
                      <br />
                      {"Epigenome Lab"}
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-border">
                  <img src="/modern-university-building-exterior.jpg" alt="Lab Location" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Visiting Information */}
          <div className="border border-border rounded-lg p-6 lg:p-8 bg-muted/30">
            <h2 className="text-2xl font-semibold mb-4">{"방문 안내"}</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>{"• 연구실 방문을 원하시면 사전에 이메일로 약속을 잡아주시기 바랍니다."}</p>
              <p>{"• 대학원 진학 상담은 학기 중 매주 수요일 오후 2-5시에 가능합니다."}</p>
              <p>{"• 연구 협력 문의는 이메일로 먼저 연락주시면 상세히 안내드리겠습니다."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
