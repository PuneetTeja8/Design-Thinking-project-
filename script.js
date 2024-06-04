function calculateAmount() {
    const item = document.getElementById('item').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    let rate = 0;

    switch (item) {
        case 'plastic-bottle':
            rate = 5;
            break;
        case 'glass':
            rate = 3;
            break;
        case 'coke-tin':
            rate = 1;
            break;
        case 'plastic-cover':
            rate = 8; 
            break;
        case 'cardboard':
            rate = 5;
            break;
        case 'paper':
            rate = 6;
            break;
        default:
            rate = 0;
    }
    const amount = rate * quantity;
    document.getElementById('amount').textContent = `${amount} Rupees`;
}
