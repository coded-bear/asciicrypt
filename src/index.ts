const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

function letterPosition(char: string, letters: string): number {
    return letters.indexOf(char.toLowerCase());
}

export function createSecret() {}

export function encrypt(char: string, secret: string): string {
    const arr: string[] = [];

    char.split('').forEach((element: string) => {
        const position = letterPosition(element, alphabet);

        arr.push(secret[position]);
    });

    return arr.join('');
}

export function decrypt(cipher: string, secret: string): string {
    const arr: string[] = [];

    cipher.split('').forEach((element: string) => {
        const position = letterPosition(element, secret);

        arr.push(alphabet[position]);
    });

    return arr.join('');
}
