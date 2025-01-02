console.log("Promises");

const delayedMessage = (message, delay = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
};

const runScript = async () => {
    const message = await delayedMessage("I am a delayed message");
    console.log(message);
    console.log("What order will I fire off?");
};

runScript();
