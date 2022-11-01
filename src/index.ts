const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function letterPosition(char: string, letters: string): number {
    return letters.indexOf(char.toLowerCase());
}

export function createSecret() {}

export function encrypt(char: string, secret: string): string {
    const arr: string[] = [];

    char.split('').forEach((element: string) => {
        arr.push(secret[letterPosition(element, alphabet)]);
    });

    return arr.join('');
}

export function decrypt(char: string, secret: string): string {
    const arr: string[] = [];

    char.split('').forEach((element: string) => {
        arr.push(alphabet[letterPosition(element, secret)]);
    });

    return arr.join('');
}
