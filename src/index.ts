const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

function letterPosition(char: string, letters: string) {
    return letters.indexOf(char.toLowerCase());
}

export function createSecret() {}

export function encrypt(char: string, secret: string) {
    const cipher: string[] = [];

    char.split('').forEach(element => {
        const positionInAlphabet = letterPosition(element, alphabet);

        cipher.push(secret[positionInAlphabet]);
    });

    return cipher.join('');
}

export function decrypt(cipher: string, secret: string) {}
