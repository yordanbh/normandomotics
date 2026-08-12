export default function ProductosLoading() {
  return (
    <>
      <section className="pt-32 pb-12 bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="h-1 w-12 bg-brand/30 rounded mb-4" />
            <div className="h-12 w-2/3 bg-white/10 rounded-lg mb-4 animate-pulse" />
            <div className="h-6 w-full bg-white/5 rounded mb-2 animate-pulse" />
            <div className="h-6 w-4/5 bg-white/5 rounded mb-8 animate-pulse" />
            <div className="h-12 w-full max-w-xl bg-white/5 rounded-lg animate-pulse" />
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-gray-100" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-20 bg-gray-100 rounded" />
                  <div className="h-6 w-4/5 bg-gray-100 rounded" />
                  <div className="h-4 w-full bg-gray-50 rounded" />
                  <div className="h-4 w-3/5 bg-gray-50 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
