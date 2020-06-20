class Storage{
    constructor(items){
        this.items = items
    }
    getItems(){
        return this.items
        
    }

    addItem(item){
        this.items.push(item);
    }

    
    removeItem(item){
        for(let i = 0; i < this.items.length; i +=1){
            const indEx = this.items.indexOf(item);
            
            if (item === this.items[i]){
                
                // console.log(this.items[i]);
                // console.log(indEx);
                this.items.splice(indEx, 1);
                
            };

        };
       
    };
    
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
