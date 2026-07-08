exports.uploadFile = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }

       res.json({
    success: true,
    filename: req.file.filename,
    originalName: req.file.originalname
});

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};
