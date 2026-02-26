import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Amenities from '../components/Amenities';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { getContent } from '../services/api';

export default function Home() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const data = await getContent();
                setContent(data);
            } catch (error) {
                console.error("Failed to load content", error);
            } finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero data={content?.hero} />
            <Overview data={content?.overview} />
            <Amenities data={content?.amenities} />
            <FAQ data={content?.faqs} />
            <Footer />
        </div>
    );
}
