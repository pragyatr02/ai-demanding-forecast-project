const { exec } = require("child_process");

const runPrediction = () => {
    return new Promise((resolve, reject) => {
        exec(
            "python python-ai/predict.py",
            { cwd: process.cwd() },
            (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(stdout);
            }
        );
    });
};

module.exports = runPrediction;
