/**
 *  Built-In Class
 *  Pembuatan sebuah class dari bawwaan built-in JS
 */

 const date = new Date();
 
 const timeInJakarta = date.toLocaleString('id-ID', {
   timeZone: 'Asia/Jakarta',
 });
  
 const timeInTokyo = date.toLocaleString('ja-JP', {
   timeZone: 'Asia/Tokyo',
 });
  
 const timeInMakassar = date.toLocaleString('id-ID', {
   timeZone: 'Asia/Makassar',
 });

//  Create the unique array

class UiqueArray extends Array{
    constructor(...args){
        const uniqueValue = args.filter((item, index) =>
        args.indexOf(item ==index);
        super(...uniqueValue);
    }
push(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}