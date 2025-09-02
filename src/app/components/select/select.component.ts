import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent {
  // Label del select
  @Input() label: string = 'Seleccione';
  // Placeholder opcional
  @Input() placeholder: string = '';
  // Posiciones: "start", "fixed", "stacked", "floating"
  @Input() labelPlacement: 'start' | 'fixed' | 'stacked' | 'floating' = 'start';
  // Lista de opciones [{label, value}]
  @Input() options: { label: string; value: any }[] = [];
  // Valor seleccionado
  @Input() value: any;
  // Evento al cambiar selección
  @Output() valueChange = new EventEmitter<any>();

  onSelectChange(event: any) {
    this.valueChange.emit(event.detail.value);
  }
}
