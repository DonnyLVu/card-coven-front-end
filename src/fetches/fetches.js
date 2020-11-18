import request from 'superagent'

//Adds new deck into SQL back end
//contract requires a deck_name, deck_description, deck_type, and an owner_id
export async function createDeck(newDeck) {
    try {   
        await request
        .post('https://card-coven-back-end-2020.herokuapp.com/api/decks')
        .send(newDeck);

        return;
    } catch (e) {
    throw e;
    }
}