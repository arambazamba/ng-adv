import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PopupContainerComponent } from "../popup-container.component";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"]
})
export class PopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PopupContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { header: string }
  ) {}

  ngOnInit() {}
}
