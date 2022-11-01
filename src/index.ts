const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function fyShuffle(arr: string[]) {
    let i = arr.length;

    while (--i > 0) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }

    return arr;
}

export function createSecret() {
    return fyShuffle(alphabet.split('')).join('');
}

export function encrypt(char: string, secret: string): string {
    const arr: string[] = [];

    char.split('').forEach((element: string) => {
        arr.push(secret[alphabet.indexOf(element.toLowerCase())]);
    });

    return arr.join('');
}

export function decrypt(char: string, secret: string): string {
    const arr: string[] = [];

    char.split('').forEach((element: string) => {
        arr.push(alphabet[secret.indexOf(element.toLowerCase())]);
    });

    return arr.join('');
}

export default { createSecret };
