import { Router } from "@angular/router";



export class MainComponent{

    constructor(
        private router: Router
    ){}
    gotoCarpool(){
        this.router.navigateByUrl('');
    }

    // gotoGraduateCheck(){
    //     this.router.navigateByUrl('GraduateCheck');
        
    // }

    // gotoUsedCar(){
    //     this.router.navigateByUrl('UsedCar');
        
    // }

}