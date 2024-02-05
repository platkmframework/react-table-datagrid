function genunique(length) {
    let result = '';
    const alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const clenght = alphaNumeric.length;
    let counter = 0;
    while (counter < length) {
      result += alphaNumeric.charAt(Math.floor(Math.random() * clenght));
      counter += 1;
    }
    return result;
}