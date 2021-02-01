// Code your solution here


function findMatching(list, string){
    return list.filter(item => 
        item.toLowerCase() === string.toLowerCase()
    );
}

    // 1) returns all drivers that match the passed in name
    // 2) returns matching drivers if case does not match but letters do
    // 3) returns an empty array if there is no match


function fuzzyMatch(list, string) {
    return list.filter(item => 
        !!item.match("^" + string)
    );
}

    // 4) returns a driver if beginning provided letters match
    // 5) does not return drivers if only middle or ending letters match
    // 6) does not return drivers if only middle or ending letters match


function matchName(list, string) {
    return list.filter(item => 
        item.name === string
    );
}

    // 7) accesses the data structure to check if name matches