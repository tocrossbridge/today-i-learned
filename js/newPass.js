function newPassword(a, b) {
    // Write your code here
    let newPass = []      
    if(a && b != ''){
        for(var i = 0; i < a.length; i++){
            for(var i = 0; i < b.length; i++){

                let tempA = a.charAt(i)
                let tempB = b.charAt(i)
                if(tempA != ' '){ newPass += tempA }
                if(tempB != ' '){ newPass += tempB }
            }
        }
    }
    console.log(newPass)
}



newPassword('hackerrank', 'mountain')