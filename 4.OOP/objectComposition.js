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

function createFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer))
}
function createFullStackDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer), canBuildUI(developer), canDeployApp(developer));    
}

const createFrontEndDeveloper = createFrontEndDeveloper("Dimas");
createFrontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
frontEndDeveloper.