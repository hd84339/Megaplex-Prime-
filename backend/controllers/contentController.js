import Content from '../models/Content.js';

export const getContent = async (req, res) => {
    try {
        let content = await Content.findOne();

        // If no content exists yet, create default content
        if (!content) {
            content = await Content.create({
                amenities: [
                    { title: "Swimming Pool", description: "Olympic size swimming pool with temperature control." },
                    { title: "Gymnasium", description: "State-of-the-art fitness center with personal trainers." },
                    { title: "Clubhouse", description: "Exclusive clubhouse for residents." }
                ],
                faqs: [
                    { question: "What is the possession date?", answer: "The possession will be handed over by Q4 2026." },
                    { question: "Are there any hidden charges?", answer: "No, all pricing is transparent as per RERA guidelines." }
                ]
            });
        }

        res.json(content);
    } catch (error) {
        console.error("Error fetching content:", error);
        res.status(500).json({ message: "Server error fetching content" });
    }
};

export const updateContent = async (req, res) => {
    try {
        const updatedData = req.body;
        let content = await Content.findOne();

        if (!content) {
            // Create if it somehow doesn't exist
            content = await Content.create(updatedData);
        } else {
            content = await Content.findOneAndUpdate({}, updatedData, { new: true, runValidators: true });
        }

        res.json(content);
    } catch (error) {
        console.error("Error updating content:", error);
        res.status(500).json({ message: "Server error updating content" });
    }
};
