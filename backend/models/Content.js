import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    hero: {
        title: { type: String, default: "Premium Real Estate" },
        subtitle: { type: String, default: "Find Your Perfect Dream Home" },
        imageUrl: { type: String, default: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" },
    },
    overview: {
        description: { type: String, default: "Welcome to our premier residential project. Experience luxury living with modern amenities." },
        imageUrl: { type: String, default: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
    },
    connectivity: {
        description: { type: String, default: "Strategically located with excellent connectivity to major business hubs, schools, and hospitals." },
    },
    amenities: [
        {
            title: String,
            description: String,
        },
    ],
    about: {
        description: { type: String, default: "We are a leading real estate developer committed to delivering high-quality residential and commercial spaces." },
    },
    construction: {
        status: { type: String, default: "Ongoing" },
    },
    faqs: [
        {
            question: String,
            answer: String,
        },
    ],
});

export default mongoose.model("Content", contentSchema);
