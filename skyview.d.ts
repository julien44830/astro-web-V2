declare module 'skyview' {
    // Ajoutez ici vos déclarations de types pour la bibliothèque SkyView
    // Par exemple :
    export default class SkyView {
      constructor(options: SkyViewOptions);
      render(): void;
    }
  
    interface SkyViewOptions {
      container: string;
      latitude: number;
      longitude: number;
      date: Date;
      // Ajoutez d'autres propriétés d'options ici si nécessaire
    }
  }
  