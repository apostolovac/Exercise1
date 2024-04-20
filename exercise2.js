// Membership eligibility checker for a local sports club.
/*
Junior membership: Ages 10 to 17 (inclusive)
Adult membership: Ages 18 to 64 (inclusive)
Senior membership: Ages 65 and above
*/ 
const juniorMembership_min_age = 10;
const juniorMembership_max_age = 17;
const adultMembership_min_age = 18;
const adultMembership_max_age = 64;
const seniorMembership_age = 65;

let age = 50; 

if (age >=juniorMembership_min_age && age <=juniorMembership_max_age) {
    console.log("Junior membership")
}else if (age >= adultMembership_min_age && age <= adultMembership_max_age){
    console.log("Adult membership")
}else if (age >= seniorMembership_age) {
    console.log("Senior membership")
}else {
    console.log("Not eligible for membership")
}
