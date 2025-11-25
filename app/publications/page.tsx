import { Navigation } from "@/components/navigation"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const publications = [
  {
    year: "2024",
    papers: [
      {
        title: "Epigenetic landscape of chromatin remodeling in stem cell differentiation",
        authors: "Kim J, Lee S, Park M, et al.",
        journal: "Nature Genetics",
        volume: "56(3)",
        pages: "234-248",
        doi: "10.1038/ng.xxxx",
      },
      {
        title: "Single-cell epigenomic profiling reveals heterogeneity in cancer progression",
        authors: "Park M, Choi Y, Kim J, et al.",
        journal: "Cell",
        volume: "187(12)",
        pages: "3456-3472",
        doi: "10.1016/j.cell.xxxx",
      },
    ],
  },
  {
    year: "2023",
    papers: [
      {
        title: "DNA methylation dynamics during embryonic development",
        authors: "Lee S, Kim J, Park H, et al.",
        journal: "Science",
        volume: "380(6645)",
        pages: "789-803",
        doi: "10.1126/science.xxxx",
      },
      {
        title: "Computational approaches for analyzing epigenetic modifications",
        authors: "Choi Y, Park M, Lee S, et al.",
        journal: "Genome Biology",
        volume: "24(1)",
        pages: "156",
        doi: "10.1186/s13059-xxx-xxxx-x",
      },
    ],
  },
  {
    year: "2022",
    papers: [
      {
        title: "Histone modifications and their role in gene regulation",
        authors: "Kim J, Park M, Choi Y, et al.",
        journal: "Molecular Cell",
        volume: "82(8)",
        pages: "1567-1582",
        doi: "10.1016/j.molcel.xxxx",
      },
    ],
  },
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {"우리 연구실의 주요 연구 성과와 논문 목록입니다."}
          </p>

          <div className="space-y-12">
            {publications.map((yearGroup) => (
              <div key={yearGroup.year}>
                <h2 className="text-3xl font-bold mb-6 text-primary">{yearGroup.year}</h2>
                <div className="space-y-6">
                  {yearGroup.papers.map((paper, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors"
                    >
                      <h3 className="text-lg font-semibold mb-2 leading-relaxed">{paper.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{paper.authors}</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        <span className="font-medium">{paper.journal}</span>
                        {", "}
                        {paper.volume}, {paper.pages}
                      </p>
                      <Button variant="link" className="h-auto p-0 text-primary" asChild>
                        <a
                          href={`https://doi.org/${paper.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          DOI: {paper.doi}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 lg:p-8 border border-border rounded-lg bg-card">
            <h2 className="text-2xl font-semibold mb-4">{"전체 논문 목록"}</h2>
            <p className="text-muted-foreground mb-4">
              {"전체 논문 목록은 Google Scholar 또는 PubMed에서 확인하실 수 있습니다."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://pubmed.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer">
                  PubMed
                  <ExternalLink className="ml-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
