import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false,
})
export class SidebarComponent {
  menuItems = [
    { icon: 'person-outline', label: 'Perfil', action: 'profile' },
    { icon: 'lock-closed-outline', label: 'Cambiar Contraseña', action: 'change-password' },
    { icon: 'log-out-outline', label: 'Cerrar Sesión', action: 'logout' },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  handleAction(action: string) {
    switch (action) {
      case 'profile':
        this.router.navigate(['/profile']);
        break;
      case 'change-password':
        this.router.navigate(['/change-password']); // ⚡ si tienes página de cambio de contraseña
        break;
      case 'logout':
        this.authService.logout();
        this.router.navigate(['/login']);
        break;
    }
  }
}
