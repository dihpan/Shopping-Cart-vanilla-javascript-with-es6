const burger = document.querySelector( '.burger' );

burger.addEventListener( 'click', () => {
  document.querySelector( '.navbar-menu' ).classList.toggle( 'is-active' );
} );


// Class  Shop
class Shop {
  constructor( title, harga, gambar ) {
    this.title = title;
    this.harga = harga;
    this.gambar = gambar;
  }

  addToCart() {
    let row = document.createElement( 'div' );
    let items = document.querySelector( '.items' );
    let titleItem = document.querySelectorAll( '.pepega' );
    titleItem.forEach( t => {
      if ( t.textContent === this.title ) {
        return alert( 'Item ini Sudah Ada' );
      }
    } );
    let rowKonten = `
    <div class="item-baris">
      <div class="title-img">
          <h1 class="pepega">${this.title}</h1>
          <img src="${this.gambar}" alt="" class="image is-128x128">
      </div>
      <h1 class="title is-5 harga">${this.harga}</h1>
      <div class="kolom-quantiti">
          <input type="number" class="input quantiti" value="1">
          <button class="button is-danger hapus">Hapus</button>
      </div>
    </div>
    `;
    row.innerHTML = rowKonten;
    items.appendChild( row );
    row.querySelector( '.hapus' ).addEventListener( 'click', Shop.removeItem );
    row.querySelector( '.quantiti' ).addEventListener( 'click', Shop.quantiti );
  }

  static updateHarga() {
    let items = document.querySelector( '.items' );
    let itemBaris = document.querySelectorAll( '.item-baris' );
    let total = 0;
    for ( let i = 0; i < itemBaris.length; i++ ) {
      let item = itemBaris[ i ];
      let quantity = item.querySelectorAll( '.quantiti' )[ 0 ].value;
      let harga = item.querySelectorAll( '.harga' )[ 0 ];
      let realHarga = parseFloat( harga.textContent.replace( 'Rp', '' ) );
      total += realHarga * quantity;
    }
    total = Math.floor( total * 1000 ) / 1000;
    document.querySelector( '.totalgan' ).innerHTML = `Rp${total}`;
  }

  static removeItem( e ) {
    e.target.parentElement.parentElement.remove();
    Shop.updateHarga();
  }

  static quantiti( e ) {
    const quantity = e.target;
    if ( quantity.value == 0 ) {
      quantity.value = 1;
    }
    Shop.updateHarga();
  }
}

( function shop() {
  const pesan = document.querySelectorAll( '.pesan' );
  pesan.forEach( btnPesan => {
    btnPesan.addEventListener( 'click', keranjang );
  } );

  const tombol_beli = document.querySelector( '.tombol_beli' );
  tombol_beli.addEventListener( 'click', removeCart );
  Shop.updateHarga();
} )();

function keranjang( e ) {
  let tombol = e.target;
  let item = tombol.parentElement.parentElement;
  let title = item.querySelectorAll( '.nama' )[ 0 ].textContent;
  let harga = item.querySelectorAll( '.harga-makan' )[ 0 ].textContent;
  let gambar = item.querySelectorAll( '.ee' )[ 0 ].src;
  let produk = new Shop( title, harga, gambar );
  produk.addToCart();
  Shop.updateHarga();
}

function removeCart() {
  alert( 'Terima kasih sudah membeli' );
  let items = document.querySelector( '.items' );
  while ( items.hasChildNodes() ) {
    items.removeChild( items.firstChild );
  }
  Shop.updateHarga();
}
