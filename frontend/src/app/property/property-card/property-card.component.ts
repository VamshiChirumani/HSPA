import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    //template: '<h1> I am a card</h1>',
    templateUrl:'property-card.component.html',
    styleUrls : ['property-card.component.css']
}

)
export class PropertyCardComponent{

    Property: any = {
        "id":1,
        "Name":"Vamshi House",
        "Type": "House",
        "Price": 120000

    }

}