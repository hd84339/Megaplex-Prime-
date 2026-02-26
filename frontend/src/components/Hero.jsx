import { ArrowRight } from 'lucide-react';

export default function Hero({ data }) {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
            <div className="absolute inset-0 z-0">
                <img
                    src={data?.imageUrl || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"}
                    alt="Luxury Home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm border border-amber-200">
                    Premium Residence
                </span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
                    {data?.title || 'Discover Your'} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                        Dream Home
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
                    {data?.subtitle || 'Experience the pinnacle of luxury living with our exclusive collection of premium residences.'}
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#overview" className="group flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-amber-600 hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20">
                        Explore Project
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
}
