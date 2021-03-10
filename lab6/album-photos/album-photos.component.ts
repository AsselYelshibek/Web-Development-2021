import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../models';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] | undefined;
  parentId: number | undefined;
  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getPhotos();
  }

  // tslint:disable-next-line:typedef
  getPhotos(){
    // @ts-ignore
    this.parentId = this.route.parent.snapshot.params.id;

    this.albumsService.getPhotos(this.parentId).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
