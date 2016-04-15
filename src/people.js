export class People {
    constructor() {
        this.FirstName = "Julio";
        this.LastName = "Moguel";
        this.People = [];
        this.Editing = undefined;
    }

    get FullName() {
        return `${this.FirstName} ${this.LastName}`;
    }

    Create() {
        this.People.push(this.FullName);
    }

    Delete(index){
        this.People.splice(index,1);
    }

    Edit(index){
        this.Editing = index;
        this.NewValue = this.People[index];
    }

    Save(index) {
        this.People[index] = this.NewValue; 
        this.Editing = undefined;
    }
}