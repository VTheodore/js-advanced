function manageTickets(input, sortingCriteria) {
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    function comparator(t1, t2) {
        try {
            return t1[sortingCriteria].localeCompare(t2[sortingCriteria]);
        } catch (e) {
            return t1[sortingCriteria] - t2[sortingCriteria];
        }
    }

    const tickets = [];

    input.forEach(line => {
        const [destination, price, status] = line.split('|').filter(arg => arg !== '');

        tickets.push(new Ticket(destination, Number(price), status));
    });

    return tickets.sort(comparator);
}

const res1 = manageTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');

const res2 = manageTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status');

console.log(res1);
console.log(res2);