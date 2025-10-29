const prom = new Promise (
    (resolve, reject) => {
        setTimeout (() => {
                console.log("After 2 seconds");
            },
            2
        );
        resolve;
    }
);
