// DESIGN an application that collects invocies from different companies, and calulate the
// total amount for a particular month using SPREAD and REST operators.

const invoices=[
    {
        companyName: "Jivan Fertilizers",
        amt: 8000
    },
    {
        companyName: "Kaka Pharmacies",
        amt: 2000
    },
    {
        companyName: "SRK's Mega HUB",
        amt: 10000
    }
]

const calcInvo=(...invoices)=>{
    let ans=invoices.reduce((total,ele)=>total+ele.amt,0);
    return ans;
}

console.log(calcInvo(...invoices));