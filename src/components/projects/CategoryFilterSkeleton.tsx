export default function CategoryFilterSkeleton() {
  return (
    <div className="mb-6 mt-12 flex items-center justify-center gap-6">
      <div className="animate-pulse-fast mr-8 h-4 w-12 bg-gray-300" />
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className="animate-pulse-fast h-4 w-32 bg-gray-300" />
      ))}
    </div>
  );
}
