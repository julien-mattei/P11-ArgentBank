import TransactionInfo from "./TransactionInfo"

function Transaction () {
    const infoTransaction = [
        {
            "date":"10/03/2023",
            "description":"Golden Sun Bakery",
            "amount":"$350",
            "balance":"$1000",
            "type":"Electronic",
            "category":"Food",
            "note":"lorem ipsum"
        },
        {
            "date":"10/03/2023",
            "description":"Golden Sun Bakery",
            "amount":"$350",
            "balance":"$1000",
            "type":"Electronic",
            "category":"Food",
            "note":"lorem ipsum"
        },
        {
            "date":"10/03/2023",
            "description":"Golden Sun Bakery",
            "amount":"$350",
            "balance":"$1000",
            "type":"Electronic",
            "category":"Food",
            "note":"lorem ipsum"
        }
]

    return<div className="transaction">
            <div className="transaction-header">
            <span>Date</span>
            <span>Description</span>
            <span>Amount</span>
            <span>Balance</span>
            <span></span>
        </div>
           <TransactionInfo data={infoTransaction} />
    </div>
}

export default Transaction