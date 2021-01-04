// string compression
/* 
Example: abaasass
group consecutive occurrence of each character 

If Character only occurs once it is added to the compresses string.  If it occurs consecutive time, the character is added to the string followed by an integer representing the number of consecutive occurrences. Thus the compressed form of the string is "aba2sas2".

- function must return compressed form of passed string. 

Function has one string "message" parameter
*/

function compressedString(str){
    //empty string validator
    let result ='';
    if(str === '') {
      return "Please enter a valid string";
    }
  
    let count = 1;
    for(let i = 0; i < str.length; i++){
      let current = str[i];
      let next = str[i + 1];
  
      if(next === current){
        count++;
      } else if(next !== current){
          if(count > 1){
            result += current + String(count);
            count = 1;
            continue;
          }
        result += current;
        count = 1;
      }
    }
  
    return result;
    //optional lenght validator
    // return result.length < str.length ? result : str;
  }
  
  
  console.log(
    compressedString("abaasass") === "aba2sas2",
    compressedString("larry") === "lar2y",
    compressedString("boooooom") === "bo6m"
  );
  
  console.log(
  compressedString("zoooom"), //zo4m
  compressedString("abaasass"), // aba2sas2
  compressedString("Mississippi") //Mis2is2ip2i
  );
  
  