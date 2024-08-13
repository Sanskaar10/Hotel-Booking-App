export const logout = (req, res) => {
    try {
        // Destroy the session
        req.session.destroy(err => {
            if (err) {
                // Handle error in session destruction
                return res.status(500).json({ error: 'Logout failed' });
            }
            
            // Optionally clear any server-side tokens here if necessary
            
            // Clear the session cookie
            res.clearCookie('connect.sid');  // Assuming the session cookie is named 'connect.sid'
            
            // Send success response
            return res.status(200).json({ message: 'Logged out successfully' });
        });
    } catch (e) {
        // Catch any synchronous errors (though req.session.destroy is async)
        return res.status(500).json({
            success: false,
            message: "Logout unsuccessful",
            error: e.message
        });
    }
};
