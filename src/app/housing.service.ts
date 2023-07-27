import { Injectable } from '@angular/core';
import { localDaCasa_interface } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class servicoDeHabitacao {

  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<localDaCasa_interface[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<localDaCasa_interface | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}