const mainCharacter = "Max";
const specialDay = "birthday"; 

const numbers = {
    birthDate: 21, 
    billAmount: 10, 
    leftBillAmount: 50, 
}; 

const people = ["Andrea", "Charlie", "Donald"];         
const peopleListWithComa = people.map(people => " " + people); 

const author = {
    title: "Dr.",
    firstName: "Donald",
    lastName: "Stoltz",
    city: "Philadelphia",
    state: "Pennsylvania"
}; 

document.body.innerHTML = `
    <h1>${numbers.birthDate} apples from ${mainCharacter}</h1>
    <h2>That’s how ${peopleListWithComa} celebrated ${mainCharacter}’s Bday.</h2>
    <p>
        When my grandson, ${mainCharacter}, told his mother, ${people[0]}, to donate any check she would give him for his ${numbers.birthDate}st ${specialDay}, ${people[0]} got an idea. She handed ${mainCharacter}’s brother ${people[1]} a video camera. Then she took out ${numbers.birthDate} $${numbers.billAmount} bills from the bank and bought ${numbers.birthDate} apples at the supermarket. 
    </p>
    <p>
        When they spotted a homeless man, ${people[0]} told him, “Today is my son ${mainCharacter}’s ${numbers.birthDate}st ${specialDay}, and he asked me to give a gift to someone to help him celebrate.” She handed the man a $${numbers.billAmount} bill and an apple. The man smiled into the camera and announced, “Happy ${specialDay}, ${mainCharacter}!” 
    </p>
    <p>
        Soon, they passed out their booty to men and women waiting in line at a soup kitchen. In a unified chorus, they wished ${mainCharacter}, “Happy ${specialDay}!” 
    </p>
    <p>
        At a pizza parlor, ${people[0]} left $${numbers.leftBillAmount} and told the owners to feed the hungry. “Happy ${specialDay}, ${mainCharacter}!” they shouted. 
    </p>
    <p>
        With one last $${numbers.billAmount} bill and apple, they stopped at ${people[0]}’s sister’s office. Unable to contain her laughter or her tears, she bellowed into the camera, “Happy ${specialDay}, ${mainCharacter}!” 
    </p>
    <p>
        — ${author.title} ${author.firstName} ${author.lastName}, ${author.city}, ${author.state}
    </p>
`;