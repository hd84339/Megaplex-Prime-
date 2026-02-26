export default function Overview({ data }) {
    return (
        <section id="overview" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">Project Overview</h2>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        A New Standard of Living
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="prose prose-lg text-gray-600">
                            <p className="leading-relaxed">
                                {data?.description || 'Welcome to our premier residential project. Experience luxury living with modern amenities tailored to your lifestyle needs.'}
                            </p>
                        </div>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={data?.imageUrl || "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"}
                            alt="Interior"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
                    </div>                </div>
            </div>
        </section>
    );
}
