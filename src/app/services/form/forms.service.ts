import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private FormsData: Map<string, Object> = new Map<string, Object>();

  constructor() {
    this.loadDataFromSessionStorage();
   }

  addFormData(formName: string, formData: Object) {
    this.FormsData.set(formName, formData);
    this.saveDataToSessionStorage()
    console.log(this.FormsData.get(formName));
  }

  getFormData(formName: string): Object | undefined{
    const data = this.FormsData.get(formName);
    return data;
  }

  private saveDataToSessionStorage() {
    const serializedData = JSON.stringify(Array.from(this.FormsData.entries()));
    sessionStorage.setItem('FormsData', serializedData); 
  }

  private loadDataFromSessionStorage() {
    const data = sessionStorage.getItem('FormsData');
    if (data) {
      this.FormsData = new Map<string, Object>(JSON.parse(data)); 
    }
  }
}
