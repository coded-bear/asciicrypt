const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function fyShuffle(arr: string[]) {
    let i = arr.length;

    while (--i > 0) {
        const randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }

    return arr;
}

export function createSecret() {
    return fyShuffle(alphabet.split('')).join('');
}

export function encrypt(char: string, secret: string) {
    return char
        .split('')
        .map(element => secret[alphabet.indexOf(element.toLowerCase())])
        .join('');
}

export function decrypt(char: string, secret: string) {
    return char
        .split('')
        .map(element => alphabet[secret.indexOf(element.toLowerCase())])
        .join('');
}

export default { createSecret, encrypt, decrypt };
