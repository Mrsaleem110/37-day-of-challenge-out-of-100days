// *Question 111:* Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// *Explain & TIP:* Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(12));
console.log(categorizeAge(19));
console.log(categorizeAge(21));
