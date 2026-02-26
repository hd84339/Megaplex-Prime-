import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ({ data }) {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = data?.length > 0 ? data : [
        { question: "What is the possession date?", answer: "The possession will be handed over by Q4 2026." },
        { question: "Are there any hidden charges?", answer: "No, all pricing is transparent as per RERA guidelines." }
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-amber-600 tracking-wide uppercase">Got Questions?</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-amber-200 bg-amber-50/50' : 'border-gray-200 bg-white'}`}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-amber-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
