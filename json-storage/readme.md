#### json-storage
---
>Stores content in json format

This Json storage is similar to a dictionary in c#.  
We can store Key/Value pairs. Key must always be a string.  

  
#### Install
---
>npm i memoize-json-db  
  
#### Usage
---
>var instance = require('memoize-json-db')  
  
>// add an  item
>instance.addItem("1", "item_1")  
>instance.addItem("2", [2,3,4,5])  
>console.log(instance.getItems())  
>// => { '1': 'item_1', '2': [ 2, 3, 4, 5 ] }  
>  
>//delete an item  
>instance.deleteItem("1")   
>console.log(instance.getItems())  
>// => { '2': [ 2, 3, 4, 5 ] }  
>
>
>
    
  
#### APIs
---
##### addItem(key, value[s])  
---  
add an item to json storage  
>**key** can be a string  
>**value** can be any type (object|array)  
>return value would be *true=>if value inserted*  
>*false=>if value not inserted*  
  
  
##### getItem(key)
---
retrieve an item from json storage
>**key** can be a string  
>returns *value*  if key is available   
>*false=>if key not available*  


##### deleteItem(key)
---
deletes the entry with specified key in json storage
>**key** can be a string  
>returns *value*  if key/value is deleted   
>*false=>if key not available*  

##### reset()
---
reset the json storage (it will be reset to null)
>returns *value*  if key is reset   
>*false=>if not able to reset*  

##### getCount()
---
returns the no. of elements in json storage  
i.e - it will return no. of keys  
>returns *count* as Int   

##### getItems()
---
retrieve all the available items from json storage  

##### getKeys()
---
retrieve all the keys inserted by the user in json storage