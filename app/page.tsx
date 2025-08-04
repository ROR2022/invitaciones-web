import { 
  HeroSection, 
  InteractiveInvitationSection, 
  PricingSection, 
  ComparisonTable, 
  CTASection, 
  Footer 
} from "@/components/landing"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div className="flex justify-center">
        {/* TODO: Add a button to the catalog page */}
        <Link 
        className="bg-blue-500 text-white px-4 py-2 rounded-md my-6 hover:bg-blue-600 transition-colors"
        href="/catalog">Ver Catálogo</Link>
      </div>
      <InteractiveInvitationSection />
      <PricingSection />
      <ComparisonTable />
      <CTASection />
      <Footer />
    </div>
  )
}
