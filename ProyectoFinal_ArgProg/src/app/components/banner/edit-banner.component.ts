import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/servicios/banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  banner: Banner = null;

  constructor(
    private bannerServ: BannerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.bannerServ.detail(id).subscribe(
      (data) => {
        this.banner = data;
      },
      (err) => {
        alert("No se pudo modificar el banner.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.bannerServ.update(id, this.banner).subscribe(
      (data) => {
        this.router.navigate(['/portfolio']);
      },
      (err) => {
        alert("No se pudo modificar el banner.");
        this.router.navigate(['/portfolio']);
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/portfolio'])
  }
}
