'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set('category', newCategory);
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>
  );
}