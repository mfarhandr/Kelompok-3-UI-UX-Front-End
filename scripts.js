//Buku Terbaru dan Terpopuler
class perBuku extends HTMLElement{
  constructor(){
    super();
   this.root = this.attachShadow({mode: 'open'});
  }
  set buku(buku){
    this.root.innerHTML = `
    <style>
    #wrapper {
      border:hide;
      width: 630px;
      height:400px;
      float: left; 
      padding:15px;
    }
    #container{
      border-bottom:solid;
      width: 666px;
      height:315px;
      border-color:MediumSeaGreen;
      border-width:4px;
    }
    #header{
      border-bottom:solid;
      width:666px;
      height:50px;
      border-color:MediumSeaGreen;
    }
    #type{
      border:hide; 
      width:275px;
      height:50px; 
      background-color: MediumSeaGreen;
      display:flex;
      justify-content:center;
      align-items: center;
    }
    #pict{
      border:hide; 
      width:250px; 
      height:250px; 
      float:left; 
      margin-top:4px;
      margin-left:4px;
      border-color:MediumSeaGreen;
    }
    #content{
      border:hide;
      width:400px; 
      height:250px; 
      float:left; 
    }
    #judulbuku{
      style = "border:hide;
      width:400px;
      height:50px;
      float:left;
      padding-bottom:-10px;"
   }
   #aurthor{
     border:hide;
     width:400px;
     height:10px;
     float:left;
   }
   #desc{
    style = "border:hide;
    width:400px;
    height:100px;
    float:left;
    margin-top: 20px;
   }
   #rate{
    style = "border:hide; 
    width:189px; 
    height:70px;
    float:left; 
    text-align:center; 
    display: 
    flex;justify-content: 
    center;
    align-items: center;
   }

   #buttonbuy {
     float: left;
     padding: 16px;
   }
   .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: 550;
  }
  
  .button1 {
    background-color: white; 
    color: green; 
    border: 2px solid #4CAF50;
  }
  
  .button1:hover {
    background-color: #4CAF50;
    color: white;
  }
   
   h1{
      font-family: "arial";
      font-size: 30px;
    }
    h3{
      font-family: "arial";
      font-size: 20px;
    }

    h5{
      font-family: "arial";
    }

    p{
      font-family: "arial";
    }
    img{
      border-radius:8px;
      padding-right : 10px;
      width : 225px;
      heigth : 250px;
    }
    #rate{
      float : left;
    }
    #buynow{
      background-color: MediumSeaGreen;
    }
    </style>
    <div id="wrapper">
      <div id = "container">
        <div id = "header">
          <div id = "type">
            <h1>${buku.tipebuku}</h1>
          </div>
        </div>
        <div id = "pict">
          <img src = "${buku.img}" height="250 px">
        </div>
        <div id = "content">
          <div id = "judulbuku">
            <h3>${buku.judul}</h3>
          </div>
          <div id="aurthor">
            by ${buku.penulis}
          </div>
          <div id="desc">
            <p>${buku.deskripsi}</p>
          </div>
          <div id="rate">
            <p id="rate">Rate: ${buku.bintang} ${buku.rate}</p>
          </div>
          <div id="buttonbuy">
            <button type="button" class="button button1">Rp.${buku.harga} - Buy Now</button>
          </div>
        </div>        
      </div>
    </div>
    `;
  }
    
}

//List Buku
class catBuku extends HTMLElement{
  constructor(){
    super();
    this.root = this.attachShadow({mode: 'open'});
  }

  set category(category) {
    this.shadowRoot.innerHTML = `

    <style> #ktg {
      width: 100%;
      margin-left: 8px;
      font-size: small;
      font-family: monospace;
    }
    
    #ktg_pad {
      width: 400px;
      height: 5px;
      background-color: mediumseagreen;
      
    }
    #ktg_text {
      margin-bottom: 5px;
      height: fit-content;
      color: black;
      text-align: left;
    }
    </style>

    <div id="ktg">
        <h1 id="ktg_text">${category.kategori.toUpperCase()}</h1>
        <div id="ktg_pad" > </div> 
    </div>
    

    `;
  }     
}

class listBuku extends HTMLElement{
  constructor(){
    super();
   this.root = this.attachShadow({mode: 'open'});
  }
  set buku(buku){
    this.root.innerHTML = `
         <style>
            .card {
                position:relative;
                float:left;
                word-wrap: break-word;
                margin: 5px;
                padding:10px;
                width: 150px;
                height: 300px;
                background-color: #ffffff;
                text-align:center;
                overflow:auto;
                border:#c0c0c0 solid;
                border-radius: 10px;
            }
            
            .card img {
                width: 110px;
                height: 150px;
                margin-bottom:10px;
                margin-left: auto;
                margin-right:auto;
                display: block;
            }
            
            .overlay {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100%;
                width: 100%;
                opacity: 0;
                transition: .5s ease;
                background-color: #e4e4e4;
              }

              .card:hover .overlay {
                opacity: 1;
              }

              .desk {
                font-size: 15px;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                text-align: center;
              }
            
                p,h3,h5{
                  margin:0px;
                }
                
                .box {
                  margin-top:0px;
                  margin-bottom:10px;
                  padding:1px;
                  background-color: #787878;
                  color:white;
                  border-radius:5px;
                }

                #price {
                  font-size: large;
                  text-align: center;
                  font-weight: bold;
               }
                
        </style>
        
            <div class="card">
                <h2 class="box">${buku.kategori}</h2>
                <img src="${buku.img}">
                <div class="overlay">
                <div class="desk"><h5>by ${buku.penulis}</h5> <br>
                ${buku.deskripsi}</div>
                </div>
                <h3 style="height:50px;">${buku.judul}</h3> <br>
                <p id="price"> Rp ${buku.harga},00 </p?
            </div>         
    `;
  }
}

