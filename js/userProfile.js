
listOfUsers=[];

userProfile ={
     name:"Mike",
     age: 18,
     userId: 1053,
     userName: "emperor_c",
     password: "julius_caesar123",
     secretQuestion: "who is my most trusted advisor",
     secretAnswer: "brutus",
     mail:"truerulerofrome@rome.it"
};

listOfUsers.push(userProfile)


function addUser(name,age,userId,userName,password,secretQuestion,secretAnswer,mail){
userProfile.name = name;
userProfile.age = age;
userProfile.userId = userId;
userProfile.userName = userName;
userProfile.password = password;
userProfile.secretQuestion = secretQuestion;
userProfile.secretAnswer = secretAnswer;
userProfile.mail = mail;
listOfUsers.push(userProfile)
}

function getPlayer(userId){

    listOfUsers.forEach(userProfile => {
        if(userProfile.userId==userId){
            return userProfile.userName;
        }
        
    });
}

////////////////////////////////////////////// parseInt("5") => 5

