// object composition => Menggabungkan object
class Developer{
    constructor(name){
        this.name = name
    }
    commitChanges(){
        console.log(`Commiting changes to ${this.name}`)
    }
}

function canBuildUI(developer){//developer be instance
    return {
        buildUI: () =>{
            console.log(`Building UI for ${developer.name}`)
        }
    }
}

function canBuildAPI(developer){
    return {
        buildAPI: () =>{
            console.log(`Building API for ${developer.name}`)
        }
    }
}

function canDeployApp(developer){
    return {
        deployApp: () =>{
            console.log(`Deploying App for ${developer.name}`)
        }
    }
}

function CreateFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function CreateBackEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer))
}
function CreateFullStackDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer), canBuildUI(developer), canDeployApp(developer));    
}

const createFrontEndDeveloper = CreateFrontEndDeveloper("Dimas");
createFrontEndDeveloper.commitChanges();
createFrontEndDeveloper.buildUI();
console.log(`is ${createFrontEndDeveloper.name} a developer? ${createFrontEndDeveloper instanceof Developer}`);

const createBackEndDeveloper = CreateBackEndDeveloper("Dimas");
createBackEndDeveloper.commitChanges();
createBackEndDeveloper.buildAPI();
console.log(`is ${createBackEndDeveloper.name} a developer? ${createBackEndDeveloper instanceof Developer}`);

const createFullStackDeveloper = CreateFullStackDeveloper("Dimas");
createFullStackDeveloper.commitChanges();
createFullStackDeveloper.buildAPI();
createFullStackDeveloper.buildUI();
createFullStackDeveloper.deployApp();
console.log(`is ${createFullStackDeveloper.name} a developer? ${createFullStackDeveloper instanceof Developer}`);