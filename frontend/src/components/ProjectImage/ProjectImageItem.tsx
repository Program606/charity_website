export function ProjectImageItem() {
  return (
    <>

        <div className="w-[350px] flex flex-col items-center gap-4 m-4">
          <div className="w-full h-100 overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1697479521733-9626b6e84297?w=800&q=80&auto=format"
              alt="Colonias Reading Project"
            />
          </div>
          <p className="text-sm text-gray-500">Project</p>
          <h2 className="text-lg font-semibold">Colonias Reading Project</h2>
        </div>

    </>
  );
}
