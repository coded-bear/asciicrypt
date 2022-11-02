const asciiString = String.fromCharCode(...Array.from({ length: 95 }, (_, i) => i + 32));

function fyShuffle(arr: string[]) {
    let i = arr.length;

    while (--i > 0) {
        const randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }

    return arr;
}

export function createSecret() {
    return fyShuffle(asciiString.split('')).join('');
}

export function encrypt(char: string, secret: string) {
    return char
        .split('')
        .map(element => secret[asciiString.indexOf(element)])
        .join('');
}

export function decrypt(char: string, secret: string) {
    return char
        .split('')
        .map(element => asciiString[secret.indexOf(element)])
        .join('');
}

export default { createSecret, encrypt, decrypt };
