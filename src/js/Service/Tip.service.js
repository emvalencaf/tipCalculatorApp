export class TipService{
    constructor(){}

    calculateTip(bill,nPeople, percent){

        const total = percent / 100 * bill
        const perPerson = total / nPeople

        return {
            total,
            perPerson
        }
    }
}