import {Component, Injectable} from '@angular/core';

export interface Preloader {
   isLoading: boolean;
}

@Injectable()
export class PreloaderService {

  preloading: boolean = false;
  loader: Preloader = {isLoading: false}; 

  constructor() { }

  showLoader(){
     this.loader.isLoading = true;
  }

  hideLoader(){
    this.loader.isLoading = false;
  }

  isLoading(){
    return this.loader.isLoading;
  }
 
}

