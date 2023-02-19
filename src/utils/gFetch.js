let productos = [
   {id: '1', categoria: 'remera', name: "Remera Gris", price:37, foto: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/110/871/products/remera-gris1-47195b33e6e14831cc16097722042131-640-0.jpg', stock: 2 },
   {id: '2', categoria: 'remera', name: "Remera Negra", price:37, foto: 'https://cdn.shopify.com/s/files/1/0517/6282/3347/products/HXIM09525011_8f633a59-167c-4f8a-b33b-4a508c140e27_800x.jpg?v=1672319455', stock: 5 },
   {id: '3', categoria: 'remera', name: "Remera Azul", price:37, foto: 'https://warehouse.com.ar/wp-content/uploads/2020/07/remera-jesey-azul-marino-cardado.png', stock: 7 },
   {id: '4', categoria: 'remera', name: "Remera Roja", price:37, foto: 'https://tommyargentina.vteximg.com.br/arquivos/ids/199175-500-667/WW0WW30400_XIC_2.jpg?v=637768328827600000', stock: 6 },
   {id: '5', categoria: 'pantalon', name: "Pantalon Negro", price:37, foto: 'https://alcatraz.com.ar/wp-content/uploads/2021/02/Pantalon-Ultra-Negro_0000s_0004_Pantalon-Ultra-6.jpg', stock: 2 },
   {id: '6', categoria: 'pantalon', name: "Pantalon Blanco", price:37, foto: 'https://www.segutecnica.com/images/000000000000005443111ombu-pantalon-de-trabajo-blanco-segutecnica.png', stock: 5 },
]
// pendiente - completada - rechazada (95%)
export const gFetch = (id) => new Promise( (res, rej)=>{
let condition = true 
// acciones
if (condition) {
      setTimeout(()=>{
         res(id ? productos.find(prod => id === prod.id) : productos)
      },2000)
} else { 
   rej('Todo mal')
}
 })

