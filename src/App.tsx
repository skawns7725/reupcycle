import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from './data/items';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { GalleryGrid } from './components/GalleryGrid';
import { ItemModal } from './components/ItemModal';
import { BuyBackCalculatorModal } from './components/BuyBackCalculatorModal';
import { MvpShowcaseModal } from './components/MvpShowcaseModal';
import { WorkshopModal } from './components/WorkshopModal';
import { FounderRoadmapModal } from './components/FounderRoadmapModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isBuyBackOpen, setIsBuyBackOpen] = useState(false);
  const [isMvpOpen, setIsMvpOpen] = useState(false);
  const [isWorkshopOpen, setIsWorkshopOpen] = useState(false);
  const [isFounderOpen, setIsFounderOpen] = useState(false);

  // Filter items
  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleScrollToGallery = () => {
    const el = document.getElementById('collection-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col font-sans">
      {/* Top Bar Contract compliant navigation */}
      <Header
        onOpenFounderModal={() => setIsFounderOpen(true)}
        onOpenBuyBackModal={() => setIsBuyBackOpen(true)}
        onOpenWorkshopModal={() => setIsWorkshopOpen(true)}
        onOpenMvpModal={() => setIsMvpOpen(true)}
        onScrollToGallery={handleScrollToGallery}
      />

      <main className="flex-1">
        {/* Hero Section styled after Console9 with brand, headline and categories */}
        <HeroSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenFounderModal={() => setIsFounderOpen(true)}
          onOpenBuyBackModal={() => setIsBuyBackOpen(true)}
          onOpenMvpModal={() => setIsMvpOpen(true)}
          totalCount={filteredItems.length}
        />

        {/* 3-Column Minimalist Architectural Product Grid */}
        <GalleryGrid
          items={filteredItems}
          onSelectItem={(item) => setSelectedItem(item)}
          onOpenBuyBackModal={() => setIsBuyBackOpen(true)}
        />
      </main>

      {/* 4-Column Minimalist Footer */}
      <Footer
        onOpenFounderModal={() => setIsFounderOpen(true)}
        onOpenBuyBackModal={() => setIsBuyBackOpen(true)}
        onOpenWorkshopModal={() => setIsWorkshopOpen(true)}
        onOpenMvpModal={() => setIsMvpOpen(true)}
      />

      {/* Interactive Modals and Drawers */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOpenBuyBackModal={() => {
          setSelectedItem(null);
          setIsBuyBackOpen(true);
        }}
      />

      <BuyBackCalculatorModal
        isOpen={isBuyBackOpen}
        onClose={() => setIsBuyBackOpen(false)}
      />

      <MvpShowcaseModal
        isOpen={isMvpOpen}
        onClose={() => setIsMvpOpen(false)}
      />

      <WorkshopModal
        isOpen={isWorkshopOpen}
        onClose={() => setIsWorkshopOpen(false)}
      />

      <FounderRoadmapModal
        isOpen={isFounderOpen}
        onClose={() => setIsFounderOpen(false)}
        onOpenBuyBackModal={() => {
          setIsFounderOpen(false);
          setIsBuyBackOpen(true);
        }}
        onOpenMvpModal={() => {
          setIsFounderOpen(false);
          setIsMvpOpen(true);
        }}
      />
    </div>
  );
}
