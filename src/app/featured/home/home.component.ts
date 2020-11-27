import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpaceServices } from './../../core/services/space-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  spaceDetails: any = [];
  tempSpaceDetails: any = [];
  bufferSize = 10;
  selectedYear: any = '';
  selectedLaunch: any = '';
  selectedLand: any = '';
  loading = true;
  years: Array<number> = [2006, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  constructor(private router: Router, private route: ActivatedRoute, private spaceService: SpaceServices) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedYear = params['launch_year'] ? params['launch_year'] : '';
      this.selectedLaunch = params['launch_success'] ? params['launch_success'] : '';
      this.selectedLand = params['land_success'] ? params['land_success'] : '';
    });
    this.spaceService.getSpaceDetails(this.selectedYear, this.selectedLaunch, this.selectedLand).subscribe( (res) => {
      this.spaceDetails = res;
      this.tempSpaceDetails = this.spaceDetails.splice(0, this.bufferSize);
      this.loading = false;
    });
  }
  yearFilterClick(year: string) {
    this.loading = true;
    this.selectedYear = year === this.selectedYear ? '' : year;
    this.spaceService.getSpaceDetails(this.selectedYear, this.selectedLaunch, this.selectedLand ).subscribe( (res) => {
      this.spaceDetails = res;
      this.tempSpaceDetails = this.spaceDetails.splice(0, this.bufferSize);
      this.loading = false;
    });
    if (this.selectedYear !== '') {
      this.router.navigate(['/'], { queryParams: { launch_year: this.selectedYear }, queryParamsHandling: 'merge' });
    } else {
      this.router.navigate(['/'], { queryParams: { launch_year: null }, queryParamsHandling: 'merge' });
    }
  }
  launchSuccess(launch: string) {
    this.loading = true;
    this.selectedLaunch = launch === this.selectedLaunch ? '' : launch;
    this.spaceService.getSpaceDetails(this.selectedYear, this.selectedLaunch, this.selectedLand ).subscribe( (res) => {
      this.spaceDetails = res;
      this.tempSpaceDetails = this.spaceDetails.splice(0, this.bufferSize);
      this.loading = false;
    });
    if (this.selectedLaunch !== '') {
      this.router.navigate(['/'], { queryParams: { launch_success: this.selectedLaunch }, queryParamsHandling: 'merge' });
    } else {
      this.router.navigate(['/'], { queryParams: { launch_success: null }, queryParamsHandling: 'merge' });
    }
  }
  landSuccess(land: string) {
    this.loading = true;
    this.selectedLand = land === this.selectedLand ? '' : land;
    this.spaceService.getSpaceDetails(this.selectedYear, this.selectedLaunch, this.selectedLand ).subscribe( (res) => {
      this.spaceDetails = res;
      this.tempSpaceDetails = this.spaceDetails.splice(0, this.bufferSize);
      this.loading = false;
    });
    if (this.selectedLand !== '') {
      this.router.navigate(['/'], { queryParams: { land_success: this.selectedLand }, queryParamsHandling: 'merge' });
    } else {
      this.router.navigate(['/'], { queryParams: { land_success: null }, queryParamsHandling: 'merge' });
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (document.documentElement.offsetHeight === window.scrollY + window.innerHeight) {
      if ( this.spaceDetails.length >= this.tempSpaceDetails.length) {
        this.fetchMore();
      }
    }
  }

  fetchMore() {
    const len = this.tempSpaceDetails.length;
    const more = this.spaceDetails.slice(len, this.bufferSize + len);
    setTimeout(() => {
      this.tempSpaceDetails = this.tempSpaceDetails.concat(more);
    }, 200);
  }

}

