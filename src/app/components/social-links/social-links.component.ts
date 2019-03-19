import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-social-links",
  templateUrl: "./social-links.component.html",
  styleUrls: ["./social-links.component.scss"]
})
export class SocialLinksComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  generateLink(): string {
    const isDesktop = this.deviceService.isDesktop();
    return `https://${
      isDesktop ? "web" : "api"
    }.whatsapp.com/send?phone=5581999205306&text=Olá, Property - Governança Imobiliária & Consultoria.`;
  }

  ngOnInit() {}
}
