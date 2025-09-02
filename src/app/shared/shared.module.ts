import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InputComponent } from '../components/input/input.component';
import { SelectComponent } from '../components/select/select.component';
import { ButtonComponent } from '../components/button/button.component';
import { CardComponent } from '../components/card/card.component';
import { PrincipalNewsComponent } from '../components/principal-news/principal-news.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ListComponent } from '../components/list/list.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    InputComponent,
    SelectComponent,
    ButtonComponent,
    CardComponent,
    PrincipalNewsComponent,
    HeaderComponent,
    SidebarComponent,
    ListComponent,
  ]
})
export class SharedModule {}
