export default function CategoriasLoading() {
  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="h-1 w-12 bg-brand/30 rounded mb-4" />
            <div className="h-12 w-2/3 bg-white/10 rounded-lg mb-4 animate-pulse" />
            <div className="h-6 w-4/5 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border p-6 animate-pulse">
                <div className="w-12 h-12 bg-gray-100 rounded-xl mb-4" />
                <div className="h-6 w-3/4 bg-gray-100 rounded mb-2" />
                <div className="h-4 w-full bg-gray-50 rounded mb-1" />
                <div className="h-4 w-2/3 bg-gray-50 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
