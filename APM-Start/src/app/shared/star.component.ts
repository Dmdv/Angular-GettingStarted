import { Component } from '@angular/core';
import { OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

// OnChanges watches only changes on input properties
export class StarComponent implements OnChanges {
    starWidth: number;
    // here we define a property which is set outside of component
    @Input() rating: number;
    // here we define a property which is read from nested component
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        console.log(`Star was clicked! with rating ${this.rating}`);
        this.ratingClicked.emit(`The rating is: ${this.rating} stars`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
