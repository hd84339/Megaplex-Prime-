// Using fixed credentials as requested
export const login = (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "1234") {
        return res.json({ success: true, message: "Login successful" });
    }

    return res.status(401).json({ success: false, message: "Invalid credentials" });
};
