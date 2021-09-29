const calculateBirthyear = (age) => {
    if(isNaN(age)){
        throw TypeError('Age is not a number')
    }
    const currentYear = new Date().getFullYear();
    return currentYear -age;
}

module.exports = calculateBirthyear;