function validAnagram(str1,str2){
    let str1Entries = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let st of str1) {
        str1Entries[st] = (str1Entries[st] || 0 ) +1;
    }
    for(let i =0; i < str2.length ;i++) {
        let lookup = str2[i];
        if(!str1Entries[lookup]) {
            return false
        } else {
            str1Entries[lookup] -= 1
        }
    }
    return true

  }

  console.log(validAnagram('', ''))
  console.log(  validAnagram('aaz', 'zza') )
  console.log(  validAnagram('anagram', 'nagaram') )
  console.log(  validAnagram("rat","car") )
  console.log(  validAnagram('awesome', 'awesom'))
  console.log(  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))
  console.log(validAnagram('qwerty', 'qeywrt'))
  console.log(  validAnagram('texttwisttime', 'timetwisttext'))
  
// true
// false
// true
// false
// false
// false
// true
// true