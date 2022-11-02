import ac from '../src/index';

test('createSecret works correctly', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const secret = ac.createSecret();

    const sortedSecret = secret.split('').sort().join('');

    expect(alphabet === sortedSecret).toBeTruthy();
});

test('encryption works correctly', () => {
    const char = 'sausage';
    const secret = ac.createSecret();
    const encrypted = ac.encrypt(char, secret);

    let worksCorrectly = true;

    encrypted.split('').forEach(element => {
        if (
            char.split('').findIndex(elem => elem === element) === -1 &&
            secret.split('').findIndex(elem => elem === element) === -1
        ) {
            worksCorrectly = false;
        }
    });

    expect(encrypted.length === char.length && worksCorrectly).toBeTruthy();
});

test('decryption works correctly', () => {
    const char = 'sausage';
    const secret = ac.createSecret();
    const encrypted = ac.encrypt(char, secret);
    const decrypted = ac.decrypt(encrypted, secret);

    expect(decrypted === char).toBeTruthy();
});
