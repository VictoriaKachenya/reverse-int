module.exports = function reverse (n) {
    const reverse = n => {
        const str      = "" + Math.abs(n);
        const reversed = str.split("")
                        .reverse()
                        .join("");
        const num      = +reversed;
        return (n < 0 ? -1 : 1) * num;
    }
}
