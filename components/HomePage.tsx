import React from 'react';
import { Hero } from './Hero';
import { CollectionRow } from './CollectionRow';
import { TextBlock } from './TextBlock';
import { SplitBanner } from './SplitBanner';
import { FullWidthBanner } from './FullWidthBanner';
import { ProductCarousel } from './ProductCarousel';
import { FeatureSplit } from './FeatureSplit';
import { HelpGrid } from './HelpGrid';
import { Product } from '../types';

interface HomePageProps {
  onProductClick?: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onProductClick }) => {
  return (
    <main>
      <Hero />
      <CollectionRow />
      <TextBlock />
      <SplitBanner />
      <FullWidthBanner />
      <ProductCarousel onProductClick={onProductClick} />
      
      {/* Soho Home Design Section */}
      <FeatureSplit 
        dark={true}
        reversed={true}
        title="Soho Home Design"
        description="Our interior design team is available to offer help and advice on your next design project. Visit any of our Soho Home Studios to speak with someone, or book a dedicated design consultation online"
        buttonText="Read more"
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Join Soho Friends Section */}
      <FeatureSplit 
        dark={false}
        reversed={false}
        title="Join Soho Friends"
        description="Join Soho Friends and get 15% off full-price products, as well as a further 20% off sale prices and free delivery on small items all year round. Plus, reduced rates on Soho House bedrooms and more."
        buttonText="Find out more"
        image="https://images.unsplash.com/photo-1595877868512-1482834b3e8c?q=80&w=2000&auto=format&fit=crop"
      />

      <HelpGrid />
    </main>
  );
};