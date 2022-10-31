const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

function letterPosition(char: string, letters: string): number {
    return letters.indexOf(char.toLowerCase());
}

function helper(char: string, char2: string, char3: string) {
    const arr: string[] = [];

    char.split('').forEach((element: string) => {
        const position = letterPosition(element, char2);

        arr.push(char3[position]);
    });

    return arr.join('');
}

export function createSecret() {}

export function encrypt(char: string, secret: string): string {
    return helper(char, alphabet, secret);
}

export function decrypt(char: string, secret: string): string {
    return helper(char, secret, alphabet);
}
