import { Component, OnInit } from '@angular/core';
import { buku } from '../model/buku';
import { BUKU } from './sample-buku';
import { BukuService } from '../services/buku.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {


  abuku: buku[] = [];

  selectedBuku?: buku;

  formVisible?: boolean = false;
  constructor(
    private bukuService: BukuService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // this.getAllBuku();
  }

  // onSelect(book: buku): void {
  //   this.selectedBuku = book;
  //   this.messageService.add(`BukuComponent: Selected Buku id=${book.id}`);
  // }


  onSelect(bukuId: number){
    // this.selectedBuku = book;
    this.bukuService.getBuku(bukuId).subscribe(returnData =>{
      this.selectedBuku = returnData;
      console.log(returnData);
    })
    this.messageService.add(`BukuComponent: Selected Buku id=${bukuId}`);
  }
  

  getAllBuku():void {
    // console.log("test");
    this.bukuService.getAllBuku()
    .subscribe(
      returnData =>{
        this.abuku=returnData.sort((x1, x2) => {return x1.id - x2.id});
      }
      );

    this.messageService.add('BukuComponent: Buku Fetched');
    console.log(this.abuku);
  }

  showForm() {
    this.formVisible = true;
  }

 

}

