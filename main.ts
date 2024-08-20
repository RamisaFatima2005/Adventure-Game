#! /usr/bin/env node 
import inquirer from "inquirer";

class Player{
    name:string
    energy:number=100
    constructor(name:string){
        this.name=name
    }
    energyDecreased(){
        let fuel=this.energy-25
        this.energy=fuel
    }
    energyIncreased(){
        this.energy=100
    }
}
class Opponent{
    name:string
    energy:number=100
    constructor(name:string){
        this.name=name
    }
    energyDecreased(){
        let fuel=this.energy-25
        this.energy=fuel
    }
}

const player = await inquirer.prompt({
    name:"name",
    type:"input",
    message:"Please Enter Your Name:"
})

const opponent = await inquirer.prompt({
    name:"select",
    type:"list",
    message:"Please Select Your Opponent:",
    choices:["Skeleton","Zombie","Alien"]
})

let p1=new Player(player.name)
let o1=new Opponent(opponent.select)

do{
    //skeleton
    if(opponent.select === "Skeleton"){
        let ask=await inquirer.prompt({
            name:"option",
            type:"list",
            message:"What would you like to do?",
            choices:["Attack","Drink Portion","Run for Life"]
        });
        if(ask.option === "Attack"){
            let num=Math.floor (Math.random()*2)
            if(num > 0){
                p1.energyDecreased()
                console.log(`${p1.name} fuel is ${p1.energy}`)
                console.log(`${o1.name} fuel is ${o1.energy}`)
                if(p1.energy <= 0){
                    console.log(`You loose, Better Luck Next Time`);
                    process.exit()
                }
            }
            if(num<=0){
                o1.energyDecreased()
                console.log(`${p1.name} fuel is ${p1.energy}`)
                console.log(`${o1.name} fuel is ${o1.energy}`)
                if(o1.energy <= 0){
                    console.log(`You Win`);
                    process.exit()
                }
            }
        }
        if(ask.option === "Drink Portion"){
            p1.energyIncreased()
            console.log(`You drink health portion your energy is ${p1.energy}`);
        }
        if(ask.option === "Run for Life"){
            console.log(`You loose, Better Luck Next Time`);
            process.exit()
        }
    }

    //"Zombie"
    if(opponent.select === "Zombie"){
        let ask=await inquirer.prompt({
            name:"option",
            type:"list",
            message:"What would you like to do?",
            choices:["Attack","Drink Portion","Run for Life"]
        });
        if(ask.option === "Attack"){
            let num=Math.floor (Math.random()*2)
            if(num > 0){
                p1.energyDecreased()
                console.log(`${p1.name} fuel is ${p1.energy}`)
                console.log(`${o1.name} fuel is ${o1.energy}`)
                if(p1.energy <= 0){
                    console.log(`You loose, Better Luck Next Time`);
                    process.exit()
                }
            }
            if(num<=0){
                o1.energyDecreased()
                console.log(`${p1.name} fuel is ${p1.energy}`)
                console.log(`${o1.name} fuel is ${o1.energy}`)
                if(o1.energy <= 0){
                    console.log(`You Win`);
                    process.exit()
                }
            }
        }
        if(ask.option === "Drink Portion"){
            p1.energyIncreased()
            console.log(`You drink health portion your energy is ${p1.energy}`);
        }
        if(ask.option === "Run for Life"){
            console.log(`You loose, Better Luck Next Time`);
            process.exit()
        }
    }

    //"Alien"
    if(opponent.select === "Alien"){
        let ask=await inquirer.prompt({
            name:"option",
            type:"list",
            message:"What would you like to do?",
            choices:["Attack","Drink Portion","Run for Life"]
        });
        if(ask.option === "Attack"){
            let num=Math.floor (Math.random()*2)
            if(num > 0){
                p1.energyDecreased()
                console.log(`${p1.name} fuel is ${p1.energy}`)
                console.log(`${o1.name} fuel is ${o1.energy}`)
                if(p1.energy <= 0){
                    console.log(`You loose, Better Luck Next Time`);
                    process.exit()
                }
            }
            if(num<=0){
                o1.energyDecreased()
                console.log(`${p1.name} fuel is ${p1.energy}`)
                console.log(`${o1.name} fuel is ${o1.energy}`)
                if(o1.energy <= 0){
                    console.log(`You Win`);
                    process.exit()
                }
            }
        }
        if(ask.option === "Drink Portion"){
            p1.energyIncreased()
            console.log(`You drink health portion your energy is ${p1.energy}`);
        }
        if(ask.option === "Run for Life"){
            console.log(`You loose, Better Luck Next Time`);
            process.exit()
        }
    }
}
while(true)