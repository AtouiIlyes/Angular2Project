/**
 * Created by atoui on 24/07/2017.
 */
import { Actualite } from './actualite';
import { ACTUALITES } from './actualite-list';
import { Injectable } from '@angular/core';

@Injectable()
export class ActualiteService {
    getActualites(): Promise<Actualite[]> {
        return Promise.resolve(ACTUALITES);
    }

    getActualitesSlowly(): Promise<Actualite[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getActualites()), 2000);
        });
    }

    getActualite(id: number): Promise<Actualite> {
        return this.getActualites()
            .then(actualites => actualites.find(actualite => actualite.id === id));
    }
}