'use client';
import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      {items.map((item, index) => (
        <span key={`${item.href}-${index}`}>
          {index > 0 && <span className="mx-2">/</span>}
          {item.current ? (
            <span className="font-semibold text-gray-800">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:underline text-indigo-600">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}