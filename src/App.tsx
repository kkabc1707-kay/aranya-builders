import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { FeaturedProject } from './components/FeaturedProject';
import { AboutSection } from './components/AboutSection';
import { WhyChooseAranya } from './components/WhyChooseAranya';
import { ServicesSection } from './components/ServicesSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceModal } from './components/ServiceModal';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { QuoteModal } from './components/QuoteModal';
import { AboutModal } from './components/AboutModal';

import { PROJECTS_DATA, Project } from './data/projectsData';
import { ServiceItem } from './data/servicesData';

export default function App() {
  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  // Pre-fill parameters for quote modal
  const [quotePrefill, setQuotePrefill] = useState<{
    projectOrService?: string;
    location?: string;
  }>({});

  const handleOpenQuote = (projectOrService?: string, location?: string) => {
    setQuotePrefill({
      projectOrService: projectOrService || '',
      location: location || 'Tirunelveli',
    });
    setIsQuoteOpen(true);
  };

  const handleEstimatorProceed = (details: { type: string; area: number; tier: string; estimate: string }) => {
    setQuotePrefill({
      projectOrService: `${details.type} (${details.tier}) ~ ${details.estimate}`,
      location: 'Tirunelveli',
    });
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] flex flex-col font-sans selection:bg-[#C28A3E] selection:text-white">
      {/* 1. Header / Navigation */}
      <Header
        onOpenQuoteModal={() => handleOpenQuote()}
        onOpenEstimatorModal={() => setIsEstimatorOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero — Full-Screen Cinematic */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        {/* 3. Trust / Numbers Strip */}
        <TrustStrip />

        {/* 4. Featured Project — Large Visual Story */}
        <FeaturedProject
          project={PROJECTS_DATA[0]}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenQuoteModal={() => handleOpenQuote(PROJECTS_DATA[0].title, PROJECTS_DATA[0].location)}
        />

        {/* 5. About Aranya Builders */}
        <AboutSection
          onOpenQuoteModal={() => handleOpenQuote()}
          onOpenQualityModal={() => setIsAboutModalOpen(true)}
        />

        {/* 6. Why Choose Aranya (01 to 06 large numbers) */}
        <WhyChooseAranya />

        {/* 7. Services — Interactive Cards */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenQuoteModal={(serviceName) => handleOpenQuote(serviceName)}
        />

        {/* 8. Construction Process — From Idea To Handover */}
        <ProcessTimeline
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        {/* 9. Projects — Main Portfolio (Masonry/Asymmetric Grid) */}
        <ProjectsPortfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        {/* 11. Testimonials */}
        <TestimonialsSection />

        {/* 12. Service Areas — Interactive Regional Map */}
        <ServiceAreasSection
          onOpenQuoteModal={(district) => handleOpenQuote(undefined, district)}
        />

        {/* 13. Final CTA — Full-Width High-Impact Architectural Banner */}
        <FinalCTA
          onOpenQuoteModal={() => handleOpenQuote()}
        />

        {/* 14. Contact Section */}
        <ContactSection
          initialProjectType={quotePrefill.projectOrService || 'Residential Villa'}
          initialLocation={quotePrefill.location || 'Tirunelveli'}
        />
      </main>

      {/* 15. Premium Footer */}
      <Footer
        onOpenEstimatorModal={() => setIsEstimatorOpen(true)}
        onOpenQuoteModal={() => handleOpenQuote()}
      />

      {/* --- Interactive Modals & Drawers --- */}

      {/* Individual Project Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteModal={(projectName) => handleOpenQuote(projectName)}
      />

      {/* Individual Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={(serviceName) => handleOpenQuote(serviceName)}
      />

      {/* Interactive Construction Budget Estimator Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onProceedToQuote={handleEstimatorProceed}
      />

      {/* Direct Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefillProjectOrService={quotePrefill.projectOrService}
        prefillLocation={quotePrefill.location}
      />

      {/* About & Methodology Modal */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenQuoteModal={() => {
          setIsAboutModalOpen(false);
          handleOpenQuote();
        }}
      />
    </div>
  );
}
