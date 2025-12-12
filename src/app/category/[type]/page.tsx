import CategoryPage from '@/components/CategoryPage';
import { categoriesData } from '@/data/categoriesData';
import type { CategoryType } from '@/types';

interface PageProps {
    params: Promise<{
        type: string;
    }>;
}

export async function generateStaticParams() {
    return [
        { type: 'creator' },
        { type: 'builder' },
        { type: 'investor' },
        { type: 'connector' },
    ];
}

export default async function Category({ params }: PageProps) {
    const { type } = await params;
    const categoryType = type as CategoryType;

    // Validate category type
    if (!['creator', 'builder', 'investor', 'connector'].includes(categoryType)) {
        return <div>Category not found</div>;
    }

    return <CategoryPage type={categoryType} />;
}
