import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import { AlbumsService } from '../albums.service';
import {Album} from '../models';

// @ts-ignore
@Component({
  selector: 'app-album-detail',
  templateUrl: `./album-detail.component.html`,
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  loaded: boolean | undefined;
  hide: boolean | undefined;
  constructor(private albumService: AlbumsService,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAlbum();
  }

  // tslint:disable-next-line:typedef
  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  // tslint:disable-next-line:typedef
    updateAlbum() {
      this.loaded = false;
      this.albumService.updateAlbum(this.album).subscribe((album) => {
        console.log(album);
        this.loaded = true;
      });
    }

  // tslint:disable-next-line:typedef
    goBack() {
      this.location.back();
    }


  // tslint:disable-next-line:typedef
    showPhotos() {
      this.hide = true;
      this.router.navigate(['photos'], {relativeTo: this.route});
    }

}
