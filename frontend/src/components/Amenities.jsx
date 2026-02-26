import { Check } from 'lucide-react';

export default function Amenities({ data }) {
    const amenities = data?.length > 0 ? data : [
        { title: "Swimming Pool", description: "Olympic size swimming pool with temperature control." },
        { title: "Gymnasium", description: "State-of-the-art fitness center with personal trainers." },
        { title: "Clubhouse", description: "Exclusive clubhouse for residents." }
    ];

    return (
        <section id="amenities" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">World-Class Facilities</h2>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Premium Amenities
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {amenities.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-1 transition-transform border border-gray-100">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                <Check className="h-6 w-6 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
