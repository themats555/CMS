import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuHeaderComponent } from './menu-header/menu-header.component'; 
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from './direttive/highlight.directive';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import { NodoComponent } from './nodo/nodo.component'; 
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import { GrigliaComponent } from './griglia/griglia.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        HighlightDirective,
        NodoComponent,
        GrigliaComponent,
        DialogoComponent
    ],
    exports: [HighlightDirective],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, MatGridListModule, MatBottomSheetModule,MatDialogModule, 
        MatGridListModule, NgFor, NgIf, MatButtonModule,
        MatToolbarModule,
        MenuHeaderComponent,
        CommonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class AppModule { }
export { HighlightDirective };

