import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] | undefined;
  newAlbum: string;
  loaded: boolean | undefined;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  // tslint:disable-next-line:typedef
  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  addNewAlbum() {
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    // tslint:disable-next-line:no-shadowed-variable
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      // @ts-ignore
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

  // tslint:disable-next-line:typedef
  deleteAlbum(id: number) {
    // @ts-ignore
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }


}