class filterBuku extends HTMLElement{
  constructor(){
    super();
   //this.root = this.attachShadow({mode: 'open'});
  }
  set filter(filter){
    this.innerHTML = `
        <a href="#" onclick="ambildataListBukuKategori('${filter.kategori}')">${filter.kategori.toUpperCase()}</a>        
    `;
  }
}

class BukuList{
    constructor() {
      this.buku = "";
      this.kategori = ""
    }
    setBuku(buku){
      this.buku = buku
    }
    getBuku(){
      return this.buku
    }
    setKategori(kategori){
      this.kategori = kategori
    }
    getKategori(){
      return this.kategori
    }
}

window.customElements.define('per-buku',perBuku);
window.customElements.define('list-buku',listBuku);
window.customElements.define('cat-buku',catBuku);
window.customElements.define('filter-buku',filterBuku);
let Buku = new BukuList();

//cara menggunakan komponen
async function fetchBuku(){
    let data = await(await fetch('https://dmujitempbagifile.s3.ap-southeast-1.amazonaws.com/buku.json')).json();
    Buku.setBuku(data)
    Buku.getBuku();
}

async function ambildataBukuTerbaruTerpopuler(){
  const options ={
    headers:{'Content-Type':'application/json'}
  };
  
  let data = Buku.getBuku()
  const temp2 = document.createElement('per-buku');
  const temp3 = document.createElement('per-buku');
  for (var i = 0; i < Buku.getBuku().length; i++){
    if (data[i]["flag"] == "topnew"){
      data[i]["tipebuku"] = "BUKU TERBARU";
      data[i]["bintang"] = "⭐".repeat(data[i]["rate"]);
      temp2.buku = data[i];
    };
  };
  for (var j = 0; j < Buku.getBuku().length; j++){
    if (data[j]["flag"] == "toprate"){
      data[j]["tipebuku"] = "BUKU TERLARIS";
      data[j]["bintang"] = "⭐".repeat(data[j]["rate"]);
      temp3.buku = data[j];
    };
  };
  workspace.appendChild(temp2);
  workspace.appendChild(temp3);
}

async function ambildataListBuku(){
  Buku.setKategori('')
  document.getElementById("areafilter").innerHTML = `
      <a href="#" onclick="ambildataListBuku('')">All</a>
  `;
  document.getElementById("areasort").innerHTML = `
      <a href="#" onclick="sortBuku('asc')">Harga Tertinggi</a>
      <a href="#" onclick="sortBuku('desc')">Harga Terendah</a>
  `;

  const options ={
    headers:{'Content-Type':'application/json'}
  };
 
  var tempCatCheck = "-";
  document.getElementById("areakerja").innerHTML = "";

  Buku.getBuku().forEach(items=>{
      const daftar = document.createElement('list-buku');
      const tempCat = document.createElement('cat-buku');
      const tempFilter = document.createElement('filter-buku');

      tempCat.category = items;
      tempFilter.filter = items;
      if (tempCatCheck != items.kategori) {
        tempCatCheck = items.kategori;
        areakerja.appendChild(tempCat);
        areafilter.appendChild(tempFilter);
      }
      
      daftar.buku = items;
      areakerja.appendChild(daftar);
  });
}

async function ambildataListBukuKategori(kategori){
  Buku.setKategori(kategori)
  
  const options ={
    headers:{'Content-Type':'application/json'}
  };
 
  var tempCatCheck = "-";
  document.getElementById("areakerja").innerHTML = "";

  Buku.getBuku().forEach(items=>{
      const daftar = document.createElement('list-buku');
      const tempCat = document.createElement('cat-buku');

      tempCat.category = items;
      if (kategori == items.kategori) {
        if (tempCatCheck != items.kategori) {
          tempCatCheck = items.kategori;
          areakerja.appendChild(tempCat);
        }
  
        daftar.buku = items;
        areakerja.appendChild(daftar);
      }
      
      
  });
}

async function sortBuku(order){
  let sorted = Buku.getBuku();
  if(order == 'asc')
  sorted.sort((a, b) => b.harga - a.harga)
  else
  sorted.sort((a, b) => a.harga - b.harga)

  Buku.setBuku(sorted)
  console.log(Buku.getBuku())
  if(Buku.getKategori() != '')
  await ambildataListBukuKategori(Buku.kategori)
  else
  await ambildataListBuku().then(()=>console.log(Buku.getKategori()))
}

//panggil fungsi

fetchBuku()
    .then(text => {
        
      ambildataBukuTerbaruTerpopuler();

      ambildataListBuku();

    })
    .catch(err => {
        // Deal with the fact the chain failed
    });
