import { 
  HeroSection, 
  InteractiveInvitationSection, 
  PricingSection, 
  ComparisonTable, 
  CTASection, 
  Footer 
} from "@/components/landing"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <InteractiveInvitationSection />
      <PricingSection />
      <ComparisonTable />
      <CTASection />
      <Footer />
    </div>
  )
}
