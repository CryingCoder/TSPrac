export{}
interface Mountain
{
    Name: string;
    Height: number;
}

let mountains: Mountain[] = [   
    {Name: "Kilimanjaro", Height: 19341},
    {Name: "Everest", Height: 29029},
    {Name: "Denali", Height: 20310}];

function findNameOfTallestMountain(mountain:Mountain[]):string
{
    let maxValue:number = 0;
    let tallestName:string = "";
    mountain.forEach((m:Mountain) => 
    {
        if (m.Height > maxValue)
        {
            maxValue = m.Height;
            tallestName = m.Name.valueOf[maxValue];
        }        
    });  
    return tallestName;
}

let mountainName:string = (findNameOfTallestMountain(mountains));
console.log(mountainName);