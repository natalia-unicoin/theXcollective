// Type definitions for TheXCollective project

export interface BentoGridItem {
    title: string;
    subtitle: string;
    description?: string;
    size: 'large' | 'tall' | 'wide' | 'small';
    image?: string;
    color?: string;
    theme: 'dark' | 'light';
}

export interface CarouselItem {
    title: string;
    quote: string;
    author: string;
    image: string;
}

export interface Tier {
    name: string;
    price: string;
    features: string[];
}

export interface Step {
    title: string;
    description: string;
}

export interface CategoryData {
    id: string;
    title: string;
    headline: string;
    description: string;
    image: string;
    color: string;
    textColor: string;
    bgColor: string;
    heroVideo: string;
    scrollText: string[];
    bentoGrid: BentoGridItem[];
    carousel: CarouselItem[];
    tiers: Tier[];
    longDescription?: string;
    benefits: string[];
    steps?: Step[];
}

export interface CategoriesData {
    creator: CategoryData;
    builder: CategoryData;
    investor: CategoryData;
    connector: CategoryData;
}

export type CategoryType = 'creator' | 'builder' | 'investor' | 'connector';

// Modal Context Types
export interface ModalContextType {
    isJoinModalOpen: boolean;
    isManifestoOpen: boolean;
    openJoinModal: () => void;
    closeJoinModal: () => void;
    openManifesto: () => void;
    closeManifesto: () => void;
}
