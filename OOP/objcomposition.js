/*
catatan:
Jika sebuah subclass memiliki properti yang sama dengan subclass lain,
namun tidak terdapat pada superclass, maka dapat dipecahkah dengan teknik "Object Composition"
jika menggunakan pewarisan/inheritance, tidak akan efisien karena harus mengubah kode di 2 tempat jika ada perubahan identitas properti
*/


//SuperClass
class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`);
    }
}

//======================================================================


//Case 1 : Tanpa Object Composition, hanya pewarisan
class FrontEndDeveloper extends Developer {
    BuildUI() {
        console.log(`${this.name} is building UI...`)
    }
}

class BackEndDeveloper extends Developer {
    BuildAPI() {
        console.log(`${this.name} is building API...`);
    }
}

class DevOps extends Developer {
    DeployApps() {
        console.log(`${this.name} is deploying  apps...`)
    }
}

//bagian inilah yg tidak efektif, kode didalamnya dituliskan kembali dari kode sebelumnya
//jika misal buildUI() pada class FrontEnd dirubah namanya, mana pada class fullstack juga harus demikian, itulah yang dikatakan tidak efisien.
class FullStackDeveloper extends Developer {
    BuildUI() {
        console.log(`${this.name} is building UI...`)
    }

    BuildAPI() {
        console.log(`${this.name} is building API...`);
    }

    DeployApps() {
        console.log(`${this.name} is deploying  apps...`)
    }
}

const frontend = new FrontEndDeveloper('artiko');
const backend = new BackEndDeveloper('artiko');
const devops = new DevOps('Artiko');
const fullstack = new FullStackDeveloper('artiko');

frontend.commitChanges(); //output : artiko is committing changes...
frontend.BuildUI(); //output : artiko is building UI...

backend.commitChanges(); //output : artiko is committing changes...
backend.BuildAPI(); //output : artiko is building API...

devops.commitChanges(); //output : artiko is committing changes...
devops.DeployApps(); //output : Artiko is deploying  apps...

fullstack.commitChanges(); //output : artiko is committing changes...
fullstack.BuildUI(); //output : artiko is building UI...
fullstack.BuildAPI(); //output : artiko is building API...
fullstack.DeployApps(); //output : Artiko is deploying  apps...

console.log("================================================");
//==========================================================

//Case 2 : Object Composition
function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApps: () => {
            console.log(`${developer.name} is deploying apps...`);
        }
    }
}


//memudahkan membuat objek, kita manfaatkan object creator, yaitu 'Object.assign()'
function createFrontEndDev(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDev(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOpsEng(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDev(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

//memanggil output

const frontendDev = new createFrontEndDev('artiko');
frontendDev.commitChanges(); //output : artiko is committing changes...
frontendDev.buildUI(); //output : artiko is building UI...
console.log(`is ${frontendDev.name} developer?`, frontendDev instanceof Developer); //output : is artiko developer? true

const backendDev = new createBackEndDev('artiko');
backendDev.commitChanges(); //output : artiko is committing changes...
backendDev.buildAPI(); //output : artiko is building API...
console.log(`is ${backendDev.name} developer?`, backendDev instanceof Developer); //output : is artiko developer? true

const devopsEng = new createDevOpsEng('artiko');
devopsEng.commitChanges(); //output : artiko is committing changes...
devopsEng.deployApps(); //output : artiko is deploying apps...
console.log(`is ${devopsEng.name} developer?`, devopsEng instanceof Developer); //output : is artiko developer? true

const fullstackDev = new createFullStackDev('artiko');
fullstackDev.commitChanges(); //output : artiko is committing changes...
fullstackDev.buildUI(); //output : artiko is building UI...
fullstackDev.buildAPI(); //output : artiko is building API...
fullstackDev.deployApps(); //output : artiko is deploying apps...
console.log(`is ${fullstackDev.name} developer?`, fullstackDev instanceof Developer); //output : is artiko developer? true
//remember >> instantof untuk melalukan check-ing apakah class tersebut benar memiliki komponen yang dipanggil